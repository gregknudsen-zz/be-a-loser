// Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.

  var player;
  var t2d = 'PL4Q5STdNYMWqJKAlLR7CKqSbM6pyprO-9'
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('t2d-player', {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
        listType: 'playlist',
        list: t2d
      }
    });
  }


