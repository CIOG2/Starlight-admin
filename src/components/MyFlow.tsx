import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'react-flow-renderer';

import type {
  Connection,
  Edge,
  Node,
} from 'react-flow-renderer';

export interface FlowProps {
  /** Lista inicial de nodos */
  initialNodes: Node[];
  /** Lista inicial de conexiones */
  initialEdges: Edge[];
  /** Estilos opcionales del contenedor */
  style?: React.CSSProperties;
}

export const FlowComponent: React.FC<FlowProps> = ({
  initialNodes,
  initialEdges,
  style,
}) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, [setEdges]);

  return (
    <div style={{ width: '100%', height: 500, ...style }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={handleConnect}
        fitView
        nodesDraggable={false}
      >
        {/* <MiniMap /> */}
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};
