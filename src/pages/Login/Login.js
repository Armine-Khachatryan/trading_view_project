import React, {useEffect, useState} from "react";
import EyeImage from '../../assets/images/EyeImage.png';
import ClosedEye from '../../assets/images/ClosedEye.png';
import Image1 from '../../assets/images/Image1.png';
import Image2 from '../../assets/images/Image2.png';
import classes from './Login.module.css';
import Input from "../../UI/Input/Input";
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import useInput from "../../hooks/useInput";
import Button from "../../UI/Button/Button";
import axios from "axios";
import config from "../../config";



function Login(){

    const navigate = useNavigate();
    const {isEmail, isPassword}=useValidation();
    const [signInError, setSignInError] = useState(null);


    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
        isTouched:emailIsTouched
    } = useInput(isEmail);

    const {
        value: password,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        togglePassword: passwordShowHandler,
        passwordShown: passwordShow,
        reset: resetPassword,
        showPassFalse:showPassFalse,
        isTouched: passwordIsTouched
    } = useInput(isPassword);

    useEffect(() => {
        if(emailIsTouched
            || passwordIsTouched){
            setSignInError("")
        }
    },[emailIsTouched, passwordIsTouched]);

    let emailMessage =null;
    if(!email){
        emailMessage = "Email is required";
    }
    else if (!emailIsValid){
        emailMessage = "Invalid email";
    }


    let formIsValid = false;
    if (emailIsValid
        && passwordIsValid) {
        formIsValid = true;
    }

    const body= {
        email,
        password,
    }



    let postLogin= async (body)=> {
        try {
            let response = await axios.post(`${config.baseUrl}auth/login/`, body);
            navigate(`/home`);
        } catch (e) {
            setSignInError("Something went wrong");
        }
    }



    const submitHandler =  event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
          resetEmail();
          resetPassword();
          showPassFalse();
          postLogin(body);
    };



    return(
        <div className="whole">
            <div className="left">
                <img className={classes.imgStyle} src={Image1} alt=""/>
            </div>
            <div className="right">
                <div className={classes.imgDiv}>
                    <img src={Image2} alt=""/>
                </div>
                <div className={classes.title}>Sign In</div>
                <form onSubmit={submitHandler}>
                    <Input
                        label='Email'
                        red="*"
                        error={signInError}
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
                    <Input
                        label='Password'
                        red="*"
                        error={signInError}
                        hasError = {passwordHasError}
                        errorText="Password must contain one lowercase, 8 characters minimum, one uppercase"
                        width ='545px'
                        image ={passwordShow ? EyeImage : ClosedEye}
                        onClick={passwordShowHandler}
                        input={{
                            value: password,
                            placeholder: "Type your password",
                            type:passwordShow ? "text" : "password",
                            onChange: passwordChangeHandler,
                            onBlur: passwordBlurHandler,
                        }}
                    />
                    <div className={classes.forgotDiv} onClick={()=>navigate(`/forgot-password`)}>
                        Forgot your password?
                    </div>
                    <Button disabled={!formIsValid} width="545px" type={"submit"}>Sign In</Button>
                    {signInError && <div className={classes.signInError}>{signInError}</div>}
                </form>
                <div className={classes.belowDivLogin} onClick={()=>navigate(`/register`)}>Don’t have an account?
                    <span className={classes.signUp}>Sign Up </span>now
                </div>
            </div>
        </div>
    )
}


export default Login;