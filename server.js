// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var index = require( './modules/index' );

// uses
app.use( express.static( 'public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/', index );

// globals
var port = process.env.PORT || 4545;

// spin up server
app.listen( port, function(){
  console.log( 'server up on:', port );
}); //end spin up server
