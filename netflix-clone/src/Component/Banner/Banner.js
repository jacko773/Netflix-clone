import { useState } from "react";
import "./Banner.css";
import VideoPlayer from "../Player/VideoPlayer";

const BannerVideos = [
  "http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8",
  "http://playertest.longtailvideo.com/adaptive/wowzaid3/playlist.m3u8",
  "http://content.jwplatform.com/manifests/vM7nH0Kl.m3u8",
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
];
const Banner = () => {
  const index = Math.floor(Math.random() * 4);
  return (
    <div>
      <VideoPlayer
        pip={true}
        className="video"
        url={BannerVideos[index]}
        width="100%"
        height={window.innerHeight - 100}
        controls={false}
        autoPlay={true}
        muted={true}
        playing={true}
      />
    </div>
  );
};

export default Banner;
