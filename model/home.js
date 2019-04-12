var db = require('../db/db');

var homeimg = new db.Schema({
	productsId:String,
	src:String
})

homeimg.statics.findall = function(callback){
	this.find({},callback);
}

homeimg.statics.findbyid = function(id,callback){
	this.find({_id:id},callback);
}

var homeimg_t = db.model('homeimg',homeimg);

module.exports = homeimg_t;