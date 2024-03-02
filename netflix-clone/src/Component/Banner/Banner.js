import "./Banner.css";
import VideoPlayer from "../Player/VideoPlayer";

const Banner = () => {
  return (
    <div>
      <VideoPlayer
        pip={true}
        // className="video"
        url="https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
        width="100%"
        height={window.innerHeight - 100}
        controls={false}
        autoPlay={true}
        muted={true}
        playing={true}
        className="bannerPalyer"
      />
    </div>
  );
};

export default Banner;
