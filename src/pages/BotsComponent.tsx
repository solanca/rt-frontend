import React, { useState, useEffect } from 'react';
import { Treebeard } from 'react-treebeard';

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
    <div style={style}>
      <h1>Strategy Engine</h1>
    </div>
  );
}

export default BotsComponent;