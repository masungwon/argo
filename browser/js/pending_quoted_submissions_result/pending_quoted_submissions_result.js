'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('pending_quoted_submissions_result', {
    url: '/pending_quoted/:type/:underwriter',
    templateUrl: 'js/pending_quoted_submissions_result/pending_quoted_submissions_result.html',
    controller: 'SearchCtrl'
  });
});
