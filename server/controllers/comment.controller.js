const commentModel = require("../models/comment.model")
module.exports = {
 addComment:async (req, res) => {
  try{
    let new_data = new commentModel({
      name:req.body.name,
      message:req.body.message,
      date:req.body.date,
    })
    await new_data.save()
    res.json({success:true, message:"Comment added"}) 
  }catch(error){
    res.status(400).json({message:error})
  }
 },
 getComment:async (req, res) => {
   try{
     let get_comment_list = await commentModel.find()
     res.json(get_comment_list)
   }catch(error){
     res.status(400).json({message:error}) 
  }
 },
 removeComment:async (req, res) => {
   try{
     let _id = req.params.id
     await commentModel.findByIdAndDelete(_id)
     res.json({success:true, message:"Comment deleted"})
   }catch(error){
     res.status(400).json({message:error}) 
  }
 }
}