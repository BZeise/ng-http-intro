// declare our intentions to use an Angular module app
var myApp = angular.module( 'myApp', [] );


myApp.controller( 'GiphyController', function( $http ){
  var vm = this;

  vm.searchInput = '';

  // find a random gif to return for display
  vm.randomGif = function(){
    console.log( 'in randomGif' );
    $http.get( 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC' ).then( function( response ){
      console.log( 'back with:', response.data.data.image_url );
      vm.display = response.data.data.image_url;
    });
  }; // end randomGif

  vm.searchGif = function() {

    // assemble search term from ng-model "searchInput"
    var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";
    // target search input
    searchUrl += vm.searchInput;
    searchUrl += "&api_key=dc6zaTOxFJmzC";
    console.log( 'searching for: ', searchUrl);

    $http.get( searchUrl ).then( function( response ){
      console.log( 'response is: ', response);

      // since we only display one image...
      // ...choose a random one in results to display
      var randomIndexToSearch = Math.floor(Math.random() * 25);
      vm.display = response.data.data[randomIndexToSearch].images.downsized.url;
    });
  };
}); // end GiphyController
