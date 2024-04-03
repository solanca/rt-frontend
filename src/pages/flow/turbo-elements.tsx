import React from 'react';
import { MarkerType, Position } from '@xyflow/react';
import TurboNode, { TurboNodeData } from './TurboNode';
import TurboEdge from './TurboEdge';
import FunctionIcon from './FunctionIcon';
import IndicatorIcon from './IndicatorIcon';
import { FiCloud, FiFile } from 'react-icons/fi';

export const nodeDefaults = {
  sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
};

export const nodes: Node<TurboNodeData>[] = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { icon: <FunctionIcon />, title: 'readFile', subline: 'api.ts' },
    type: 'turbo',
  },
  {
    id: '2',
    position: { x: 250, y: 0 },
    data: { icon: <FunctionIcon />, title: 'bundle', subline: 'apiContents' },
    type: 'turbo',
  },
  {
    id: '3',
    position: { x: 0, y: 250 },
    data: { icon: <FunctionIcon />, title: 'readFile', subline: 'sdk.ts' },
    type: 'turbo',
  },
  {
    id: '4',
    position: { x: 250, y: 250 },
    data: { icon: <FunctionIcon />, title: 'bundle', subline: 'sdkContents' },
    type: 'turbo',
  },
  {
     id: '5',
  position: { x: 500, y: 125 },
  data: { icon: <IndicatorIcon /> ,title: 'RSI', subline: '7 Day',markerEnd: 'none'},
  type: 'turbo',
    sourcePosition: Position.Bottom,
  targetPosition: Position.Top,
},
  {
    id: '6',
    position: { x: 750, y: 125 },
    data: { icon: <FiFile />, title: 'fullBundle' },
    type: 'turbo',
  },
   {
    id: '7',
    type: 'turbo',
    className: 'annotation',
     data: { icon: <FunctionIcon />, title: '</strong>', subline: 'This is also just a node 🥳'},
    draggable: false,
    selectable: false,
    position: { x: 150, y: 400 },
  },
];

export const edges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2', animated: true
  },
  {
    id: 'e3-4',
    source: '3',
    target: '4',
  },
  {
    id: 'e2-5',
    source: '2',
    target: '5',
  },
  {
    id: 'e4-5',
    source: '4',
    target: '5',
  },
  {
    id: 'e5-6',
    source: '5',
    target: '6',
  },
];


