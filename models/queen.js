const mongoose = require("mongoose") 
const queenSchema = mongoose.Schema({ 
 name:{
type: String,
minLength:3
 }, 
 age: Number, 
 place: String 
}) 
 
module.exports = mongoose.model("Queen", 
queenSchema)