import React, { useEffect, useState } from 'react';
import './Playvideo.css';
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import userprofile from '../../assets/user_profile.jpg'
const Playvideo = ({ videoId }) => {
const [apiData,setApiData]=useState(null);
const API_KEY = "YOUR_YOUTUBE_API_KEY";


 const fetchVideoDta=async () =>{
     // fetching video data
     const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;
     await fetch(videoDetails_url).then(res=>res.json()).then(data=> setApiData(data.items[0]));



 }
   useEffect(()=>{
    fetchVideoDta();
   },[videoId])

    return (
        <div className='play-video'>
            {/* <video src={video1} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3> {apiData?apiData.snippet.title:"Title here"}</h3>
            <div className="play-video-info">
                <p> {apiData?apiData.statistics.viewCount:"16k"} &bull; 2 days ago</p>
                <div>
                    <span><img src={like} alt='' /> 200 </span>
                    <span><img src={dislike} alt='' /> 2 </span>
                    <span><img src={share} alt='' /> Share </span>
                    <span><img src={save} alt='' /> Save </span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={jack} alt='' />
                <div>
                    <p> Apna college</p>
                    <span> 1M Subscribers  </span>
                </div>
                <button> Subscribe </button>
            </div>
            <div className="vid-description">
                <p> Channel That makes learning Easy </p>
                <p> Subscribe Apna college  to watch more Tutorials on web development </p>
                <hr />
                <h4> 150 Comments </h4>
                <div className="comment">
                    <img src={userprofile} alt='' />
                    <div>
                        <h3> Mayank <span> 1 day ago </span> </h3>
                        <p> hugddshjjchjdhjdgbhjhcjdhjgzdhcbdhjdjdvdhhcgdbndjhhfdjdjdhdhd</p>
                        <div className="comment-action">
                            <img src={like} alt='' />
                            <span> 244 </span>
                            <img src={dislike} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playvideo;

