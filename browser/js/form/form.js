'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('form', {
    url: '/form',
    templateUrl: 'js/form/form.html',
    controller: 'FormCtrl'
  });
});

app.controller('FormCtrl', function($scope, $state) {
  var underwriter;
  $scope.search = function(type) {
    if($scope.underwriter) {
      underwriter = ($scope.underwriter).split(' ').join('+');
      if (type === '1') {
        $state.go('submission_to_review_result', {type: type, underwriter: underwriter});
      }
      else if (type === '2') {
      $state.go('policy_result', {type: type, underwriter: underwriter});
      }
    } else {
      if (type === '1') {
        $state.go('submission_to_review_result', {type: type});
      }
      else if (type === '2') {
        $state.go('policy_result', {type: type});
      }
    }
  }
});
