const mongoose = require("mongoose") 
const queenSchema = mongoose.Schema({ 
 name: String, 
 age: Number, 
 place: String 
}) 
 
module.exports = mongoose.model("Queen", queenSchema)