function onYouTubePlayerAPIReady() {
    player2 = new YT.Player('t2d-video-2', {
      height: '390',
      width: '640',
      videoId: 'THDQLwf1Yvs',
      playerVars: {
        autoplay: 1,
        // listType: 'playlist',
        // list: t2d
      }
    });
  }