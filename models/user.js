var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var schema = mongoose.Schema;

// user schema
var userSchema = new schema({
    email:{type:String,unique:true,lowercase:true},
    password:{type:String},
    profile:{name:{type:String,default:'user'},
            picture:{type:String}
            },
    address:String,
    history:[{date:Date,
             paid:Number   
        }]
});

//cheching if password hasbeen changed & hashing the password before saving
userSchema.pre('save',function(next){
    if(!this.isModified('password')) return next();
    bcrypt.genSalt(10,function(err,salt){
        if(err) return next(err);
        bcrypt.hash(this.password,salt,null,function(err,hash){
            if(err) return next(err);
            this.password = hash;
            next();
        });
    });
});

//Compare passwords
userSchema.methods.comparePasswords = function(password) {
    return bcrypt.compareSync(password,this.password);
}

module.exports = mongoose.model('User',userSchema)