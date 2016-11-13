app.config(function ($stateProvider) {
  $stateProvider.state('form', {
    url: '/form',
    templateUrl: 'js/form/form.html',
    controller: 'FormCtrl'
  });
});

app.controller('FormCtrl', function($scope, $state, FormFactory) {
  $scope.search = function() {
    $state.go('search_result');
  }
});

app.factory('FormFactory', function() {
  return {
    

  }
});
