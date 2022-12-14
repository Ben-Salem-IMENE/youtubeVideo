import React from "react";
import './VideosItems.css';
const VideosItem = ({video , onVideoSelect}) =>{  
    return (
    <div onClick={()=>onVideoSelect(video)} className="item video-item">       
        <img className="ui image" src ={video.snippet.thumbnails.default.url} alt ={video.snippet.title} />
        <div className="content"> 
            <div className="header">{video.snippet.title}  </div>
        </div>              
    </div>
    );
};
export default VideosItem;