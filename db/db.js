var mongoose = require('mongoose');

var url = 'mongodb://localhost/tumao'

mongoose.connect(url,function(err){
	
	if(err){
		console.log('数据库链接失败：错误'+err);
	} else {
		console.log('数据库连接成功');
	}
})

module.exports = mongoose;


