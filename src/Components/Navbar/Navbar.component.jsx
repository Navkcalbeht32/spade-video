import React from 'react';
import './Navbar.styles.scss';
import Button from '../Button/Button.component';
import SubItem from '../Subscription/SubItem.component';
import { ReactComponent as Logo } from '../../assets/spade-logo.svg';
import { ReactComponent as Gear } from '../../assets/gear.svg';
import LinkItem from '../Links/LinkItem.component';
import AdItem from '../AdItem/AdItem.component';
import NavItem from '../NavItems/NavItem.component';
import { ReactComponent as Cloud } from '../../assets/cloud.svg';
import { ReactComponent as NavGear } from '../../assets/nav-gear.svg';
import { ReactComponent as Bell } from '../../assets/bell.svg';
import { ReactComponent as User } from '../../assets/user.svg';
import { ReactComponent as Search } from '../../assets/search.svg';


const Navbar = () => {
    return (
        <div className="navbar-container">
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
            <div className="header-bar">
                <div className="header-top">
                    <div className="header-top-wrapper">
                        <div className="center-container flex-row">
                            <Search className="search-button" />
                            <div className="nav-search">
                                <input className="searchbar" type="text"/>
                            </div>
                            <NavItem icon={<Cloud />} />
                            <NavItem icon={<NavGear />} />
                            <NavItem icon={<Bell />} />
                            <NavItem icon={<User />} />
                        </div>
                    </div>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-wrapper">
                        <div className="center-container">
                            <div className="flex-row">
                                <div className="sub-items">
                                    <SubItem />
                                    <SubItem />
                                    <SubItem />
                                    <SubItem />
                                    <SubItem />
                                    <SubItem />
                                    <SubItem />
                                </div>
                                <div className="sub-button">
                                    <Button title="Subscriptions" className="space" />
                                </div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
