import React, {useState} from 'react';
import classes from './SelectInputs.module.css';
import CandleChartEthereum from "../CandleChartEthereum/CandleChartEthereum";
import CandleChart from "../CandleChart/CandleChart";
import TermButtons from "../TermButtons/TermButtons";


function SelectInputs(){

    const [values, setValues] = useState({
        timeView:'',
        chartType: 'bars',
        cryptoType: 'bitcoin',
    });

    const handleChange = ({target: {name, value}}) => {
        setValues({
            ...values,
            [name]: value,
        });
    }

    return(
        <>
            <div className={classes.wholeDiv}>
                <div className="container">
                    <div className={classes.inputs}>
                        <div className={classes.labelDiv}>
                            <label htmlFor="chartType" className={classes.labelStyle}>Chart Type</label>
                            <select className={classes.selectStyle} name={"chartType"} id="chartType"
                                   value={values.chartType} onChange={handleChange}>
                                <option value="lines">Lines</option>
                                <option value="bars">Bars</option>
                            </select>
                        </div>
                        <div className={classes.labelDiv}>
                            <label htmlFor="cryptoType" className={classes.labelStyle}>Crypto Type</label>
                            <select className={classes.selectStyle} name="cryptoType" id="cryptoType"
                                    value={values.cryptoType}
                                    onChange={handleChange}>
                                <option value="bitcoin">Bitcoin</option>
                                <option value="ethereum">Ethereum</option>
                            </select>
                        </div>
                        <div className={classes.setParam}>Set Parameters</div>
                        <div className={classes.clearAll}>Clear All</div>
                    </div>
                </div>
            </div>
                <div className="container">
                    <div style={{display:"flex"}}>
                        {values.cryptoType ==="ethereum"?
                            <CandleChartEthereum/> :<CandleChart/>}
                        <TermButtons/>
                </div>
            </div>
        </>
    )
}

export default SelectInputs;