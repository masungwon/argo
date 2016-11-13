'use strict';

var chalk = require('chalk');
var path = require('path');
var mysql = require('mysql');

var HOST = require(path.join(__dirname, '../env')).HOST;
var DATABASE_NAME = require(path.join(__dirname, '../env')).DATABASE_NAME;
var USER_NAME = require(path.join(__dirname, '../env')).USER_NAME;
var PASSWORD = require(path.join(__dirname, '../env')).PASSWORD;

console.log(chalk.yellow('Opening connection to MySQL'));

var connection = mysql.createConnection({
	host: HOST,
	user: USER_NAME,
	password: PASSWORD,
	database: DATABASE_NAME
})

connection.connect(function(err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
});

console.log(chalk.yellow('Connected to MySQL'));

module.exports = connection;

// connection.end();
