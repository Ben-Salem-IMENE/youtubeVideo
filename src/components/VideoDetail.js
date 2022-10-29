import React from "react";

const VideoDetail = ({video}) =>{   
    if(!video){
        return <div>Loading .. </div>
    }else{
        const voidesrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        return (
        <div>
            <div className="ui embed">
            <iframe width="560" height="315"  src={voidesrc} />                
            </div>
             <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
            </div>
            <p className="video-description">{video.snippet.description}</p>
        </div>
        );
    }
};

export default VideoDetail;