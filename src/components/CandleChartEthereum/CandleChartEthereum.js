import React from 'react';
import '../../style.css';
import TradeViewChart from 'react-crypto-chart';




function CandleChartEthereum() {

    return (
        <div className="parent">
            <h3>ETH/USDT</h3>
            <TradeViewChart
                containerStyle={{
                    minHeight: '1000px',
                    minWidth: '400px',
                    marginBottom: '30px',
                }}
                pair="ETHUSDT"
            />
        </div>
    )
}

    export default CandleChartEthereum;