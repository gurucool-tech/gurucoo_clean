import { BarChart3, CheckCircle2, CircleAlert, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type SolutionKind = "school" | "college" | "tuition" | "network";

interface SolutionOperationsStageProps {
  kind: SolutionKind;
  eyebrow: string;
  title: string;
  description: string;
  points: string[];
  reverse?: boolean;
}

const dashboardData: Record<SolutionKind, {
  title: string;
  context: string;
  nav: string[];
  metrics: Array<{ label: string; value: string; tone?: "lime" | "amber" }>;
  rows: Array<{ label: string; detail: string; value: string }>;
}> = {
  school: {
    title: "School Operations",
    context: "Today · Main campus",
    nav: ["Overview", "Attendance", "Communication"],
    metrics: [{ label: "Students present", value: "92%", tone: "lime" }, { label: "Parent updates", value: "184" }, { label: "Open actions", value: "06", tone: "amber" }],
    rows: [{ label: "Grade 10A", detail: "Attendance locked", value: "94%" }, { label: "Grade 10B", detail: "2 records pending", value: "91%" }, { label: "Grade 9A", detail: "Updates prepared", value: "93%" }],
  },
  college: {
    title: "College Coordination",
    context: "Academic operations",
    nav: ["Timetable", "Faculty", "Assessments"],
    metrics: [{ label: "Classes scheduled", value: "128", tone: "lime" }, { label: "Faculty assigned", value: "46" }, { label: "Conflicts", value: "03", tone: "amber" }],
    rows: [{ label: "Physics", detail: "Lab allocation complete", value: "12" }, { label: "Commerce", detail: "Faculty review", value: "18" }, { label: "Computer Science", detail: "Schedule published", value: "24" }],
  },
  tuition: {
    title: "Branch & Batch View",
    context: "Evening batches",
    nav: ["Batches", "Attendance", "Fees"],
    metrics: [{ label: "Active batches", value: "22", tone: "lime" }, { label: "Attendance", value: "92%" }, { label: "Fee follow-ups", value: "08", tone: "amber" }],
    rows: [{ label: "JEE Advanced", detail: "Parent update prepared", value: "96%" }, { label: "NEET Foundation", detail: "Attendance synced", value: "90%" }, { label: "Board 10", detail: "1 follow-up", value: "91%" }],
  },
  network: {
    title: "Multi-Campus Command",
    context: "Group visibility",
    nav: ["Network", "Campuses", "Exceptions"],
    metrics: [{ label: "Campuses active", value: "12", tone: "lime" }, { label: "Network attendance", value: "94%" }, { label: "Exceptions", value: "05", tone: "amber" }],
    rows: [{ label: "Mumbai Central", detail: "All workflows connected", value: "96%" }, { label: "Pune East", detail: "Fee review required", value: "93%" }, { label: "Thane North", detail: "Records synchronized", value: "95%" }],
  },
};

function CompactDashboard({ kind }: { kind: SolutionKind }) {
  const data = dashboardData[kind];

  return (
    <div className={cn("solution-dashboard", `solution-dashboard--${kind}`)}>
      <header className="solution-dashboard__header">
        <div><span className="solution-dashboard__mark">G</span><div><strong>{data.title}</strong><small>{data.context}</small></div></div>
        <span className="solution-dashboard__status"><i />Systems connected</span>
      </header>
      <div className="solution-dashboard__body">
        <aside>{data.nav.map((item, index) => <span key={item} className={index === 0 ? "is-active" : ""}>{item}</span>)}</aside>
        <main>
          <div className="solution-dashboard__metrics">
            {data.metrics.map((metric) => <div key={metric.label} className={cn(metric.tone && `is-${metric.tone}`)}><span>{metric.label}</span><strong>{metric.value}</strong></div>)}
          </div>
          <div className="solution-dashboard__content">
            <div className="solution-dashboard__activity">
              <div className="solution-dashboard__section-title"><div><BarChart3 aria-hidden="true" />Operational view</div><span>Live</span></div>
              <div className="solution-dashboard__bars" aria-hidden="true">{[46, 68, 58, 82, 73, 91, 79].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
            </div>
            <div className="solution-dashboard__records">
              <div className="solution-dashboard__section-title"><div><Users aria-hidden="true" />Current records</div></div>
              {data.rows.map((row, index) => <div className="solution-dashboard__row" key={row.label}><span className="solution-dashboard__row-state">{index === 1 ? <CircleAlert aria-hidden="true" /> : <CheckCircle2 aria-hidden="true" />}</span><div><strong>{row.label}</strong><small>{row.detail}</small></div><b>{row.value}</b></div>)}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export function SolutionOperationsStage({ kind, eyebrow, title, description, points, reverse = false }: SolutionOperationsStageProps) {
  return (
    <section className={cn("solution-operations", `solution-operations--${kind}`)}>
      <div className="site-canvas">
        <div className={cn("solution-operations__layout", reverse && "is-reversed")}>
          <div className="solution-operations__copy">
            <span>{eyebrow}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="solution-operations__points">{points.map((point) => <div key={point}><i /><span>{point}</span></div>)}</div>
          </div>
          <div className="solution-operations__visual"><CompactDashboard kind={kind} /></div>
        </div>
      </div>
    </section>
  );
}
