import React, { useRef, useEffect } from "react";
import "./video.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import VideoStats from "./videoStats";

const VideoCard = (props) => {
  const {
    url,
    username,
    description,
    song,
    likes,
    shares,
    comments,
    saves,
    profilePic,
    setVideoRef,
    autoplay,
  } = props;
  const videoRef = useRef(null);

  useEffect(() => {}, [autoplay]);

  const onVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video">
      {/* The video element */}
      <video
        className="player"
        onClick={onVideoPress}
        ref={(ref) => {
          videoRef.current = ref;
          setVideoRef(ref);
        }}
        loop
        src={url}
      ></video>
      <div className="bottom-controls">
        <div className="footer-left">
          <div className="footer-container">
            <div className="footer-left">
              <div className="text">
                <h3>@{username}</h3>
                <p>{description}</p>
                <div className="ticker">
                  <FontAwesomeIcon icon={faMusic} style={{ width: "30px" }} />
                  {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                  <marquee direction="left" scrollamount="2">
                    <span>{song}</span>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          {/* <VideoStats
            likes={likes}
            shares={shares}
            comments={comments}
            saves={saves}
            profilePic={profilePic}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
