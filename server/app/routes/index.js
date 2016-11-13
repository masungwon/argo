'use strict';
/* eslint-disable new-cap */

var router = require('express').Router();
var connection = require('../../db');

module.exports = router;

router.get('/', function (req, res, next) {
	console.log('entered router');
	connection.query('SELECT * FROM submissionanalytics', function(err, rows, fields) {
		if (err) throw err;
		console.log('err is', err);
		console.log('Database returned...', '\nfields[0]:', fields[0], '\nrows:', rows);
		res.send({Hi: 'Sungwon', Keep: 'Going!', You: 'Can do it!!! <3'});
	});
});

router.use(function (req, res) {
  res.status(404).end();
});
