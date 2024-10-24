import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null); // Accessing the video element

  const handlePlay = () => {
    videoRef.current.play(); // Play the video
  };

  const handlePause = () => {
    videoRef.current.pause(); // Pause the video
  };

  return (
    <>
      <div className="container">
        <video
          ref={videoRef}
          width="400"
          controls
          src="https://www.w3schools.com/html/mov_bbb.mp4"
        />
        <br />
        <div className="btns">
          <button onClick={handlePlay}>Play</button>
          <button onClick={handlePause}>Pause</button>
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;
