const express = require('express');

const booksRouter = express.Router()


var {addModel} = require('../models/addModel');
var test=0;

function router(nav) {

    booksRouter.route('/')
        .get((req, res) => {
            addModel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    test=data;          
                  res.render(
                'books',
                {
                    nav,
                    title: "BOOKS",
                    books:data
                }
            );
        }
        });
    })
    booksRouter.route('/addbooks')
        .get((req, res) => {
            res.render(


                'addBook.ejs',
                {
                    nav,
                    title: "AddBooks"
                    
                }
            )
        })
    booksRouter.route('/save')
        .post((req, res) => {
            var book = new addModel(req.body);
            book.save((error, data) => {
                if (error) {

                    res.json({ "status": "error" });
                    throw error;

                }
                else {
                    res.json({ "status": "success" })

                }
            });

        })
    booksRouter.get('/viewAllapi', (req, res) => {
        addModel.find((error, data) => {
            if (error) {

                throw error;
            }
            else {
                res.send(data);

            }
        })
    })
    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'book',
                {
                    nav,
                    title: "BOOK",
                    book: test[id]
                }
            )
        })
    return booksRouter;
}
module.exports = router;