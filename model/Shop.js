var db = require('../db/db');

var shop = new db.Schema({
	ShopId:Number,		//店铺id
	Shopname: String, //店铺名称
	ShopImg: String, //店铺小图片
	ShopBgimg: String //店铺背景图片
})

shop.statics.findall = function(callback){
	this.find({},callback);
}

shop.statics.findbyid = function(id,callback){
	this.find({_id:id},callback);
}

var shop_t = db.model('shop',shop);

module.exports = shop_t