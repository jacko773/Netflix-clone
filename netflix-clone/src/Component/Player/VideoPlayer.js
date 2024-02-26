import React from "react";
import YouTube from "react-youtube";

function onPlayerReady(event) {
  var embedCode = event.target.getVideoEmbedCode();
  event.target.playVideo();
  //   if (document.getElementById("embed-code")) {
  //     document.getElementById("embed-code").innerHTML = embedCode;
  //   }
}

const VideoPlayer = ({ videoId, onEnd }) => {
  const opts = {
    height: "450",
    width: (window.innerWidth / 4) * 3,
    playerVars: {
      origin: window.location.origin,
      autoplay: 0,
    },
  };
  console.log(`videoId ${JSON.stringify(videoId)}`);
  return (
    <YouTube
      videoId={videoId}
      opts={opts}
      // onReady={onPlayerReady}
      onEnd={onEnd}
    />
  );
};

export default VideoPlayer;
