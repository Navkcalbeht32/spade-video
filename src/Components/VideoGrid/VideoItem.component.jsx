import React from 'react';
import './VideoItem.styles.scss';

const VideoItem = (props) => {
    return (
        <div className="video-container">
            <div className="image-container">
                <img src={props.image} alt=""/>
                <div className="video-time">
                <h5>19:16</h5>
            </div>
            </div>
            <div className="video-info">
                <h4>{props.title}</h4>
                <h5>{props.channelName}</h5>
                <h5>{props.postDate} ago</h5>
                <h5>{props.postViews} views</h5>
            </div>
        </div>
    )
}

export default VideoItem;
