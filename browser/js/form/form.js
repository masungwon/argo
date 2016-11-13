app.config(function ($stateProvider) {
  $stateProvider.state('form', {
    url: '/form',
    templateUrl: 'js/form/form.html',
    controller: 'FormCtrl'
  });
});

app.controller('FormCtrl', function($scope, $state) {
  // how to know if something is selected?
  $scope.search = function(type) {
    $state.go('search_result', {type: type});
  }
});
