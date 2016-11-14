'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('rejected_quotes', {
    url: '/rejected_quotes/:type/:underwriter',
    templateUrl: 'js/result/rejected_quotes/rejected_quotes.html',
    controller: 'SearchCtrl'
  });
});
