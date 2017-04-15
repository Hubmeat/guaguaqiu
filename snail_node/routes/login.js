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

	console.log(req.body.password)
	console.log(req.body.phone)

	var findsql = 'SELECT phone,password from userlist where phone=? and password=?';
	var findsqlParams = [req.body.phone, req.body.password];
	

	connection.query(findsql,findsqlParams, function (err, result) {
		if (err) {
			console.log('[SELECT ERROR] '+ err.message)
			return
		} else {
			console.log(result)
			console.log(result.length)
			if (result.length === 1) {
				res.json({status:'OK'})
			} else {
				res.json({status:'false'})
			}
		}
	}) 

});

module.exports = router;
