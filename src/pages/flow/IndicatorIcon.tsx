import React from 'react';



const IndicatorIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
  <defs>
    <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="rgb(0, 0, 255)" stopOpacity="1" />
      <stop offset="100%" stopColor="rgb(0, 191, 255)" stopOpacity="1" />
    </linearGradient>
    <linearGradient id="gradRed" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="rgb(255, 0, 0)" stopOpacity="1" />
      <stop offset="100%" stopColor="rgb(255, 99, 71)" stopOpacity="1" />
    </linearGradient>
  </defs>
  <path d="M0,12 C2,15 4,18 8,12 C12,6 16,12 20,18 C22,21 24,24 24,12" style={{ fill: 'none', stroke: 'url(#gradBlue)', strokeWidth: 2 }} />
  <path d="M0,12 C2,9 4,6 8,12 C12,18 16,12 20,6 C22,3 24,0 24,12" style={{ fill: 'none', stroke: 'url(#gradRed)', strokeWidth: 2 }} />
</svg>




);

export default IndicatorIcon;

