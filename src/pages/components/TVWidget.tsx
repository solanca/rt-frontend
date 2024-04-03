import React from 'react';
import { useTradingPair } from './TradingPairContext';


export default  class Tabsshow extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"; // Correct script URL
        script.async = true;

        const widgetConfig = {
           "autosize": true,
           "symbol": "BITSTAMP:BTCUSD",
           "interval": "D",
           "timezone": "Etc/UTC",
           "theme": "light",
           "style": "1",
           "locale": "en",
           "enable_publishing": false,
           "withdateranges": true,
           "hide_side_toolbar": false,
           "allow_symbol_change": true,
           "calendar": false,
           "studies": [
            "STD;Average_True_Range",
            "STD;Bollinger_Bands",
            "STD;Connors_RSI",
            "STD;DEMA",
            "STD;Ichimoku%1Cloud",
            "STD;MA%1Cross",
            "STD;Momentum",
            "STD;EMA",
            "STD;WMA",
            "STD;PSAR",
            "PriceVolumeTrend@tv-basicstudies",
            "STD;RSI",
            "STD;Divergence%1Indicator",
            "STD;Stochastic",
            "STD;Stochastic_RSI",
            "Volume@tv-basicstudies",
            "STD;VWMA",

          ],
          "support_host": "https://www.tradingview.com"
        };

        script.innerHTML = JSON.stringify(widgetConfig);
        this._ref.current.appendChild(script);
    }

    render() {
        return (
            <div className="tradingview-widget-container" ref={this._ref} style={{ height: '100%', width: '100%' }}>
                <div className="tradingview-widget-container__widget" style={{ height: 'calc(100% - 32px)', width: '100%' }}>
                </div>
                <div className="tradingview-widget-copyright">
                    {/* ... Your copyright content ... */}
                </div>
            </div>
        );
    }
}
