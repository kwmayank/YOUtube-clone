import React from "react";
import "./video.css";
import Playvideo from "../../components/PlayVideo/Playvideo";
import Recommended from "../../components/Recommended/Recommended";
import { useParams } from "react-router-dom";
const Video = () => {
  const {videoId,categoryId}=useParams();

  return(
    <div className="Play-container">
       <Playvideo videoId={videoId}/>
       <Recommended/>

    </div>
  )
}

export default Video;