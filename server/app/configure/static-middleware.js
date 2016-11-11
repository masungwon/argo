'use strict';

var path = require('path');
var express = require('express');

module.exports = function (app) {

  var root = app.getValue('projectRoot');

  var npmPath = path.join(root, './node_modules');
  var publicPath = path.join(root, './public');
  var browserPath = path.join(root, './browser');
  var semanticPath = path.join(root, './semantic');

  app.use(express.static(npmPath));
  app.use(express.static(publicPath));
  app.use(express.static(browserPath));
	app.use(express.static(semanticPath));
};
