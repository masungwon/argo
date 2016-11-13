'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('rejected_quotes_result', {
    url: '/rejected_quotes_result/:type/:underwriter',
    templateUrl: 'js/rejected_quotes_result/rejected_quotes_result.html',
    controller: 'SearchCtrl'
  });
});
