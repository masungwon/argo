app.controller('SearchCtrl', function($scope, $state) {

});

app.config(function ($stateProvider) {
  $stateProvider.state('search_result', {
    url: '/search_result',
    templateUrl: 'js/search_result/search_result.html',
    controller: 'SearchCtrl'
  });
});
