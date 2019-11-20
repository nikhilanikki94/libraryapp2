const express=require('express');
const signupRouter=express.Router();

const {signupModel}=require('../models/signupmodel')
function router(nav){
    signupRouter.route('/save')
    .post((req,res)=>{
        var signup=new signupModel(req.body);
        signup.save((error,data)=>{
            if(error){
                res.json({"status":"error"});
                throw error
            }
            else{
                res.json({"status":"success"});
            }
        })
    })

    signupRouter.route('/')
    .get((req,res)=>{
        signupModel.find((error,data)=>{
            if(error){
                throw error;
            }
            else{
                test=data;
             res.render(
            'signupp',
            {
                nav,
                title:'SignUp'
                
            }
        )
            }
        })
    } )
   
    signupRouter.get('/viewAllapi', (req, res) => {
        signupModel.find((error, data) => {
            if (error) {

                throw error
            }
            else {
                res.send(data);

            }
        })
    })
    return signupRouter;
}
module.exports=router;