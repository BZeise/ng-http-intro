// declare our intentions to use an Angular module app
var myApp = angular.module( 'myApp', [] );
console.log('in httpIntro.js');


myApp.controller( 'GiphyController', function( GifService ){
  var vm = this;

  vm.randomGif = function(){

    console.log(GifService.randomGif());
    GifService.randomGif().then(function(response) {
      console.log('in GifService.randomGif, response is: ', response);

      // set vm.display to the URL of image to show
      vm.display = GifService.theGif;
    });
  };

  vm.searchGif = function(){
    GifService.searchGif(vm.searchInput).then(function(response) {
      vm.display = GifService.display;
    });
  };

}); // end GiphyController
