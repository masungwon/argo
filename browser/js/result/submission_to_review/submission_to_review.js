app.config(function ($stateProvider) {
  $stateProvider.state('submission_to_review', {
    url: '/submission_to_review/:type/:underwriter',
    templateUrl: 'js/result/submission_to_review/submission_to_review.html',
    controller: 'SearchCtrl'
  });
});
