'use strict';

var router = require('express').Router();
var connection = require('../../db');

module.exports = router;

router.get('/submissionsToReview/:underwriter', function (req, res, next) {
	var query;
	if(req.params.underwriter) {
		var underwriter = req.params.underwriter.split('+').join(' ');
		query = "SELECT 'Submission to review' AS 'Status', SUBMISSION_NO, RECEIVED_DATE AS submission_date, AGENT_NAME, INSURED_NAME, INSURED_STATE, UNDERWRITER_NAME, OPERATING_UNIT_NAME FROM eagertobp.submissionanalytics WHERE 1=1 AND (REJECT_REASON IS NULL OR trim(REJECT_REASON) = '') AND (QUOTED_DATE IS NULL OR trim(QUOTED_DATE) = '') AND (POL_EFF_DT IS NULL OR trim(POL_EFF_DT) = '') AND UNDERWRITER_NAME = '" + underwriter +"' ORDER BY submission_date ASC";
	} else {
		query = "SELECT 'Submission to review' AS 'Status', SUBMISSION_NO, RECEIVED_DATE AS submission_date, AGENT_NAME, INSURED_NAME, INSURED_STATE, UNDERWRITER_NAME, OPERATING_UNIT_NAME FROM eagertobp.submissionanalytics WHERE 1=1 AND (REJECT_REASON IS NULL OR trim(REJECT_REASON) = '') AND (QUOTED_DATE IS NULL OR trim(QUOTED_DATE) = '') AND (POL_EFF_DT IS NULL OR trim(POL_EFF_DT) = '') ORDER BY submission_date ASC";
	}
	connection.query(query, function(err, rows, fields) {
		if (err) throw err;
		res.json(rows);
	});
});

router.get('/policies/:underwriter', function (req, res, next) {
	connection.query("SELECT 'Policy' AS 'Status', AGENT_NAME, INSURED_NAME, INSURED_STATE, UNDERWRITER_NAME, OPERATING_UNIT_NAME, QUOTED_PREMIUM, QUOTED_PREMIUM_BAND, POL_EFF_DT, POL_EXP_DT FROM submissionanalytics WHERE 1=1 AND REJECT_AFTER_QUOTE_FLAG = 'N' AND (trim(REJECTED_DATE) = '' OR REJECTED_DATE IS NULL)", function(err, rows, fields) {
		if (err) throw err;
		res.json(rows);
	});
});

router.use(function (req, res) {
  res.status(404).end();
});
