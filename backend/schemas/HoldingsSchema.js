const { Schema } = require("mongoose");

const HoldingsSchema = new Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true, default: 0 },
  avg: { type: Number, required: true, default: 0 },
  price: { type: Number, required: true, default: 0 },
  net: { type: String, default: "0%" },
  day: { type: String, default: "0%" },
});

module.exports = { HoldingsSchema };
