var db = require('../db/db');

var products = new db.Schema({
	name:String,  //商品名称
	imgs:Array,	//商品图片集
	title:String,	//商品展示标题
	nr:String,		//商品描述内容
	price:Number,	//商品价格
	baozhiqi:String,	//保质期
	kg:String,	//重量
	baozhuang:String,	//包装规格
	kouwei:String,	//口味
	cunchu:String,	//商品存储方式
	food:String,	//配料
	forshop:Number		//商品商店号
})

products.statics.findAll = function(callback){
	this.find({},callback);
}
	
products.statics.findbyId = function(id,callback){
	this.find({_id:id},callback);
}

products.statics.findbyShopId = function(id,callback){
	this.find({forshop:id},callback);
}

var products_m = db.model('products',products);

module.exports = products_m;