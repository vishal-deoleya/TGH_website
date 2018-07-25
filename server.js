var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var User = require('./models/user');
var ejs = require('ejs');
var ejsmate = require('ejs-mate');
var session = require('express-session');
var cookieParser =require('cookie-parser');
var flash = require('express-flash');

var app =express();
mongoose.connect('mongodb://localhost:27017',function(err){
    if(err) return console.log('error');
    console.log('connected to database');
});
//middleware
app.use(express.static('__dirname'+'/public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs',ejsmate);
app.set('view engine','ejs');

app.listen(3000,function(err){
if(err)
return(console.log('error'));
console.log('server started at port : 3000');
});