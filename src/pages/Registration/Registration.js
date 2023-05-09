import React, {useEffect, useState} from "react";
import axios from "axios";
import config from "../../config";
import EyeImage from '../../assets/images/EyeImage.png';
import ClosedEye from '../../assets/images/ClosedEye.png';
import Image1 from '../../assets/images/Image1.png';
import Input from "../../UI/Input/Input";
import useInput from "../../hooks/useInput";
import Button from "../../UI/Button/Button";
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import classes from './Registration.module.css';



function Registration() {

    const navigate = useNavigate();
    const {isName, isEmail, isPassword} = useValidation();
    const [signUpError, setSignUpError] = useState(null);

    const {
        value: fullName,
        isValid: fullNameIsValid,
        hasError: fullNameHasError,
        valueChangeHandler: fullNameChangeHandler,
        inputBlurHandler: fullNameBlurHandler,
        reset: resetFullName,
        isTouched: fullNameIsTouched
    } = useInput(isName);

    const {
        value: email,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
        isTouched: emailIsTouched
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
        showPassFalse: showPassFalse,
        isTouched: passwordIsTouched
    } = useInput(isPassword);



    useEffect(() => {
        if (fullNameIsTouched || emailIsTouched
            || passwordIsTouched) {
            setSignUpError("")
        }
    }, [fullNameIsTouched, emailIsTouched, passwordIsTouched]);


    let emailMessage = null;
    if (!email) {
        emailMessage = "Email is required";
    } else if (!emailIsValid) {
        emailMessage = "Invalid email";
    }

    let formIsValid = false;
    if (fullNameIsValid
        && emailIsValid
        && passwordIsValid) {
        formIsValid = true;
    }


    const body = {
        full_name: fullName,
        username: email,
        email,
        password,
    }
    let postRegistration = async (body) => {
        try {
            let response = await axios.post(`${config.baseUrl}auth/register/`, body);
            navigate(`/login`);
        } catch (e) {
            setSignUpError("Something went wrong");
        }
    }


    const submitHandler = async event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        await resetFullName();
        await resetEmail();
        await resetPassword();
        await showPassFalse();
        await postRegistration(body);
    };



    return (
        <div className="whole">
            <div className="left">
                <img className={classes.imgStyle} src={Image1} alt=""/>
            </div>
            <div className="right">
                <div className={classes.welcome}>Welcome</div>
                <div className={classes.title}>Sign Up</div>
                <form onSubmit={submitHandler}>
                    <Input
                        label='Full Name'
                        red="*"
                        error={signUpError}
                        hasError={fullNameHasError}
                        errorText="Please enter Full Name."
                        width='545px'
                        input={{
                            value: fullName,
                            placeholder: "Type your Full Name",
                            type: "text",
                            onChange: fullNameChangeHandler,
                            onBlur: fullNameBlurHandler,
                        }}
                    />
                    <Input
                        label='Email'
                        red="*"
                        error={signUpError}
                        hasError={emailHasError}
                        errorText={emailMessage}
                        width='545px'
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
                        error={signUpError}
                        hasError={passwordHasError}
                        errorText="Password must contain one lowercase, 8 characters minimum, one uppercase"
                        width='545px'
                        image={passwordShow ? EyeImage : ClosedEye}
                        onClick={passwordShowHandler}
                        input={{
                            value: password,
                            placeholder: "Type your password",
                            type: passwordShow ? "text" : "password",
                            onChange: passwordChangeHandler,
                            onBlur: passwordBlurHandler,
                        }}
                    />
                    <Button disabled={!formIsValid} width="545px" type={"submit"}>Sign Up</Button>
                    {signUpError && <div className={classes.signUpError}>{signUpError}</div>}
                </form>
                <div className={classes.belowDiv}>Do you have an account?
                    <span className={classes.sign}
                          onClick={() => navigate(`/login`)}>Sign In</span>
                </div>
            </div>
        </div>
    )

}

export default Registration;
