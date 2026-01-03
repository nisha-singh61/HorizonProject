require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// --- Import Models and Middleware ---
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { WatchlistModel } = require("./model/WatchlistModel");


const defaultWatchlistModule = require("../dashboard/src/data/defaultWatchlist"); 
const defaultWatchlist = defaultWatchlistModule ? defaultWatchlistModule.default : [];

const { userVerification } = require("./Middlewares/AuthMiddleware");
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.VITE_MONGO_URL;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN;
const HORIZON_FRONTEND_ORIGIN = process.env.HORIZON_FRONTEND_ORIGIN;

const app = express();

//Middleware Setup
app.use(
    cors({
        origin: [FRONTEND_ORIGIN, HORIZON_FRONTEND_ORIGIN],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());


//Helper function to simulate market price changes
const mockPriceUpdate = (positions) => {
    // This function simulates a price change for all positions
    return positions.map(pos => {
        // Generate a small random fluctuation
        const fluctuation = pos.avg * (Math.random() * 0.01 - 0.005); // +/- 0.5%
        
        // Calculate the new price (LTP)
        const newPrice = pos.avg + fluctuation;
        
        pos.price = newPrice; 

        const netChange = (newPrice - pos.avg) / pos.avg * 100;
        pos.net = netChange.toFixed(2) + "%";
        pos.day = pos.net;
        return pos;
    });
};


// --- Authentication Routes ---
app.use("/", authRoute);

// Verification Endpoint
app.post("/", userVerification, (req, res) => {
    // If the token is verified, return success and the username
    res.json({
        status: true,
        user: req.user.username,
    });
});


// PROTECTED & MULTI-USER TRADING ROUTES

// 1. Get all holdings for the CURRENT USER (Filtered by userId)
app.get("/allHoldings", userVerification, async (req, res) => {
    try {
        const userId = req.user._id;
        let allHoldings = await HoldingsModel.find({ userId: userId });
        res.json(allHoldings);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).send("Server error");
    }
});

// 2. Get available quantity of a stock for the CURRENT USER
app.get("/holdings/:name", userVerification, async (req, res) => {
    try {
        const userId = req.user._id;
        const stockName = req.params.name;

        const holding = await HoldingsModel.findOne({ name: stockName, userId: userId });

        if (!holding) {
            return res.json({ qty: 0 }); 
        }

        res.json({ qty: holding.qty });
    } catch (error) {
        console.log("Error fetching holding:", error);
        res.status(500).json({ qty: 0 });
    }
});

// 3. Handle new BUY/SELL orders for the CURRENT USER (Holdings & Positions Update)
app.post("/newOrder", userVerification, async (req, res) => {
    try {
        const { name, qty, price, mode, product } = req.body; 
        const userId = req.user._id;
        if (!name || !qty || qty <= 0 || !price || !mode || !product) {
            return res.status(400).send("Invalid order data (Missing name, qty, price, mode, or product).");
        }

        // 1. Save the Order
        const newOrder = new OrdersModel({
            name, qty, price, mode, userId, product,
        });
        await newOrder.save();

        // 2. Find the user's current holding AND position for this stock
        let holding = await HoldingsModel.findOne({ name, userId });
        let position = await PositionsModel.findOne({ name, userId }); 

        if (mode === "BUY") {
            //HOLDINGS LOGIC
            if (holding) {
                const totalValue = (holding.qty * holding.avg) + (qty * price);
                holding.qty += qty;
                holding.avg = totalValue / holding.qty;
                holding.price = price;
                holding.net = "0%";
                holding.day = "0%";
                await holding.save();
            } else {
                // CREATE NEW HOLDING
                await HoldingsModel.create({
                    name, qty, avg: price, price, net: "0%", day: "0%", userId,
                });
            }

            //POSITIONS LOGIC
            if (position) {
                // UPDATE EXISTING POSITION (VWAP CALCULATION)
                const totalValue = (position.qty * position.avg) + (qty * price);
                position.qty += qty;
                position.avg = totalValue / position.qty;
                position.price = price;
                position.net = "0%"; 
                position.day = "0%"; 
                await position.save();
            } else {
                // CREATE NEW POSITION
                await PositionsModel.create({
                    name, qty, avg: price, price, product, userId,
                    net: "0%", 
                    day: "0%", 
                    isLoss: false,
                });
            }

        } else if (mode === "SELL") {
            //SELL LOGIC for Holdings
            if (!holding || holding.qty < qty) {
                return res.status(400).send("Not enough quantity to sell in Holdings.");
            }

            holding.qty -= qty;

            if (holding.qty === 0) {
                await HoldingsModel.deleteOne({ name, userId });
            } else {
                holding.price = price;
                await holding.save();
            }

            //POSITIONS CLOSURE LOGIC
            if (position) {
                position.qty -= qty;

                if (position.qty === 0) {
                    await PositionsModel.deleteOne({ name, userId });
                } else {
                    position.price = price;
                    await position.save();
                }
            }
        }

        res.send("Order saved and holdings/positions updated successfully!");
    } catch (err) {
        console.error("Critical DB/Order Processing Error:", err);
        res.status(500).send("Server error during transaction.");
    }
});


// 4. Get all orders for the CURRENT USER
app.get("/allOrders", userVerification, async (req, res) => {
    try {
        const userId = req.user._id;
        const allOrders = await OrdersModel.find({ userId: userId });
        res.json(allOrders);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error fetching orders");
    }
});

// 5. Get all positions for the CURRENT USER
app.get("/allPositions", userVerification, async (req, res) => {
    try {
        const userId = req.user._id;
        //Fetch the raw positions data
        let allPositions = await PositionsModel.find({ userId: userId });
        
        //Run the mock update before sending
        allPositions = mockPriceUpdate(allPositions);
        
        res.json(allPositions);
    } catch (error) {
        console.error("Error fetching positions:", error);
        res.status(500).send("Server error");
    }
});

// 6. Get the Watchlist for the CURRENT USER
app.get("/myWatchlist", userVerification, async (req, res) => {
    try {
        const userId = req.user._id;

        const userWatchlistDoc = await WatchlistModel.findOne({ userId: userId }); 

        if (!userWatchlistDoc || userWatchlistDoc.stocks.length === 0) {
            return res.json(defaultWatchlist); 
        }

        res.json(userWatchlistDoc.stocks);
    } catch (error) {
        console.error("Error fetching watchlist:", error);
        res.status(500).send("Server error fetching watchlist.");
    }
});


// --- Server Listener ---
mongoose.connect(uri)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Horizon Backend Started on Port ${PORT}`);
            console.log("Database Connected Successfully");
        });
    })
    .catch((err) => {
        console.error("MongoDB Connection Failed:", err);
    });