const mongoose = require("mongoose") 
const queenSchema = mongoose.Schema({ 
 name:{
type: String,
minLength:3
 }, 
 age: Number, 
 place: {
    type: String,
    maxLength:10
     },  
}) 
 
module.exports = mongoose.model("Queen", 
queenSchema)