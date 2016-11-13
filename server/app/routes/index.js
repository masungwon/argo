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
	connection.query("SELECT 'Submission to review' AS 'Status', SUBMISSION_NO, RECEIVED_DATE AS submission_date, AGENT_NAME, INSURED_NAME, INSURED_STATE, UNDERWRITER_NAME, OPERATING_UNIT_NAME FROM eagertobp.submissionanalytics WHERE 1=1 AND (REJECT_REASON IS NULL OR trim(REJECT_REASON) = '') AND (QUOTED_DATE IS NULL OR trim(QUOTED_DATE) = '') AND (POL_EFF_DT IS NULL OR trim(POL_EFF_DT) = '') ORDER BY submission_date ASC LIMIT 5", function(err, rows, fields) {
		if (err) throw err;
		res.json(rows);
	});
});

router.get('/policies', function (req, res, next) {
	connection.query("SELECT 'Policy' AS 'Status', AGENT_NAME, INSURED_NAME, INSURED_STATE, UNDERWRITER_NAME, OPERATING_UNIT_NAME, QUOTED_PREMIUM, QUOTED_PREMIUM_BAND, POL_EFF_DT, POL_EXP_DT FROM submissionanalytics WHERE 1=1 AND REJECT_AFTER_QUOTE_FLAG = 'N' AND (trim(REJECTED_DATE) = '' OR REJECTED_DATE IS NULL) LIMIT 5", function(err, rows, fields) {
		if (err) throw err;
		res.json(rows);
	});
});

router.use(function (req, res) {
  res.status(404).end();
});
