var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var User = require('./models/user');
var ejs = require('ejs');
var ejsmate = require('ejs-mate');

var app =express();
mongoose.connect('mongodb://localhost:27017',function(err){
    if(err) return console.log('error');
    console.log('connected to database');
});
//middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.engine('ejs',ejsmate);
app.set('view engine','ejs');
//routes
app.get('/views',function(req,res){
    res.render('home');
});

app.post('/createuser',function(req,res,next){
    var user = new User();
    user.profile.name = req.body.name;
    user.password = req.password;
    user.save(function(err){
        if(err) return next(err);
        res.json('data saved');
    });
});

app.listen(3000,function(err){
if(err)
return(console.log('error'));
console.log('server started at port : 3000');
});