import React from 'react';
import './Button.styles.scss';

const Button = (props) => {


    return (
        <div className="button">
            <h5>{props.title}</h5>
        </div>
    )
}

export default Button;
