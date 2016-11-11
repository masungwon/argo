'use strict';
/* eslint-disable new-cap */

var router = require('express').Router();
var connection = require('../../db');

module.exports = router;

router.get('/', function (req, res, next) {
	// I want to list all rows in the mySQL database
	console.log('entered router');
	console.log('connection is', connection);
	// connection.query('SELECT *', function(err, rows, fields) {
	// 	if (err) throw err;
	// 	console.log('Database returned...', '\nrows:', rows, '\nfields:',fields);
	// });
});

router.use(function (req, res) {
  res.status(404).end();
});
