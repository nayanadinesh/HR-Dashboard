export type NodeType = 'start' | 'task' | 'approval' | 'automated' | 'end';

export interface WorkflowNode {
  id: string;
  type: NodeType;
  data: {
    label: string;
    // Additional node‑specific configuration fields can be added later
    [key: string]: any;
  };
  position: { x: number; y: number };
}

export interface WorkflowEdge {
  id: string;
  source: string;
  target: string;
  // Optional label for edge conditions (e.g., yes/no)
  label?: string;
}

export interface WorkflowState {
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
}
