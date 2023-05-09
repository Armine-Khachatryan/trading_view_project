import React, {useEffect, useState} from "react";
import  classes from './ChangePassword.module.css';
import {useNavigate} from "react-router-dom";
import useValidation from "../../hooks/useValidation";
import Image1 from "../../assets/images/Image1.png";
import Input from "../../UI/Input/Input";
import EyeImage from "../../assets/images/EyeImage.png";
import ClosedEye from "../../assets/images/ClosedEye.png";
import Button from "../../UI/Button/Button";
import useInput from "../../hooks/useInput";


function ChangePassword(){

    const navigate = useNavigate();
    const {isPassword}=useValidation();
    const [changePasswordError, setChangePasswordError] = useState(null);

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

    const {
        value: confirmPasswordValue,
        isValid: confirmPasswordIsValid,
        valueChangeHandler: confirmPasswordChangeHandler,
        inputBlurHandler: confirmPasswordBlurHandler,
        togglePassword: confirmPasswordShowHandler,
        passwordShown: confirmPasswordShow,
        reset: resetConfirmPassword,
        isTouched: confirmPasswordIsTouched
    } = useInput(isPassword);


    useEffect(() => {
        if(passwordIsTouched || confirmPasswordIsTouched){
            setChangePasswordError("")
        }
    },[passwordIsTouched,confirmPasswordIsTouched]);


    let hasError = false;
    let confirmPasswordMessage=null;
    if(password !== confirmPasswordValue){
        hasError = true;
        confirmPasswordMessage = "Passwords do not match"
    }


    let formIsValid = false;
    if (passwordIsValid && confirmPasswordIsValid) {
        formIsValid = true;
    }


    const submitHandler = async event => {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        await resetPassword();
        await showPassFalse();
        resetConfirmPassword();
        navigate(`/home`)
    }

    const handleKeyPress = event => {
        if (event.key === 'Enter') {
            submitHandler()
        }
    }
    return(
        <div className="whole">
            <div className="left">
                <img className={classes.imgStyle} src={Image1} alt=""/>
            </div>
            <div className="right">
                <div className={classes.title}>Set New Password</div>
                <form onSubmit={submitHandler}>
                    <Input
                        label='Password'
                        red="*"
                        error={changePasswordError}
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
                    <Input
                        label='Confirm New Password'
                        red="*"
                        error={changePasswordError}
                        hasError = {hasError && confirmPasswordIsTouched}
                        errorText={confirmPasswordMessage}
                        width ='545px'
                        image ={confirmPasswordShow ? EyeImage : ClosedEye}
                        onClick={confirmPasswordShowHandler}
                        input={{
                            value: confirmPasswordValue,
                            placeholder: "Confirm the password",
                            type: confirmPasswordShow ? "text" : "password",
                            onChange: confirmPasswordChangeHandler,
                            onBlur: confirmPasswordBlurHandler,
                            onKeyPress:handleKeyPress
                        }}
                    />
                    <Button disabled={!formIsValid} width="545px" type={"submit"}>Sign In</Button>
                </form>
            </div>
        </div>

    )
}


export default ChangePassword;