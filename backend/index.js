require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.VITE_MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

// ... (rest of your code, like commented-out addHoldings/addPositions, remains unchanged)

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

// Get available quantity of a stock to allow selling
app.get("/holdings/:name", async (req, res) => {
  try {
    const stockName = req.params.name;

    // Find holding by name
    const holding = await HoldingsModel.findOne({ name: stockName });

    if (!holding) {
      return res.json({ qty: 0 }); // no holdings
    }

    res.json({ qty: holding.qty });
  } catch (error) {
    console.log("Error fetching holding:", error);
    res.json({ qty: 0 });
  }
});

// UPDATED: Handle new orders with buy/sell logic
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    // Validate inputs
    if (!name || !qty || qty <= 0 || !price || !mode) {
      return res.status(400).send("Invalid order data");
    }

    // Save the order
    const newOrder = new OrdersModel({
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();

    // Handle BUY
    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({ name });
      if (holding) {
        // Update average price (simple weighted average)
        const totalValue = (holding.qty * holding.avg) + (qty * price);
        holding.qty += qty;
        holding.avg = totalValue / holding.qty;
        holding.price = price; // Update current price
        await holding.save();
      } else {
        // Create new holding
        await HoldingsModel.create({
          name,
          qty,
          avg: price,
          price,
          net: "0%",
          day: "0%",
        });
      }
    }

    // Handle SELL
    if (mode === "SELL") {
      let holding = await HoldingsModel.findOne({ name });
      if (!holding || holding.qty < qty) {
        return res.status(400).send("Not enough quantity to sell");
      }

      holding.qty -= qty;

      // Remove holding if qty is 0
      if (holding.qty === 0) {
        await HoldingsModel.deleteOne({ name });
      } else {
        await holding.save();
      }
    }

    res.send("Order saved and holdings updated!");
  } catch (err) {
    console.log("Error saving order:", err);
    res.status(500).send("Server error");
  }
});

// Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error fetching orders");
  }
});

app.listen(PORT, () => {
  console.log("App Started");
  mongoose.connect(uri);
  console.log("DB connected!");
});