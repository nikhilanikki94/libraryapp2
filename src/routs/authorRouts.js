const express = require('express');
const authorsRouter = express.Router();
var test=0;

var {addAuthormodel}=require('../models/addAuthormodel')
function router(nav) {
    
        
    authorsRouter.route('/')
        .get((req, res) => {
            addAuthormodel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    test=data;
                   res.render(
                'authors',
                {
                    nav,
                    title: "AUTHORS",
                    authors:data
                }
            )
       }
        })
    })

    authorsRouter.route('/addauthor')
    .get((req,res)=>{
        res.render(
            'addauthor.ejs',
            {
                nav,
                title:"ADD AUTHORS"
            }
        )
    })
    authorsRouter.route('/save')
    .post((req,res)=>{
        var author=new addAuthormodel(req.body);
        author.save((error,data)=>{
            if(error){
                res.json({"status":"error"});
                throw error;
            }
            else{
                res.json({"status":"success"});
            }
        })
    })
    authorsRouter.get('/viewAllapi', (req, res) => {
        addAuthormodel.find((error, data) => {
            if (error) {

                throw error;
            }
            else {
                res.send(data);

            }
        })
    })
    authorsRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "AUTHOR",
                    author: test[id]
                }
            )
        })
    return authorsRouter;
}
module.exports = router;