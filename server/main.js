'use strict';
/* eslint-disable global-require */

var chalk = require('chalk');

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

Promise.resolve(createApplication)
.then(startServer)
.catch(function (err) {
    console.error(chalk.red(err.stack));
    process.exit(1);
});
