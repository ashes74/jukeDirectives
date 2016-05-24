juke.directive('albumList', function(){
  return{
    templateUrl: '/js/album/templates/albums.html',
    scope:{
      albums: "="
    }
  }
})
