juke.directive('songsTable', ['PlayerFactory', function(PlayerFactory){
  return {
    templateUrl: '/js/song/templates/songsTable.html',
    scope: {
      songs:"="
    },
    link: function(s,e,a){
      // angular.extend(s, PlayerFactory);
      s.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, s.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };

      s.getCurrentSong = function () {
        return PlayerFactory.getCurrentSong();
      };

      s.isPlaying = function (song) {
        return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
      };
    }
  }
}])
.directive('doubleClick', function(){
  return {
    restrict : 'A',
    scope:{
      doubleClick: '&'
    },
    link: function (scope,element,a) {
      element.on('dblclick', function (song) {
        scope.doubleClick(song)
      })
    }
  }
})
