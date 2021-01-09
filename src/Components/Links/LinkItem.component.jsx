import React from 'react';
import './LinkItem.styles.scss';


const LinkItem = (props) => {
    return (
        <div>
            <h4 className="link-item">{props.title}<span>></span></h4>
        </div>
    )
}

export default LinkItem;
