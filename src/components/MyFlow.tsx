import React, { useCallback } from 'react';
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import type {
  Connection,
  Edge,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';

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
  // Hooks para manejar estado de nodos y aristas
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Callback al conectar dos nodos
  const onConnect = useCallback((connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, [setEdges]);

  return (
    <div style={{ width: '100%', height: 500, ...style }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodesDraggable={false}
      >
        <MiniMap/>
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};
