const mongoose=require('mongoose');
var authorSchema=new mongoose.Schema(
    {
        name:String,
        country:String,
        age:Number,
        image:String,
        
    });
var addAuthormodel=mongoose.model('author',authorSchema)
module.exports={addAuthormodel};