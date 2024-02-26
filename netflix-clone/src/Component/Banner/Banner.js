import { useState } from "react";
import ReactHlsPlayer from "react-hls-player/dist";
import "./Banner.css";
const Banner = () => {
  const [isMuted, setIsMuted] = useState(false);
  return (
    <ReactHlsPlayer
      className="video"
      src="http://sample.vodobox.net/skate_phantom_flex_4k/skate_phantom_flex_4k.m3u8"
      width="100%"
      height="500px"
      controls={false}
      autoPlay
      muted={isMuted}
    />
  );
};

export default Banner;
