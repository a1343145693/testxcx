var express = require('express');
var router = express.Router();
var product = require('../model/products')
var shop = require('../model/Shop')
var homeing = require('../model/home')

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

//add 店铺
router.post('/addshop', function(req, res, next) {

	var obj = new shop({
		ShopId: 1, //店铺id
		Shopname: '测试小店', //店铺名称
		ShopImg: '../../static/shop/shop.gif', //店铺小图片
		ShopBgimg: '../../static/shop/tp1.gif' //店铺背景图片
	})

	var i = obj.save();
	return res.json({
		status: 0,
		message: "添加成功"
	});
});

//查询商品店铺
router.post('/findAllShop', function(req, res, next) {

	shop.findall(function(err,result){
		if(err){
			console.log(err);
			return res.json({
			status: 1,
			message: "服务器内部错误"
			});
		}else{
			return res.json({
			status: 0,
			message: "查询成功",
			data: result
		});
		}
		
	});
	
});

//add 商品
router.post('/addproducts', function(req, res, next) {

	var obj = new product({
		name: '测试商品名称2', //商品名称
		imgs: [ //商品图片集
			'../../static/sy/ic1.jpg',
			'../../static/sy/sy3.gif',
			'../../static/sy/sy5.gif'
		],
		title: '测试标题1', //商品展示标题
		nr: "测试2内容测试内容测试内容测试内容测试内容测试内容", //商品描述内容
		price: 10.00, //商品价格
		baozhiqi: '3个月', //保质期
		kg: '1kg', //重量
		baozhuang: '3X3', //包装规格
		kouwei: '苦苦辣辣', //口味
		cunchu: '低温冷藏', //商品存储方式
		food: '大米', //配料
		forshop: 1 //商品商店号
	})
	obj.save();
	return res.json({
		status: 0,
		message: "添加成功"
	});

});

//查找所有商品
router.post('/findAllProducts', function(req, res, next) {

	product.findAll(function(err,result){
		if(err){
			return res.json({status:1,message:"服务器内部错误"});
		} else {
			return res.json({status:0,message:"查询成功",data:result});
		}
	});
});

//add 首页图片
router.post('/addhomeimg', function(req, res, next) {

	var obj = new homeing({
		productsId: "5c9dc73ce707ce2e90b19142",
		src: '../../static/sy/sy3.gif'
	});
	obj.save();
	return res.json({
		status: 0,
		message: "添加成功"
	});

});

//查询首页图片
router.post('/findAllhomeimg', function(req, res, next) {

	homeing.findall((err,result) => {
		console.log(err);
		console.log(result);
		return res.json({
			status: 0,
			message: "添加成功",
			data: result
		});
	});

	/*homeing.findall(function(err,result){
		console.log(err);
		console.log(result);
		res.json({
			status: 0,
			message: "添加成功",
			data: result
		});
	});*/
});

//商品详情
router.post('/findproductsbyId', function(req, res, next) {

	if(!req.body.productsId){
		return res.json({status:0,message:"商品ID不能为空"});
	}
	
	product.findbyId(req.body.productsId,function(err,result){
		if(err){
			console.log("Err:"+err);
			return res.json({status:1,message:"服务器内部错误"});	
		} else {
			return res.json({
				status:0,
				message:"查询成功",
				data:result
			})
		}
	})
});

router.post('/findproductsbyShopId', function(req, res, next) {

	if(!req.body.ShopId){
		return res.json({status:0,message:"商店ID不能为空"});
	}
	
	product.findbyShopId(req.body.ShopId,function(err,result){
		console.log()
		if(err){
			console.log("Err:"+err);
			return res.json({status:1,message:"服务器内部错误"});	
		} else {
			return res.json({
				status:0,
				message:"查询成功",
				data:result
			})
		}
	})
});

module.exports = router;