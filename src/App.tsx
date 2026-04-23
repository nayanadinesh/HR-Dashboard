import {
  Bell,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileCheck2,
  Search,
  Sparkles,
  UsersRound,
} from 'lucide-react'
import './App.css'
import { useWorkflowStore } from './store/workflowStore'

const stats = [
  {
    label: 'Active employees',
    value: '1,284',
    trend: '+8.2%',
    icon: UsersRound,
  },
  {
    label: 'Open roles',
    value: '42',
    trend: '12 urgent',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Interviews today',
    value: '18',
    trend: '+5 vs yesterday',
    icon: CalendarDays,
  },
  {
    label: 'Approvals pending',
    value: '7',
    trend: '3 high priority',
    icon: FileCheck2,
  },
]

const activities = [
  {
    title: 'Offer letter approved',
    detail: 'Senior Product Designer, Design Systems',
    time: '10 min ago',
    status: 'Done',
  },
  {
    title: 'Onboarding workflow triggered',
    detail: 'New hire: Aarav Mehta, People Operations',
    time: '28 min ago',
    status: 'Running',
  },
  {
    title: 'Leave request awaiting review',
    detail: 'Team Lead approval needed before payroll sync',
    time: '1 hr ago',
    status: 'Pending',
  },
]

const hires = [
  { name: 'Nina Patel', role: 'Frontend Engineer', stage: 'Final interview' },
  { name: 'Maya Johnson', role: 'People Partner', stage: 'Offer review' },
  { name: 'Omar Khan', role: 'Data Analyst', stage: 'Technical screen' },
]

function App() {
  const { nodes, edges } = useWorkflowStore()
  const workflowSteps = nodes.length
  const workflowConnections = edges.length

  return (
    <main className="dashboard-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="brand-mark">
          <span>HR</span>
        </div>
        <nav>
          <a className="active" href="#overview">
            Overview
          </a>
          <a href="#hiring">Hiring</a>
          <a href="#workflows">Workflows</a>
          <a href="#payroll">Payroll</a>
        </nav>
      </aside>

      <section className="workspace" id="overview">
        <header className="topbar">
          <div>
            <p className="eyebrow">People Operations</p>
            <h1>HR Command Center</h1>
          </div>
          <div className="topbar-actions">
            <label className="search-box">
              <Search size={18} aria-hidden="true" />
              <span className="sr-only">Search people, roles, and workflows</span>
              <input placeholder="Search people, roles, workflows" />
            </label>
            <button className="icon-button" type="button" aria-label="Notifications">
              <Bell size={19} />
            </button>
          </div>
        </header>

        <section className="hero-card">
          <div>
            <p className="eyebrow">Today&apos;s focus</p>
            <h2>Keep every hire, approval, and employee moment moving.</h2>
            <p>
              A focused operating view for HR teams to track hiring velocity,
              workflow health, and employee actions from one place.
            </p>
          </div>
          <div className="hero-metric">
            <Sparkles size={24} aria-hidden="true" />
            <strong>94%</strong>
            <span>Tasks on track</span>
          </div>
        </section>

        <section className="stats-grid" aria-label="HR metrics">
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <article className="stat-card" key={stat.label}>
                <div className="stat-icon">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <p>{stat.label}</p>
                <strong>{stat.value}</strong>
                <span>{stat.trend}</span>
              </article>
            )
          })}
        </section>

        <section className="content-grid">
          <article className="panel" id="workflows">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Automation</p>
                <h2>Workflow health</h2>
              </div>
              <CheckCircle2 size={22} aria-hidden="true" />
            </div>
            <div className="workflow-summary">
              <div>
                <strong>{workflowSteps}</strong>
                <span>Configured steps</span>
              </div>
              <div>
                <strong>{workflowConnections}</strong>
                <span>Connections</span>
              </div>
            </div>
            <p className="muted">
              No workflow nodes are loaded yet. The dashboard is connected to
              the Zustand workflow store and will reflect nodes once the builder
              populates it.
            </p>
          </article>

          <article className="panel" id="hiring">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Hiring pipeline</p>
                <h2>Priority candidates</h2>
              </div>
              <Clock3 size={22} aria-hidden="true" />
            </div>
            <div className="candidate-list">
              {hires.map((hire) => (
                <div className="candidate" key={hire.name}>
                  <div>
                    <strong>{hire.name}</strong>
                    <span>{hire.role}</span>
                  </div>
                  <small>{hire.stage}</small>
                </div>
              ))}
            </div>
          </article>

          <article className="panel activity-panel">
            <div className="panel-heading">
              <div>
                <p className="eyebrow">Live activity</p>
                <h2>Recent movement</h2>
              </div>
            </div>
            <div className="activity-list">
              {activities.map((activity) => (
                <div className="activity-item" key={activity.title}>
                  <div>
                    <strong>{activity.title}</strong>
                    <span>{activity.detail}</span>
                  </div>
                  <small>
                    {activity.status} · {activity.time}
                  </small>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  )
}

export default App
