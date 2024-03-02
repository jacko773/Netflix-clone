import React, { useState } from "react";
import ReactPlayer from "react-player";
import VolumeOffOutlinedIcon from "@mui/icons-material/VolumeOffOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import "./VideoPlayer.css";

const VideoPlayer = ({
  url,
  width,
  height,
  controls,
  muted,
  playing,
  className,
}) => {
  const [isMuted, setIsMuted] = useState(muted);
  return (
    <div className="player-wrapper">
      <ReactPlayer
        url={url}
        controls={controls}
        width={width}
        height={height}
        muted={isMuted}
        playing={playing}
        className={className}
      />
      {!controls && (
        <div
          style={{
            position: "absolute",
            bottom: 75,
            right: 50,
            color: "whitesmoke",
          }}
          onClick={() => setIsMuted(!isMuted)}
        >
          {isMuted ? (
            <VolumeOffOutlinedIcon fontSize="large" />
          ) : (
            <VolumeUpOutlinedIcon fontSize="large" />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
