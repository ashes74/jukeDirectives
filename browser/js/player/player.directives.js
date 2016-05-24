juke.directive('playerControls', ['PlayerFactory', function(PlayerFactory){
  return {
    restrict: 'A',
    templateUrl: '/js/player/templates/playerControls.html',
    link: function(s,e,a){

      angular.extend(s, PlayerFactory); // copy props from param2 to param1

      s.toggle = function () {
        if ( PlayerFactory.isPlaying() ) PlayerFactory.pause();
        else PlayerFactory.resume();
      };

      s.getPercent = function () {
        return PlayerFactory.getProgress() * 100;
      };


    }

  }
}])
