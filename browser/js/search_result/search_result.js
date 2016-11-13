app.config(function ($stateProvider) {
  $stateProvider.state('search_result', {
    url: '/search_result/:type',
    templateUrl: 'js/search_result/search_result.html',
    controller: 'SearchCtrl'
  });
});

app.controller('SearchCtrl', function($scope, $state, $stateParams, SearchFactory) {
	
	var type;
	if ($stateParams.type === '1') {
		type = 'submissionsToReview';
		SearchFactory.findSubmissionsToReview()
		.then(function(rows) {
			console.log('row', rows[0]);
			$scope.rows = rows;
		})
	} else if ($stateParams.type === '2') {
		type = 'policies';
		SearchFactory.findPolicies()
		.then(function(rows) {
			console.log('row', rows[0]);
			$scope.rows = rows;
		})
	}
});

app.factory('SearchFactory', function($http) {
	var SearchFactory = {};

	SearchFactory.findSubmissionsToReview = function() {
		return $http.get('/api/submissionsToReview')
			.then(function(response) {
				return response.data;
			});
	}

	SearchFactory.findPolicies = function() {
		return $http.get('/api/policies')
			.then(function(response) {
				return response.data;
			});
	}

	// SearchFactory.getAll = function() {
	// 	return $http.get('/api/')
	// 	.then(function(response) {
	// 		return response.data;
	// 	});
	// };

 	return SearchFactory;
});
