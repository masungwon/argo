'use strict';

var chalk = require('chalk');
var path = require('path');
var mysql = require('mysql');

var DATABASE_NAME = require(path.join(__dirname, '../env')).DATABASE_NAME;
var USER_NAME = require(path.join(__dirname, '../env')).USER_NAME;
var PASSWORD = require(path.join(__dirname, '../env')).PASSWORD;

console.log(chalk.yellow('Opening connection to MySQL'));

var connection = mysql.createConnection({
	host: 'us-cdbr-azure-east-a.cloudapp.net',
	user: USER_NAME,
	password: PASSWORD,
	database: 'eagertobp'
})

connection.connect();

console.log(chalk.yellow('Connected to MySQL'));

module.exports = connection;

// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;

//   console.log('The solution is: ', rows[0].solution);
// });

// connection.end();

// Require our models. Running each module registers the model into sequelize
// so any other part of the application can simply call sequelize.model('User')
// to get access to the User model.
//require('./models');

// Syncing all the models at once. This promise is used by main.js.
// TODO: invoke sync even when I don't have any schemas?
// var syncedDbPromise = db.sync();

// syncedDbPromise.then(function () {
//   console.log(chalk.green('Sequelize synced to MySQL'));
// });

// TODO:
// Testing connection to mySQL database.
// Somehow throws the following error:
// Unhandled rejection SequelizeConnectionError: Quit inactivity timeout
// db
// .authenticate()
// .then(function () {
// 	console.log('Connection has been established successfully.')
// })
// .catch(function (err) {
// 	console.log('Unable to connect to the database:', err)
// });

// module.exports = syncedDbPromise;
