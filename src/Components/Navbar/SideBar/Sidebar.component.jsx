import React from 'react';


const Sidebar = () => {
    return (
        <div className="side-bar">
                <div className="side-bar-top">
                    <Logo className="nav-logo" />
                </div>
                <div className="side-bar-middle">
                    <div className="center-container pad-left">
                        <LinkItem title="View Livefeeds" />
                        <div className="blob"></div>
                    </div>
                    
                </div>
                <div className="side-bar-bottom">
                    <div className="container">
                        <div className="flex-row">
                            <h3 className="channel-heading">Channels</h3>
                            <Gear className="channel-gear" />
                        </div>
                        
                        <LinkItem title="Custom Playlists" />
                        <LinkItem title="Spade EDU" />
                        <LinkItem title="Gaming Center" />
                        <LinkItem title="Podcasts" />
                    </div>
                    <div className="container">
                        <AdItem />
                        <AdItem />
                        <AdItem />
                        <AdItem />
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;
