import React from 'react';
import Image2 from '../../assets/images/Image2.png'
import classes from './Header.module.css';



function Header(){
    return(
        <div className={classes.headerWhole}>
            <div className="container">
                <div className={classes.header}>
                    <div className={classes.headerLeft}>
                        <div className={classes.logo}>
                            <img src={Image2} alt=""/>
                        </div>
                        <div className={classes.notify}><div className={classes.notifyDiv}>NOTIFY ME when trend changes</div>
                            <label className={classes.switchLabel}>
                                <input type="checkbox"/>
                                    <span className={classes.sliderRound}/>
                            </label>
                        </div>
                    </div>
                    <div className={classes.headerRight}>
                        <div className={classes.headerName}>Hi, Name Surname</div>
                        <div className={classes.logOut}>Sign Out</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;