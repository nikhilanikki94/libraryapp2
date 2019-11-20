const express=require('express');
const loginRouter=express.Router();
var{loginmodel}=require('../models/loginmodel')
function router(nav){

    loginRouter.route('/save')
    .post((req,res)=>{
        var login=new loginmodel(req.body);
        login.save((error,data)=>{
            if(error){
                res.json({"status":"error"});
                throw error;
            }
            else{
                res.json({"status":"success"});
            }
        })
    })

    loginRouter.route('/')
    .get((req,res)=>{
        loginmodel.find((error,data)=>{
            if(error){
                throw error;
            }
            else{
                test=data;
             res.render(
            'login',
            {
                nav,
                title:'Login',
               
            }
        )
        }
        })
    } )
    
    loginRouter.get('/viewAllapi', (req, res) => {
        loginmodel.find((error, data) => {
            if (error) {

                throw error;
            }
            else {
                res.send(data);

            }
        })
    })
return loginRouter;
}
module.exports=router;
