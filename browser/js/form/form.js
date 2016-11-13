app.config(function ($stateProvider) {
  $stateProvider.state('form', {
    url: '/form',
    templateUrl: 'js/form/form.html',
    controller: 'FormCtrl'
  });
});

app.controller('FormCtrl', function($scope, $state) {
  $scope.search = function(type) {
    if (type === '1') {
      $state.go('submission_to_review_result', {type: type});
    }
    else if (type === '2') {
      $state.go('policy_result', {type: type});
    }
  }
});
