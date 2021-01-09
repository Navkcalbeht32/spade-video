import React from 'react'
import VideoGrid from '../VideoGrid/VideoGrid.component';
import VideoItem from '../VideoGrid/VideoItem.component';
import './HomeGrid.styles.scss';

const HomeGrid = () => {
    return (
        <div className="home-grid">
            <VideoGrid>
                <VideoItem />
            </VideoGrid>
        </div>
    )
}

export default HomeGrid;
