import React, { useState, useEffect } from 'react';
import DefaultTopBar from './topbars/DefaultTopBar';

function BotsComponent() {
  const style = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    color: 'white',
    background: 'linear-gradient(to right, #83a4d4, #b6fbff)',
    opacity: 0.6,
  };

  return (
    <div className = "flex-item">
      <DefaultTopBar  />
    <div style={style}>
      <h1>Strategy Engine</h1>
    </div>
    </div>
  );
}

export default BotsComponent;