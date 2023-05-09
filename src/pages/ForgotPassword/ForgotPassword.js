import React, {useEffect, useState} from "react";
import classes from './ForgotPassword.module.css';
import Image1 from "../../assets/images/Image1.png";
import Vector from "../../assets/images/Vector.png";
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import useInput from "../../hooks/useInput";
import Input from "../../UI/Input/Input";


function ForgotPassword(){

    const navigate = useNavigate();
    const {isEmail}=useValidation();

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
        isTouched:emailIsTouched
    } = useInput(isEmail);

    let emailMessage =null;
    if(!email){
        emailMessage = "Email is required";
    }
    else if (!emailIsValid){
        emailMessage = "Invalid email";
    }

    let formIsValid = false;
    if (emailIsValid) {
        formIsValid = true;
    }


    const submitHandler = async event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        await  resetEmail();
        navigate(`/checkBox`)
    };



    return(
        <div className="whole">
            <div className="left">
                <img className={classes.imgStyle} src={Image1} alt=""/>
            </div>
            <div className="right">
                <div className={classes.forgotPass}>Forgot your password?</div>
                <div className={classes.title}>Sign Up</div>
                <form onSubmit={submitHandler}>
                    <Input
                        label='Email'
                        red="*"
                        hasError={emailHasError}
                        errorText={emailMessage}
                        width ='545px'
                        input={{
                            value: email,
                            placeholder: "Type your email address",
                            type: "email",
                            onChange: emailChangeHandler,
                            onBlur: emailBlurHandler
                        }}
                    />
                    <div className={classes.lineDiv}/>
                    <div className={classes.btnsDiv}>
                        <div className={classes.leftBtns} onClick={()=>navigate(`/login`)}>
                            <img src={Vector} alt="" className={classes.vectorImg}/>
                            <div className={classes.back}>Back</div>
                        </div>
                        <div className={classes.rightBtn} onClick={()=>navigate(`/check-email`)}>Reset</div>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default ForgotPassword;