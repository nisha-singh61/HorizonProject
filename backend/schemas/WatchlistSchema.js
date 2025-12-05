const { Schema } = require("mongoose");

const WatchlistSchema = new Schema({
userId: { 
type: Schema.Types.ObjectId, 
ref: 'User', 
required: true,
unique: true
},
stocks: [
{
name: { type: String, required: true },
price: Number, 
isDown: Boolean,
percent: String,
}
],
});

module.exports = { WatchlistSchema };