
# 🧩 HR Workflow Designer

A visual workflow builder that allows HR teams to design, configure, and simulate internal processes such as onboarding, approvals, and automation tasks.

Built as part of a Full Stack Engineering Case Study, this project demonstrates strong frontend architecture, dynamic form handling, and workflow execution logic using modern React tools.

Web Link: https: https://hr-dashboard-navy.vercel.app/

---

## 🚀 Features

### Workflow Canvas
- Drag-and-drop interface using React Flow
- Create and connect nodes visually
- Delete, edit, and manage nodes and edges

### Custom Node Types
- Start Node – Entry point
- Task Node – Human tasks
- Approval Node – Role-based approvals
- Automated Node – System actions
- End Node – Completion

### Node Configuration Panel
- Dynamic forms using React Hook Form
- Supports key-value fields and dynamic inputs

### Workflow Engine
- Graph-based state using Zustand
- Real-time updates

### Mock API Layer
- GET /automations
- POST /simulate

### Workflow Simulation
- JSON serialization
- Step-by-step execution logs
- Status and validation feedback

---

## 🏗️ Architecture

UI → State → Logic → API

---

## 📁 Folder Structure

src/
components/
hooks/
api/
mocks/
types/
utils/

---

## 🛠️ Tech Stack

- React + Vite
- TypeScript
- React Flow
- Tailwind CSS
- Zustand
- React Hook Form
- MSW

---

## ▶️ Run

npm install  
npm run dev  

---

## ⚡ Completed

- Canvas
- Nodes
- Forms
- Simulation
- Validation

---

## 🔮 Future Improvements

- Undo/Redo
- Export/Import
- Auto layout

---

## 👩‍💻 Author

Nayana Dinesh
