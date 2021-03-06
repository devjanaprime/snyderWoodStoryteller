/**********************
Snyder Wood Storyletter
by @devjana
**********************/
var verbose = true;
var myApp = angular.module( 'myApp', [] );

myApp.controller( 'SnyderWoodSoryteller', [ '$scope', '$http', function( $scope, $http ){
  $scope.init = function(){
    // initial setup
    // panels
    $scope.panels = [];
    for (var i = 0; i < 22; i++) {
      $scope.panels[i] = 'panels/' + i + '.png';
    }
    if( verbose ) console.log( '$scope.panels:', $scope.panels );
    // beats
    $scope.beats = [ 'Opening Image', 'Theme Stated', 'Set-Up', 'Catalyst', 'Debate', 'Break into Two', 'B Story', 'Fun and Games', 'Midpoint', 'Bad Guys Close In', 'All Is Lost', 'Dark Night of the Soul', 'Break into Three', 'Finale', 'Final Image' ];
    if( verbose ) console.log( '$scope.beats:', $scope.beats );
    // base story
    $scope.story={
      title: 'noName',
      author: 'noAuthor',
      scenes: []
    };
    for( var i = 0; i < $scope.beats.length; i++ ) {
      $scope.story.scenes.push({
        beat: $scope.beats[ i ],
        panel: 0,
        caption: 'n/a'
      });
    }
    if( verbose ) console.log( '$scope.story:', $scope.story );
    // initial selected scene
    $scope.currentSceneIndex = 0;
    $scope.loadScene();
  }; // end init

  $scope.loadScene = function(){
    if( verbose ) console.log( 'in loadScene:', $scope.currentSceneIndex );
    $scope.selectedScene = $scope.story.scenes[ $scope.currentSceneIndex ];
    if( verbose ) console.log( '$selectedScene:', $scope.selectedScene );
  }; // end loadScene

  $scope.loadStoryLocal = function(){
    if( verbose ) console.log( 'in loadStory' );
    $scope.story = JSON.parse( localStorage.story );
  }; // end loadStory

  $scope.nextPanel = function(){
    $scope.story.scenes[ $scope.currentSceneIndex ].panel++;
    if( $scope.story.scenes[ $scope.currentSceneIndex ].panel >= $scope.panels.length -1 ){
      $scope.story.scenes[ $scope.currentSceneIndex ].panel=0;
    }
    if( verbose ) console.log( 'in nextPanel' );
    $scope.loadScene();
  };// end
  $scope.previousPanel = function(){
    $scope.story.scenes[ $scope.currentSceneIndex ].panel--;
    if( $scope.story.scenes[ $scope.currentSceneIndex ].panel < 0 ){
      $scope.cstory.scenes[ $scope.currentSceneIndex ].panel = $scope.panels.length -1;
    }
    if( verbose ) console.log( 'in previousPanel' );
    $scope.loadScene();
  };// end

  $scope.nextScene = function(){
    if( $scope.currentSceneIndex < $scope.story.scenes.length - 1 ){
      $scope.currentSceneIndex++;
    }
    if( verbose ) console.log( 'in nextScene:', $scope.currentSceneIndex );
    $scope.saveStoryLocal();
    $scope.loadScene();
  };// end
  $scope.previousScene = function(){
    if( $scope.currentSceneIndex > 0 ){
      $scope.currentSceneIndex--;
    }
    if( verbose ) console.log( 'in previousScene:', $scope.currentSceneIndex );
    $scope.saveStoryLocal();
    $scope.loadScene();
  };// end

  $scope.saveScene = function(){
    if( verbose ) console.log( 'in saveScene' );
    $scope.story.scenes[ $scope.currentSceneIndex ].panel = $scope.selectedScene.panel;
    $scope.story.scenes[ $scope.currentSceneIndex ].panel = $scope.selectedScene.caption;
  }; // end saveScene

  $scope.saveStoryLocal = function(){
    if( verbose ) console.log( 'in saveStory' );
    localStorage.story = JSON.stringify( $scope.story );
  }; // end saveStory
  //spin it up
  $scope.init();
  // temp loadStoryLocal
  $scope.loadStoryLocal();
}]); // end container
