import React from 'react';


const VideoDetail = ({video}) => {
    //we added this because it could happen that parent element started rendering this component
    //before  video is fetched with  youtube async api function 
    if(!video){
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    //ES6 syntatic shugar for string concatanation
    const url = `http://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;