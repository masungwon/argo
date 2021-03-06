'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('policy', {
    url: '/policy/:type/:underwriter',
    templateUrl: 'js/result/policy/policy.html',
    controller: 'SearchCtrl'
  });
});

app.controller('SearchCtrl', function($scope, $state, $stateParams, SearchFactory) {
	$scope.found = false;
	$scope.noEntryFound = false;
	if ($stateParams.underwriter) {
		var underwriter = $stateParams.underwriter;
		$scope.underwriter = underwriter.split('+').join(' ');
		if ($stateParams.type === '1') {
			SearchFactory.findSubmissionsToReview(underwriter)
			.then(function(rows) {
				if(rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		} else if ($stateParams.type === '2') {
			SearchFactory.findPolicies(underwriter)
			.then(function(rows) {
				if(rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		} else if ($stateParams.type === '3') {
			SearchFactory.findRejectedQuotes(underwriter)
			.then(function(rows) {
				if(rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		} else if ($stateParams.type === '4') {
			SearchFactory.findPendingQuotes(underwriter)
			.then(function(rows) {
				console.log('rows', rows);
				if(rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		}
	} else {
			$scope.underwriter = 'All underwriters';
			if ($stateParams.type === '1') {
			SearchFactory.findSubmissionsToReview()
			.then(function(rows) {
				if (rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		} else if ($stateParams.type === '2') {
			SearchFactory.findPolicies()
			.then(function(rows) {
				if(rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		} else if ($stateParams.type === '3') {
			SearchFactory.findRejectedQuotes()
			.then(function (rows) {
				if(rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		} else if ($stateParams.type === '4') {
			SearchFactory.findPendingQuotes()
			.then(function(rows) {
				if(rows.length === 0) {
					$scope.noEntryFound = true;
				}
				$scope.rows = rows;
				$scope.found = true;
			})
		}
	}
});

app.factory('SearchFactory', function($http) {
	var SearchFactory = {};

	SearchFactory.findSubmissionsToReview = function(underwriter) {
		if (!underwriter) {
			return $http.get('/api/submissionsToReview/')
			.then(function(response) {
				return response.data;
			});
		} else {
			return $http.get('/api/submissionsToReview/' + underwriter)
			.then(function(response) {
				return response.data;
			});
		}
	}

	SearchFactory.findPolicies = function(underwriter) {
		if (!underwriter) {
			return $http.get('/api/policies')
				.then(function(response) {
					return response.data;
			});
		} else {
		return $http.get('/api/policies/' + underwriter)
			.then(function(response) {
				return response.data;
			});
		}
	}

	SearchFactory.findRejectedQuotes = function(underwriter) {
		if (!underwriter) {
			return $http.get('/api/rejectedByClients')
				.then(function(response) {
					return response.data;
			});
		} else {
		return $http.get('/api/rejectedByClients/' + underwriter)
			.then(function(response) {
				return response.data;
			});
		}
	};

	SearchFactory.findPendingQuotes = function (underwriter) {
		if (!underwriter) {
			return $http.get('/api/pendingQuoted')
				.then(function(response) {
					return response.data;
			});
		} else {
		return $http.get('/api/pendingQuoted/' + underwriter)
			.then(function(response) {
				return response.data;
			});
		}
	}
 	return SearchFactory;
});
