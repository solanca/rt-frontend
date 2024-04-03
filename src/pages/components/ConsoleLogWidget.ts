import React, { useState, useEffect } from 'react';

const ConsoleLogWidget = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const originalConsoleLog = console.log;

    console.log = (...args) => {
      setLogs((prevLogs) => [...prevLogs, { type: 'log', message: args.join(' ') }]);
      originalConsoleLog(...args);
    };

    // Do the same for console.error, console.warn, etc. if needed

    return () => {
      console.log = originalConsoleLog; // Restore original console.log on cleanup
    };
  }, []);

  return (
<div className="console-log-widget">
  {logs.map((log, index) => (
    <pre key={index}>{log.message}</pre>
  ))}
</div>
  );
};

export default ConsoleLogWidget;
