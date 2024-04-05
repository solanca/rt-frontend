import React, { LegacyRef } from 'react';

export default  class Tabsshow extends React.PureComponent {
    _ref: LegacyRef<HTMLDivElement>;
    constructor(props) {
        super(props);
        this._ref = React.createRef() as LegacyRef<HTMLDivElement>;
    }

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js'
        script.async = true;

        // JSON Configuration (Stringify and Replace)
        const widgetConfig = {
          "colorTheme": "light",
          "isTransparent": false,
          "width": "100%",
          "height": "100%",
          "locale": "en",
          "importanceFilter": "-1,0,1",
          "countryFilter": "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu"
        };
        script.innerHTML = JSON.stringify(widgetConfig);
        //@ts-ignore
        this._ref.current.appendChild(script);
    }

    render() {
        return(
            <div className="tradingview-widget-container" ref={this._ref}>
                <div className="tradingview-widget-container__widget"></div>
                <div className="tradingview-widget-copyright">
                 
                </div>
            </div>
        );
    }
}
