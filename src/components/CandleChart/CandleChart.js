import React from 'react';
import '../../style.css';
import classes from './CandleChart.module.css';
import TradeViewChart from 'react-crypto-chart';




function CandleChart(){

    return (
        <div className="parent">
                    <h3>BTC/USDT</h3>
                    <TradeViewChart
                        containerStyle={{
                            minHeight: '1000px',
                            minWidth: '400px',
                            marginBottom: '30px',
                        }}
                        pair="BTCUSDT"
                    />
            </div>
    );
}

export default CandleChart;