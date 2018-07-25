app.get('/',function(req,res){
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