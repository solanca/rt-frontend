import React, { useContext, useState, useRef, useCallback } from 'react';
import { ReactFlow, addEdge, useNodesState, useEdgesState, OnConnect, MiniMap, Background, useReactFlow} from '@xyflow/react';
import "@xyflow/react/dist/style.css";
import { DarkModeContext } from './components/DarkModeContext'; // Adjust the path to your DarkModeContext
import { nodes as initialNodes, edges as initialEdges } from './flow/turbo-elements';
import './flow/index.css';
import TurboNode, { TurboNodeData } from './flow/TurboNode';
import TurboEdge from './flow/TurboEdge';
import FunctionIcon from './flow/FunctionIcon';
import { FiCloud, FiFile } from 'react-icons/fi';
import SignalsTopBar from './topbars/SignalsTopBar';
import {AppBar }from '@mui/material';


const FlowComponent = () => {
  const { darkMode } = useContext(DarkModeContext);
  const reactFlowInstance = useReactFlow();

const nodeTypes = {
  turbo: TurboNode,
};

const edgeTypes = {
  turbo: TurboEdge,
};

const defaultEdgeOptions = {
  type: 'turbo',
  // markerEnd: 'edge-circle',
};

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [background, setBackground] = useState('lines');  // Default background

  const handleBackgroundChange = (newBackground) => {
    setBackground(newBackground);
  };

  const onConnect: OnConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

const onDrop = useCallback((event) => {
  event.preventDefault();

  if (!reactFlowInstance) {
    return;
  }

  const type = event.dataTransfer.getData('application/reactflow');
  if (!type) {
    return;
  }

  const position = reactFlowInstance.screenToFlowPosition({
    x: event.clientX,
    y: event.clientY,
  });

const newNode = {
  id: `${type}_${new Date().getTime()}`,
  type: 'turbo',  // Use your custom node type here
  position,
  data: { label: `${type} node` },
};

  setNodes((nds) => nds.concat(newNode));
}, [reactFlowInstance, setNodes]);

  const colorMode = darkMode ? 'dark' : 'light';




return (

<>
<AppBar position="static"> 
<div className="TopBarPanel">
<SignalsTopBar onBackgroundChange={handleBackgroundChange} />
    </div>
  
    </AppBar>

    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      onDrop={onDrop}
      onDragOver={(event) => event.preventDefault()}      
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      defaultEdgeOptions={defaultEdgeOptions}
      colorMode={colorMode}
      fitView
      
    >
     
      <svg>
        <defs>
          <linearGradient id="edge-gradient">
            <stop offset="0%" stopColor="#ae53ba" />
            <stop offset="100%" stopColor="#2a8af6" />
          </linearGradient>

          <marker
            id="edge-circle"
            viewBox="-5 -5 10 10"
            refX="0"
            refY="0"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto"
          >
            <circle stroke="#2a8af6" strokeOpacity="0.75" r="2" cx="0" cy="0" />
          </marker>
        </defs>
      </svg>
      <MiniMap />
      <Background variant={background} />
    </ReactFlow>
    </>
  );
};

export default FlowComponent;
