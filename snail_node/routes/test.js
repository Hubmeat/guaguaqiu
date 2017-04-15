var express = require('express');
var router = express.Router();
var mysql = require('mysql')

router.all('/', function(req, res, next) {
	// console.log('daddadadasa')
	var connection = mysql.createConnection({     
		  host     : 'localhost',       
		  user     : 'root',              
		  password : '',
		  database : 'guaguaqiu'
	}); 

	connection.connect();

	console.log(req.body)
	console.log(req.body.phone)

	var findsql = 'SELECT phone from userlist where phone=?';
	var findsqlParams = [req.body.phone];
	

	connection.query(findsql,findsqlParams, function (err, result) {
		if (err) {
			console.log('[SELECT ERROR] '+ err.message)
			return
		} else if (result) {
			console.log(result)
			console.log(result.length)
			if (result.length !== 0) {
				res.json({status:'flase'})
			} else {
				var addSql = 'INSERT INTO userlist(phone,password,src) VALUES(?,?,?)';
				var addSqlParams = [req.body.phone , req.body.password,''];
		
				connection.query(addSql,addSqlParams, function (err, result) {
					if (err) {
						console.log('[SELECT ERROR] '+ err.message)
						res.json('status:"false"')
						return
					} else {
						console.log(result)
						res.json({
							status:"ok",
							phone:req.body.phone
						})
					}
				}) 
			}
		}
	}) 

	
  
});

module.exports = router;
