const express = require("express");
const chalk = require('chalk');
const path = require('path');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose=require('mongoose');
var app = new express();



mongoose.connect("mongodb://localhost:27017/MyCollegeDb");

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));


var nav = [
    { link: '/', title: 'HOME' },
    { link: '/login', title: 'LOGIN' },
{ link: '/signupp', title: 'SIGNUP' },
{ link: '/books', title: 'BOOKS' },
{ link: '/authors', title: 'AUTHORS' },
{ link: '/books/addbooks', title: 'ADDBOOK' },
{link:'/authors/addauthor',title:'ADDAUTHOR'}
];

const booksRouter = require('./src/routs/bookrouts')(nav);// passing nav to bookrouter
const authorsRouter = require('./src/routs/authorRouts')(nav);
const loginRouter = require('./src/routs/loginrouts')(nav);
const signupRouter = require('./src/routs/signuprouts')(nav);
app.use(express.static(path.join(__dirname, "/public")));

app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/login', loginRouter);
app.use('/signupp', signupRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');





app.get('/', function (req, res) {
    res.render('index',

        {

            nav,
            title: "Library",

        }
    );
});



app.listen(process.env.PORT || 3000, function () {
    console.log('listening to port' + chalk.green('3000'));
});