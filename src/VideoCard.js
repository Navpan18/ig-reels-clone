import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({url,likes,shares,channel,avatarSrc,song}) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    } else {
      videoRef.current.play();
      setIsVideoPlaying(true);
    }
  };
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
      controlsList="nodownload"
        src={url}
        onClick={onVideoPress}
        ref={videoRef}
        className="videoCard_player"
        loop
      >
        {/* <source src={"https://bit.ly/2U6mEwy"} /> */}
        {/* <source src={"https://bit.ly/3A55Q9E"}   /> */}
      </video>
      
      <VideoFooter
      channel={channel}
      likes={likes}
      shares={shares}
      avatarSrc={avatarSrc}
      song={song}
      />
    </div>
  );
}

export default VideoCard;
