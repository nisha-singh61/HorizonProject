// app.js (The Main Server File)

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
const defaultWatchlist = require("./data/defaultWatchlist"); 
const { userVerification } = require("./Middlewares/AuthMiddleware"); // IMPORTANT
const authRoute = require("./Routes/AuthRoute");

const PORT = process.env.PORT || 3002;
const uri = process.env.VITE_MONGO_URL;

const app = express();

// --- Middleware Setup ---
app.use(
cors({
origin: ["http://localhost:5173"],
methods: ["GET", "POST", "PUT", "DELETE"],
credentials: true,
})
);

app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

// --- Authentication Routes ---
app.use("/", authRoute);

// FIX 1: Add the Verification Endpoint to handle the client's current Home.jsx POST to the root.
// We are adding this here to ensure it runs before the main protected routes, 
// matching the expected logic of Home.jsx
app.post("/", userVerification, (req, res) => {
    // If the token is verified, return success and the username
    res.json({
        status: true,
        user: req.user.username,
    });
});

// ------------------------------------------------------------------
// PROTECTED & MULTI-USER TRADING ROUTES
// ... (All other routes remain the same) ...
// ------------------------------------------------------------------

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

// 2. Get available quantity of a stock for the CURRENT USER (Available Qty Fix)
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

// 3. Handle new BUY/SELL orders for the CURRENT USER (Holdings Update Fix)
app.post("/newOrder", userVerification, async (req, res) => {
// ... (The rest of the newOrder logic is fine)
try {
const { name, qty, price, mode } = req.body;
const userId = req.user._id; 

if (!name || !qty || qty <= 0 || !price || !mode) {
return res.status(400).send("Invalid order data");
}

// 1. Save the Order
const newOrder = new OrdersModel({
name, qty, price, mode, userId, 
});
await newOrder.save();

// 2. Find the user's current holding for this stock
let holding = await HoldingsModel.findOne({ name, userId }); 

if (mode === "BUY") {
    if (holding) {
        // A. UPDATE EXISTING HOLDING (VWAP CALCULATION)
        const totalValue = (holding.qty * holding.avg) + (qty * price);
        holding.qty += qty;
        holding.avg = totalValue / holding.qty;
        holding.price = price;
        holding.net = "0%";
        holding.day = "0%";
        await holding.save();
    } else {
        // B. CREATE NEW HOLDING
        await HoldingsModel.create({
            name,
            qty,
            avg: price, 
            price,
            net: "0%",
            day: "0%",
            userId,
        });
    }
} else if (mode === "SELL") {
    // C. SELL LOGIC: Check quantity and update/delete
    if (!holding || holding.qty < qty) {
        return res.status(400).send("Not enough quantity to sell");
    }
    
    holding.qty -= qty;

    if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name, userId });
    } else {
        holding.price = price; 
        await holding.save();
    }
}

res.send("Order saved and holdings updated successfully!");
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
let allPositions = await PositionsModel.find({ userId: userId });
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
app.listen(PORT, () => {
console.log("App Started");
mongoose.connect(uri);
console.log("DB connected!");
});