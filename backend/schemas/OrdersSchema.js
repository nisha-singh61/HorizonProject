const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = new Schema(
{
name: {
type: String,
required: true,
},
qty: {
type: Number,
required: true,
},
price: {
type: Number,
required: true,
},
mode: {
type: String,
required: true,
},
userId: { //For multi-user isolation
type: Schema.Types.ObjectId,
ref: 'User',
required: true,
},
},
{ timestamps: true }
);

module.exports = { OrdersSchema };