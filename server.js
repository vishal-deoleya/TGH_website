var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var app =express();
mongoose.connect('mongodb://localhost:27017',function(err){
    if(err) return console.log('error');
    console.log('connected to database');
});
//middleware for morgan
app.use(morgan('dev'));
app.get('/',function(req,res){
    res.json('imainnininia');
});

app.listen(3000,function(err){
if(err)
return(console.log('error'));
console.log('server started at port : 3000');
});