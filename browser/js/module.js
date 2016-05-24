'use strict';

var juke = angular.module('juke', ['ui.router', 'ngMessages']);

juke.run(function ($rootScope) {
  $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
    console.error('Error transitioning from "' + fromState.name + '" to "' + toState.name + '":', error);
  });
});

juke.config(function ($urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
})
