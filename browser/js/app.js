'use strict';

window.app = angular.module('argo', ['ui.router', 'infinite-scroll', 'ngMaterial']);

// This app.run is for listening to errors broadcasted by ui-router, usually originating from resolves
app.config(function ($urlRouterProvider, $locationProvider) {
    // This turns off hashbang urls (/#about) and changes it to something normal (/about)
    $locationProvider.html5Mode(true);
    // If we go to a URL that ui-router doesn't have registered, go to the "/" url.
    $urlRouterProvider.otherwise('/');
});

app.run(function ($rootScope) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, thrownError) {
        console.info('The following error was thrown by ui-router while transitioning to state ' + toState.name + '. The origin of this error is probably a resolve function:');
        console.error(thrownError);
    });
});
