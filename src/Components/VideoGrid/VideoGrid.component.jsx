import React from 'react'
import VideoItem from './VideoItem.component';
import { Grid } from '@material-ui/core';

const VideoGrid = () => {
    return (
        <Grid item container row justify="space-between">
            <VideoItem 
            title="10 Industries Facing Massive Disruption"
            channelName="Valuetainment"
            postDate="3 Days"
            postViews="103k"
            />
            <VideoItem 
            title="10 Industries Facing Massive Disruption"
            channelName="Valuetainment"
            postDate="3 Days"
            postViews="103k"
            />
            <VideoItem 
            title="10 Industries Facing Massive Disruption"
            channelName="Valuetainment"
            postDate="3 Days"
            postViews="103k"
            />
            <VideoItem 
            title="10 Industries Facing Massive Disruption"
            channelName="Valuetainment"
            postDate="3 Days"
            postViews="103k"
            />
            
        </Grid>
    )

}

export default VideoGrid;
