const mongoose = require("mongoose");
const { Schema } = mongoose;

const HoldingsSchema = new Schema({
name: {
type: String,
required: true,
},
qty: {
type: Number,
required: true,
},
avg: {
type: Number,
required: true,
},
price: {
type: Number,
required: true,
},
net: { // MUST be required for the fix in server.js to work
type: String,
required: true, 
},
day: { // MUST be required for the fix in server.js to work
type: String,
required: true,
},
userId: { // CRITICAL: For multi-user isolation
type: Schema.Types.ObjectId,
ref: 'User',
required: true,
},
});

module.exports = { HoldingsSchema };