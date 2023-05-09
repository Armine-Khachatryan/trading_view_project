import React from "react";
import classes from './CheckEmail.module.css'
import Image1 from "../../assets/images/Image1.png";
import Mail from "../../assets/images/Mail.png";



function CheckEmail(){
    return(
        <div className="whole">
            <div className="left">
                <img className={classes.imgStyle} src={Image1} alt=""/>
            </div>
            <div className="right">
                <div className={classes.checkImgDiv}>
                    <img src={Mail} alt=""/>
                </div>
                <div className={classes.checkTitle}>Check Your Inbox !</div>
                <div className={classes.checkText}>We've sent an email to your email address. Follow the steps
                    provided in the email to update your password or select Log In if you don’t want to change your
                    password at this time.</div>
            </div>
        </div>
    )
}


export default CheckEmail;