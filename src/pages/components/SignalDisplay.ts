import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import { CircularProgress, Box, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useTradingPair } from './TradingPairContext';

function SignalDisplay() {
  const { setSelectedPair } = useTradingPair();
  const [signals, setSignals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSignals = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/signals');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const newSignals = await response.json();

setSignals(prevSignals => {
  return newSignals.map(signal => {
    const details = JSON.parse(signal._value);
    
    let priceChange = null;
    if (details.alertType === 'sell') {
      const lastBuySignal = prevSignals
        .filter(prev => prev.details.strat === details.strat && prev.details.alertType === 'buy' && new Date(prev._time) < new Date(signal._time))
        .sort((a, b) => new Date(b._time) - new Date(a._time))[0];
      
      if (lastBuySignal) {
        const lastPrice = parseFloat(lastBuySignal.details.price);
        const currentPrice = parseFloat(details.price);
        priceChange = ((currentPrice - lastPrice) / lastPrice) * 100;
      }
    }

    return {
      ...signal,
      details: {
        ...details,
        priceChange: priceChange !== null ? priceChange.toFixed(2) : (details.alertType === 'buy' ? '0.00' : null),
      },
      isNew: !prevSignals.some(prevSignal => prevSignal._time === signal._time),
    };
  });
});


    setIsLoading(false);
  } catch (error) {
    setError(error);
    setIsLoading(false);
  }
}, []);

  useEffect(() => {
    fetchSignals();
    const interval = setInterval(fetchSignals, 5000);
    return () => clearInterval(interval);
  }, [fetchSignals]);

  const handlePairClick = (signal) => {
    const [base, quote] = signal.details.pair.split('-');
    const formattedPair = `${quote}${base}`;  // Keeping the original order
    setSelectedPair(`${signal.details.exchange}:${formattedPair}`);
  };

  if (error) return <p>Error fetching signals: {error.message}</p>;

return (
  <Box className="signal-display">
    <table style={{width: '100%', borderCollapse: 'collapse'}}> 
      <thead>
        <tr>
          <th>Time</th>
          <th>Strategy</th>
          <th>Pair</th>
          <th>Side</th>
          <th>Price</th>
          <th>% Change</th>
          <th>Exchange</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {isLoading ? (
          <tr>
            <td colSpan={8} align="center"><CircularProgress /></td> 
          </tr>
        ) : (
          signals.map((signal, index) => (
            <tr key={index} style={{
              animation: signal.isNew ? 'flash 1s 3' : 'none',
              '@keyframes flash': {
                '0%': { backgroundColor: 'transparent' },
                '50%': { backgroundColor: '#e0e0e0' },
                '100%': { backgroundColor: 'transparent' },
              },
            }}>
              <td>{moment(signal._time).format('DD/MM/YY HH:mm:ss')}</td>
              <td>{`${signal.details.strat} (${signal.details.timescale})`}</td>
              <td
                style={{
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: '#f5f5f5',
                  },
                }}
                onClick={() => handlePairClick(signal)}
              >
                {signal.details.pair}
              </td>
              <td style={{
                color: signal.details.alertType.includes('long') ? 'green' : 'red',
              }}>
                {signal.details.alertType.includes('long') ? 'Buy' : 'Sell'}
              </td>
              <td>{signal.details.price}</td>
              <td style={{
                color: signal.details.priceChange && signal.details.alertType === 'sell' ? (parseFloat(signal.details.priceChange) >= 0 ? 'green' : 'red') : 'inherit',
              }}>
                {signal.details.alertType === 'sell' && signal.details.priceChange !== null ? `${signal.details.priceChange}%` : (signal.details.alertType === 'buy' ? '0%' : 'N/A')}
              </td>
              <td>{signal.details.exchange}</td>
              <td>{signal.details.amount}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </Box>
);


}

export default SignalDisplay;
