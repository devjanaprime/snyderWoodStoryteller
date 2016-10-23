/**********************
Snyder Wood Storyletter
by @devjana
**********************/
var verbose = true;
var myApp = angular.module( 'myApp', [] );

myApp.controller( 'SnyderWoodSoryteller', [ '$scope', '$http', function( $scope, $http ){
  $scope.panels = [];
  for (var i = 0; i < 22; i++) {
    $scope.panels[i] = 'panels/' + i + '.png';
  }
  if( verbose ) console.log( '$scope.panels:', $scope.panels );
  $scope.beats = [ 'Opening Image', 'Theme Stated', 'Set-Up', 'Catalyst', 'Debate', 'Break into Two', 'B Story', 'Fun and Games', 'Midpoint', 'Bad Guys Close In', 'All Is Lost', 'Dark Night of the Soul', 'Break into Three', 'Finale', 'Final Image' ];
  if( verbose ) console.log( '$scope.beats:', $scope.beats );
  $scope.story=[];
  for( var i = 0; i < $scope.beats.length; i++ ) {
    $scope.story.push({
      beat: $scope.beats[ i ],
      panel: $scope.panels[ i ],
      caption: 'n/a'
    });
  }
  if( verbose ) console.log( '$scope.story:', $scope.story );
}]); // end container
