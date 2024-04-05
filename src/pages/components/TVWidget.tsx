import React from 'react';
import { DarkModeContext } from './DarkModeContext'; // Import the DarkModeContext

export default class Tabsshow extends React.PureComponent {
    private _ref: React.RefObject<any>;
    constructor(props: {}) {
        super(props);
        this._ref = React.createRef();
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js"; // Correct script URL
        script.async = true;

        // Retrieve dark mode context value
        const darkModeContext:any = this.context;

        const widgetConfig = {
           "autosize": true,
           "symbol": "BITSTAMP:BTCUSD",
           "interval": "D",
           "timezone": "Etc/UTC",
           "theme": darkModeContext.darkMode ? "dark" : "light", // Dynamically set theme based on dark mode context
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
            <DarkModeContext.Consumer>
                {_darkModeContext => (
                    <div className="tradingview-widget-container" ref={this._ref}>
                        <div className="tradingview-widget-container__widget"></div>
                        <div className="tradingview-widget-copyright">
                            {/* ... Your copyright content ... */}
                        </div>
                    </div>
              )} 
            </DarkModeContext.Consumer>
        );
    }
}

// Use context to access dark mode state
Tabsshow.contextType = DarkModeContext;
