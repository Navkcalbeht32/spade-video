import React from 'react';
import './NavItem.styles.scss';
import { ReactComponent as Cloud } from '../../assets/cloud.svg'

const NavItem = (props) => {
    return (
        <div className="nav-item">
            <div className="icon-center">
                {props.icon}
            </div>
        </div>
    )
}

export default NavItem;
