var db = require('../db/db');

var user = new db.Schema({
	username:String,
	password:String
})

user.statics.findone = function(name,pwd,callback){
	console.log('run now this ------------------');
	this.find({username:name,password:pwd},callback);
}

var usermodel = db.model("user",user);

module.exports = usermodel;
