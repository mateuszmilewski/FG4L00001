
// one object in global namespace
var FG4LApp = angular.module('FG4LApp', []);



FG4LApp.run( function($rootScope) {

  //
  $rootScope.fg4l = {};
  $rootScope.fg4l.nm = "FG4L00001";
  $rootScope.fg4l.arr = [...Array(10).keys()].map( x => ++x );


});

FG4LApp.controller('mainController', function($scope) {
  



  $scope.fg4l.arr = ARR;
});


FG4LApp.directive('youtube', function($window) {
  return {
    restrict: "E",

    template: '<div></div>',

    link: function(scope, element) {
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      
      // let player;

      $window.onYouTubeIframeAPIReady = function() {

        ARR.forEach( function(indx) {
          PLAYERS.push( new YT.Player("y-" + indx, {

            videoId: 'uHq-qDLTpTo',
            height: 100,
            playerVars: {
              autoplay: 1,        // Auto-play the video on load
              controls: 1,        // Show pause/play buttons in player
              showinfo: 0,        // Hide the video title
              modestbranding: 1,  // Hide the Youtube Logo
              loop: 1,            // Run the video in a loop
              playlist: 'uHq-qDLTpTo',
              fs: 0,              // Hide the full screen button
              cc_load_policy: 0, // Hide closed captions
              iv_load_policy: 3,  // Hide the Video Annotations
              autohide: 0         // Hide video controls when playing
            },
            events: {
              onReady: function(e) {

                console.log("onReady: ", e)

                e.target.mute();
              }

            }
          }));
        });

      };
    },  
  }


  /*
  $scope.onYouTubeIframeAPIReady = function() {
    ytPlayers = [];
    $scope.fg4l.arr.forEach( function(idx) {


      ytPlayers.push( new YT.Player('fg-item-' + idx, {

        videoId: 'uHq-qDLTpTo',
        width: 400,
        playerVars: {
          autoplay: 1,        // Auto-play the video on load
          controls: 1,        // Show pause/play buttons in player
          showinfo: 0,        // Hide the video title
          modestbranding: 1,  // Hide the Youtube Logo
          loop: 1,            // Run the video in a loop
          fs: 0,              // Hide the full screen button
          cc_load_policy: 0, // Hide closed captions
          iv_load_policy: 3,  // Hide the Video Annotations
          autohide: 0         // Hide video controls when playing
        },
        events: {
          onReady: function(e) {
            e.target.mute();
          }
        }
  
      }));



    });
  }
  */
});




