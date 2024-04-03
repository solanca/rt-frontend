import React from 'react';

export default class WatchlistComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }

  componentDidMount() {
    const script = document.createElement('script');
  script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
  script.async = true;

  const widgetConfig = {
    "width": "100%",
    "height": "100%",
    "defaultColumn": "overview",
    "screener_type": "crypto_mkt",
    "displayCurrency": "USD",
    "colorTheme": "light",
    "locale": "en"
  };

  script.innerHTML = JSON.stringify(widgetConfig); 
  this._ref.current.appendChild(script); 
  } 

  render() { // Remove extra closing brace
    return (
      <div className="tradingview-widget-container" ref={this._ref}>
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright">
          {/* ... Your copyright content ... */}
        </div>
      </div>
    ); 
  }
}