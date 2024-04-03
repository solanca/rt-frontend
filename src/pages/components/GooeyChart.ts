import { useState, useEffect, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush
} from 'recharts';

function GooeyChart() {
  const [data, setData] = useState([]);
  const strategies = useRef(new Set());
  const strategyMap = useRef({});

  const getColor = (strategy) => {
    let hash = 0;
    for (let i = 0; i < strategy.length; i++) {
      hash = strategy.charCodeAt(i) + ((hash << 5) - hash);
    }
    return `hsl(${hash % 360}, 50%, 50%)`;
  };

  const assignStrategyValues = (strat, alertType) => {
    if (!strategyMap.current[strat]) {
      strategyMap.current[strat] = Object.keys(strategyMap.current).length + 1;
    }
    return strategyMap.current[strat] + (alertType.includes('customlong') ? 0.2 : 0.8);
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/signals');
      const result = await response.json();

      if (result && Array.isArray(result) && result.length > 0) {
        const newDataPoints = result.map(signal => {
          const valueObj = JSON.parse(signal._value);
          strategies.current.add(valueObj.strat);

          return {
            time: new Date(signal._time).toLocaleTimeString(),
            strategyValue: assignStrategyValues(valueObj.strat, valueObj.alertType),
            strat: valueObj.strat,
            alertType: valueObj.alertType
          };
        });
        setData(prevData => [...prevData, ...newDataPoints]);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="time" />
      <YAxis domain={[0, Object.keys(strategyMap.current).length + 1]} tickFormatter={(value) => Object.keys(strategyMap.current).find(key => strategyMap.current[key] === Math.floor(value))} />
      <Tooltip formatter={(value, name, props) => [props.payload.alertType, props.payload.strat]} />
      <Legend />
      <Brush />
      {
        Array.from(strategies.current).map((strategy) => (
          <Line key={strategy}
                type="monotone"
                dataKey="strategyValue"
                stroke={getColor(strategy)}
                name={strategy}
                dot={{ stroke: 'blue', strokeWidth: 2, fill: (data) => data.alertType.includes('customlong') ? 'green' : 'red' }} />
        ))
      }
    </LineChart>
  );
}

export default GooeyChart;
