const mongoose=require('mongoose')
 var studentSchema= new mongoose.Schema(
     {
    title:{
            type:String,
            required:true
    },
    Author:String,
    genre:String,
    image:String,
    addedDate:{
        type:Date,
        default:Date.now
    }
}
 )
var addModel=mongoose.model('book',studentSchema);
   

module.exports={addModel}