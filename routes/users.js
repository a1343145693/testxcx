var express = require('express');
var router = express.Router();

var user = require('../model/user_model')

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.post('/zhuche', function(req, res, next) {
	if(!req.body.username) {
		res.json({
			status: 1,
			message: "用户名为空"
		});
	}

	if(!req.body.password) {
		res.json({
			status: 1,
			message: "密码不能为空"
		});
	}
	
	var yonghu = new user({
		username: req.body.username,
		password: req.body.password
	});
    
	user.findone(req.body.username, req.body.password, function(err, result) {
		if(err) {
			console.log(err);
		} else {
			console.log(result.length+"--------------------------");
			console.log(result);
			if(result.length <= 0) {
				yonghu.save(function(err) {
					if(err) {
						console.log(err);
					} else {
						res.json({
							status: 0,
							message: "注册成功"
						});
					}
				})
			} else {
				res.json({status:1,message:"用户以存在"});
			}
		}
	});

});

router.get('/login',function(req,res,next){
	
	
	if(!req.query.username){
		return res.json('用户名不能为空');
	}
	
	if(!req.query.password1){
		return res.json('密码不能为空');
	}
	
	var u = req.query.username;
	var pwd = req.query.password1;
	
	user.findone(u,pwd,function(err,result){
		console.log(123123);
		if(err){
			res.json({status:1,massage:data+err});
		} else {
			console.log(result);
			if(result.length==1){
				res.json({status:0,message:"登陆成功"});
			} else {
				res.json({status:1,message:"没有有此用户"});
			}
		}
	})
	
	
});

module.exports = router;