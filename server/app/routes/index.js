'use strict';
/* eslint-disable new-cap */

var router = require('express').Router();
var connection = require('../../db');

module.exports = router;

// router.get('/', function (req, res, next) {
// 	console.log('entered router');
// 	connection.query('SELECT * FROM submissionanalytics LIMIT 5', function(err, rows, fields) {
// 		if (err) throw err;
// 		console.log('err is', err);
// 		res.json(rows);
// 	});
// });

router.get('/submissionsToReview', function (req, res, next) {
	console.log('entered router');
	connection.query('SELECT * FROM submissionanalytics LIMIT 5', function(err, rows, fields) {
		if (err) throw err;
		console.log('err is', err);
		res.json(rows);
	});
});

router.get('/policies', function (req, res, next) {
	console.log('entered router');
	connection.query('SELECT * FROM submissionanalytics LIMIT 5', function(err, rows, fields) {
		if (err) throw err;
		console.log('err is', err);
		res.json(rows);
	});
});

router.use(function (req, res) {
  res.status(404).end();
});
