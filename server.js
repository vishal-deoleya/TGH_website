var express = require('express');
var app =express();
app.listen(3000,function(err){
if(err)
return(console.log('error'));
console.log('server started at port : 3000');
});