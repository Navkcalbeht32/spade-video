import React from 'react';
import './Sidebar.styles.scss'
import LinkItem from '../../Links/LinkItem.component';
import AdItem from '../../AdItem/AdItem.component';
import { ReactComponent as Gear } from '../../../assets/gear.svg';
import { ReactComponent as Logo } from '../../../assets/spade-logo.svg';
 



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
