const mongoose = require("mongoose")
let CommentSchema = new mongoose.Schema({
  name:{
   type:String
  },
  message:{
   type:String
  },
  date:{
   type:Date
  }
},{
 collection:"comments"
})
module.exports = mongoose.model("CommentSchema", CommentSchema)