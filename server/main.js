'use strict';
/* eslint-disable global-require */

var chalk = require('chalk');

// TODO
// Requires in ./db/index.js to connect to mySQL database
var connection = require('./db');

// Create a node server instance
var server = require('http').createServer();

var createApplication = function () {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
};

var startServer = function () {

    var PORT = process.env.PORT || 1337;

    server.listen(PORT, function () {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};

// var authenticateConnection = function () {
// 	startDb
//   .authenticate()
//   .then(function(err) {
//     console.log('Connection has been established successfully.');
//   }, function (err) {
//     console.log('Unable to connect to the database:', err);
//   });
// }

try {
	createApplication();
	startServer();
} catch (err) {
    console.error(chalk.red(err.stack));
    process.exit(1);
}
