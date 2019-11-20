var mongoose=require('mongoose');
var loginschema=new mongoose.Schema(
    {
       
        email:String,
       
        passwrd:String
    }
)
var loginmodel=mongoose.model('login',loginschema)
module.exports={loginmodel};