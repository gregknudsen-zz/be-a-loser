// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.

  var player;
  var IF = 'PL4Q5STdNYMWpUyn3pkZKWO6Edqiq1J5z8'
  function onYouTubePlayerAPIReady() {
    player1 = new YT.Player('t2d-video', {
      height: '390',
      width: '640',
      // videoId: 'ULi3tQsAoqs',
      playerVars: {
        autoplay: 1,
        listType: 'playlist',
        list: IF
      }
    });
  }

  



