'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('pending_quoted_submissions', {
    url: '/pending_quoted/:type/:underwriter',
    templateUrl: 'js/result/pending_quoted_submissions/pending_quoted_submissions.html',
    controller: 'SearchCtrl'
  });
});
