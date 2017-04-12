var express = require('express');
var router = express.Router();
var mysql = require('mysql')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/trans', function(req, res, next) {
	var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '',
		  database : 'guaguaqiu'
	});

	connection.connect();

	var sql = 'SELECT * FROM indexlist';

	connection.query(sql, function (err, result) {
		if (err) {
			console.log('[SELECT ERROR] '+ err.message)
			return
		} else {
			console.log(result)
			res.json(result)
		}
	}) 
});

module.exports = router;
