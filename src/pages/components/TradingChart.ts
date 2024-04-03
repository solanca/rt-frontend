import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

function TradingChart({ signals }) {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (Array.isArray(signals) && signals.length > 0) {
      const data = {
        labels: signals.map(signal => moment(signal._time).format('DD/MM/YY HH:mm:ss')),
        datasets: [
          {
            label: 'Trading Signals',
            data: signals.map(signal => {
              const value = JSON.parse(signal._value || '{}');
              return {
                x: signal._time,
                y: value.price || 0, // Default to 0 if price is not available
              };
            }),
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      };

      setChartData(data);
    }
  }, [signals]);

  return (
    <div>
      <h3>Trading Chart</h3>
      <Line data={chartData} options={{ scales: { x: { type: 'time', time: { parser: 'DD/MM/YY HH:mm:ss' } } } }} />
    </div>
  );
}

export default TradingChart;
