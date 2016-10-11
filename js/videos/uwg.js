// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.

  var player;
  var uwg = 'PL4Q5STdNYMWqx7e8eHVMzzbmN6Hglx6o2'
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('uwg-video', {
      height: '390',
      width: '640',
      playerVars: {
        // autoplay: 1,
        listType: 'playlist',
        list: uwg
      }
    });
  }

  var Notify = (function(){

  if ($('body').width > 1024) {
    function init(){
      message = "You are able to navigate videos by using the dropdown menu in the upper left hand corner of the screen. Enjoy!"  
      confirm(message);
    }
  };

  var message;

  return {
    init: init
  }

})();

$(document).ready(Notify.init);


