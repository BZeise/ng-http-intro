console.log('in gif.service.js');
myApp.service('GifService', function($http){
  var sv = this;

  // find a random gif to return for display
  sv.randomGif = function(){
    console.log( 'in randomGif' );
    return $http.get( 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC' ).then( function( response ){
      // console.log(typeof(response.data.data.image_url));
      sv.theGif = response.data.data.image_url;
    });
  }; // end randomGif

  sv.searchGif = function(searchFor) {
    // assemble search term from ng-model "searchInput"
    var searchUrl = "http://api.giphy.com/v1/gifs/search?q=";
    // target search input
    searchUrl += searchFor;
    searchUrl += "&api_key=dc6zaTOxFJmzC";
    console.log( 'searching for: ', searchUrl);

    return $http.get( searchUrl ).then( function( response ){
      console.log( 'response is: ', response);

      // since we only display one image...
      // ...choose a random one in results to display
      var randomIndexToSearch = Math.floor(Math.random() * 25);
      sv.display = response.data.data[randomIndexToSearch].images.downsized.url;
    });
  };

  console.log(sv.randomGif());

});
