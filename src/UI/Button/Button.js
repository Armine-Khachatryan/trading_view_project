import React from "react";
import classes from './Button.module.css';



function Button (props) {
    return(
        <button className={classes.btnStyle}
                style={{width: props.width}}
                type={props.type || 'button'}
                disabled={props.disabled}
                onClick={props.OnClick}>
            {props.children}
        </button>
    )
}


export default Button;