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

juke.directive('keypress', function(){
  return{
    restrict: 'A',
    link:function(s,e,a){
      e.bind("keydown", function (event) {
        // console.log("You pressed a key:", event.which);
        // console.log("currentSong is", s.getCurrentSong());
            if(event.which === 39) {
              console.log("pressing the right button");
              s.next();
            }
            else if (event.which === 37) {
              s.previous();
            }
            else if( event.which === 32){
              s.toggle();
            }
            event.preventDefault();
        });
    }
  }
})
