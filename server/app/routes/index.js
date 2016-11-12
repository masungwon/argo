'use strict';
/* eslint-disable new-cap */

var router = require('express').Router();
var connection = require('../../db');

module.exports = router;

// console.log('connection', connection);
router.get('/', function (req, res, next) {
	// I want to list all rows in the mySQL database
	console.log('entered router');
	connection.query('SELECT * FROM submissionanalytics', function(err, rows, fields) {
		if (err) throw err;
		console.log('err is', err);
		console.log('Database returned...', '\nfields[0]:', fields[0], '\nrows:', rows);
	});
});

router.use(function (req, res) {
  res.status(404).end();
});
