import React, { useState, useEffect } from 'react';

const WebsocketSettings = () => {
  const [status, setStatus] = useState('disconnected');
  const [log, setLog] = useState([]);
  const [inputText, setInputText] = useState('');
  const [socket, setSocket] = useState(null);

  const connect = () => {
    disconnect(); // Ensure we're not connected already

    // const proto = window.location.protocol.startsWith('https') ? 'wss' : 'ws';
    const wsUri = import.meta.env.VITE_WS_SERVER_URL;
    const newSocket = new WebSocket(wsUri);

    newSocket.onopen = () => {
      logMessage('Connected');
      updateConnectionStatus(true);
    };

    newSocket.onmessage = (ev) => {
      logMessage('Received: ' + ev.data, 'message');
    };

    newSocket.onclose = () => {
      logMessage('Disconnected');
      updateConnectionStatus(false);
    };

    setSocket(newSocket);
  };

  const disconnect = () => {
    if (socket) {
      logMessage('Disconnecting...');
      socket.close();
      setSocket(null);
      updateConnectionStatus(false);
    }
  };

  const updateConnectionStatus = (connected) => {
    setStatus(connected ? 'connected' : 'disconnected');
  };

  const logMessage = (msg, type = 'status') => {
    setLog((prevLog) => [...prevLog, { msg, type }]);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (socket) {
      logMessage('Sending: ' + inputText);
      socket.send(inputText);
      setInputText('');
    }
  };

  const toggleConnect = () => {
    if (socket) {
      disconnect();
    } else {
      connect();
    }
  };

  // Update connection status on component mount
  useEffect(() => {
    updateConnectionStatus(socket !== null);
  }, [socket]);

  return (
    <div>
  
      <div>
        <button onClick={toggleConnect}>{socket ? 'Disconnect' : 'Connect'}</button>
        <span>Status:</span>
        <span style={{ padding: '0 0.2em', backgroundColor: status === 'connected' ? 'transparent' : 'red', color: status === 'connected' ? 'green' : 'white' }}>
          {status}
        </span>
      </div>
      <div id="log" style={{ width: '30em', height: '20em', overflow: 'auto', margin: '0.5em 0', border: '1px solid black' }}>
        {log.map((entry, index) => (
          <p key={index} className={`msg msg--${entry.type}`} style={{ margin: '0', padding: '0.25em 0.5em', backgroundColor: entry.type === 'message' ? '#d2f4ff' : entry.type === 'error' ? 'pink' : '#ffffc9' }}>
            {entry.msg}
          </p>
        ))}
      </div>
      <form onSubmit={handleSend}>
        <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} style={{ width: '17em', padding: '0.5em' }} />
        <input type="submit" value="Send" />
      </form>
      <hr />
      <section>
        <h2>Usage</h2>
        <p>After connecting, type into the text box and the rust server will echo your message.</p>
      </section>
    </div>
  );
};

export default WebsocketSettings;
