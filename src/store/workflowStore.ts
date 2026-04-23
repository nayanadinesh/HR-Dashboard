import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import type { WorkflowState, WorkflowNode, WorkflowEdge } from '../types/workflow';

export interface WorkflowStore extends WorkflowState {
  addNode: (node: WorkflowNode) => void;
  updateNode: (node: WorkflowNode) => void;
  removeNode: (nodeId: string) => void;
  addEdge: (edge: WorkflowEdge) => void;
  removeEdge: (edgeId: string) => void;
  setState: (state: Partial<WorkflowState>) => void;
}

export const useWorkflowStore = create<WorkflowStore>()(
  devtools((set, get) => ({
    nodes: [],
    edges: [],
    addNode: (node) => set({ nodes: [...get().nodes, node] }),
    updateNode: (node) =>
      set({
        nodes: get().nodes.map((n) => (n.id === node.id ? node : n)),
      }),
    removeNode: (nodeId) =>
      set({
        nodes: get().nodes.filter((n) => n.id !== nodeId),
        edges: get().edges.filter((e) => e.source !== nodeId && e.target !== nodeId),
      }),
    addEdge: (edge) => set({ edges: [...get().edges, edge] }),
    removeEdge: (edgeId) =>
      set({ edges: get().edges.filter((e) => e.id !== edgeId) }),
    setState: (partial) => set(partial),
  }))
);
