import React, {useState} from 'react';
import classes from './TermButtons.module.css';



function TermButtons (){

    const [showClicked, setShowClicked] = useState("shortTerm");
    const setData= (data) => {
        setShowClicked (data);
    };


    return(
        <div className={classes.termAll}>
            <div className={`${classes.btnTerm}   ${showClicked === 'shortTerm' && classes.active}`}
                 onClick={() => {setData('shortTerm')}}>Short-term Trend BEARISH</div>
            <div className={`${classes.btnTerm}   ${showClicked === 'midTerm' && classes.active}`}
                 onClick={() => {setData('midTerm')}}>Mid-term Trend BEARISH</div>
            <div className={`${classes.btnTerm}   ${showClicked === 'longTerm' && classes.active}`}
                 onClick={() => {setData('longTerm')}}>Long-term Trend BEARISH</div>
        </div>
    )
}

export default TermButtons;