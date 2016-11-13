app.config(function ($stateProvider) {
  $stateProvider.state('submission_to_review_result', {
    url: '/submission_to_review_result/:type/:underwriter',
    templateUrl: 'js/submission_to_review_result/submission_to_review_result.html',
    controller: 'SearchCtrl'
  });
});
