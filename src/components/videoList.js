import React from "react";
import VideosItem from "./VideosItem";
const VideoList =({videos , onVideoSelect})=>{ 
    const rendredList=  videos.map((video) => {
        return <VideosItem key= {video.id.videoId} onVideoSelect={onVideoSelect} video = {video} /> 
    });  
    return <div className="ui relaxed divided list"> {rendredList}</div>
};
export default VideoList;