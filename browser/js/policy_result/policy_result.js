app.config(function ($stateProvider) {
  $stateProvider.state('policy_result', {
    url: '/policy_result/:type/:underwriter',
    templateUrl: 'js/policy_result/policy_result.html',
    controller: 'SearchCtrl'
  });
});

app.controller('SearchCtrl', function($scope, $state, $stateParams, SearchFactory) {
	var underwriter = $stateParams.underwriter;
	$scope.underwriter = underwriter.split('+').join(' ');
	if ($stateParams.type === '1') {
		type = 'submissionsToReview';
		SearchFactory.findSubmissionsToReview(underwriter)
		.then(function(rows) {
			$scope.rows = rows;
		})
	} else if ($stateParams.type === '2') {
		SearchFactory.findPolicies(underwriter)
		.then(function(rows) {
			$scope.rows = rows;
		})
	}
});

app.factory('SearchFactory', function($http) {
	var SearchFactory = {};

	//
	SearchFactory.findSubmissionsToReview = function(underwriter) {
		console.log('2) in SearchFactory; underwriter:', underwriter);
		return $http.get('/api/submissionsToReview/' + underwriter)
			.then(function(response) {
				return response.data;
			});
	}

	SearchFactory.findPolicies = function() {
		console.log('in SearchFactory; underwriter:', underwriter);
		return $http.get('/api/policies/:underwriter' + underwriter)
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
