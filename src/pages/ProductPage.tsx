import { m, useReducedMotion } from "framer-motion";
import { BarChart3, BellRing, CalendarDays, Check, CheckCircle2, ChevronRight, CircleAlert, CreditCard, FileCheck2, Fingerprint, Layers3, MessageCircle, Network, ScanFace, ShieldCheck, Sparkles, Users, Workflow } from "lucide-react";
import { SEO } from "@/components/SEO";
import { getScrollRevealVariants, scrollRevealViewport } from "@/lib/scrollRevealMotion";

const foundation = [
  { icon: Fingerprint, title: "Institutional identity", text: "Students, staff, campuses, classes, and guardians share one structured identity layer." },
  { icon: ShieldCheck, title: "Role-based access", text: "People see the records and actions relevant to their responsibilities." },
  { icon: FileCheck2, title: "Connected institutional records", text: "Attendance, academic, communication, and financial context remain attached to the right record." },
  { icon: Workflow, title: "Configurable workflows", text: "Processes can reflect how each institution assigns, reviews, and completes work." },
];

const queueRows = [
  { task: "Attendance exception", context: "Grade 10A · Rahul Sharma", owner: "Front office", time: "08:21", status: "Review", tone: "amber" },
  { task: "Parent update prepared", context: "Grade 10B · 2 absences", owner: "Class teacher", time: "08:24", status: "Ready", tone: "lime" },
  { task: "Proxy assignment", context: "Physics · Period 3", owner: "Academic office", time: "08:31", status: "Assigned", tone: "blue" },
  { task: "Fee receipt request", context: "STU-2026-0042", owner: "Accounts", time: "09:05", status: "Open", tone: "blue" },
];

const workflowSteps = [
  { icon: ScanFace, label: "Attendance event", detail: "Presence is recorded against the institutional identity." },
  { icon: FileCheck2, label: "Record updated", detail: "The authorized daily record reflects the new state." },
  { icon: MessageCircle, label: "Communication prepared", detail: "A relevant parent update is prepared through the configured channel." },
  { icon: Users, label: "Staff context", detail: "The responsible team can review exceptions and follow-up." },
  { icon: BarChart3, label: "Leadership visibility", detail: "The event contributes to connected reporting." },
];

function ProductQueue() {
  return (
    <div className="product-queue" aria-label="Representative institutional operations queue">
      <div className="product-queue__chrome">
        <div className="product-queue__brand"><span>G</span><div><strong>Institution workspace</strong><small>Representative configuration</small></div></div>
        <div className="product-queue__connected"><i />Systems connected</div>
      </div>
      <div className="product-queue__body">
        <aside aria-label="Workspace navigation"><strong>OPERATIONS</strong><span className="is-active"><Layers3 />Overview</span><span><Users />People</span><span><CalendarDays />Schedule</span><span><CreditCard />Finance</span></aside>
        <div className="product-queue__main">
          <div className="product-queue__title"><div><small>Today · Main campus</small><h2>Operational queue</h2></div><button type="button">All workflows <ChevronRight /></button></div>
          <div className="product-queue__filters"><span className="is-selected">All work <b>12</b></span><span>Assigned to me <b>4</b></span><span>Exceptions <b>3</b></span></div>
          <div className="product-queue__table">
            <div className="product-queue__table-head"><span>Work item</span><span>Owner</span><span>Updated</span><span>State</span></div>
            {queueRows.map((row, index) => <div className={index === 0 ? "product-queue__row is-selected" : "product-queue__row"} key={row.task}><div><strong>{row.task}</strong><small>{row.context}</small></div><span>{row.owner}</span><time>{row.time}</time><b className={`is-${row.tone}`}>{row.status}</b></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="product-section-heading"><span>{eyebrow}</span><h2>{title}</h2><p>{description}</p></div>;
}

function ProductSystemMotif() {
  return (
    <div className="product-system" role="img" aria-label="Connected product system with linked institutional workflows">
      <div className="product-system__heading"><span>Product architecture</span><strong><i />Connected</strong></div>
      <div className="product-system__map" aria-hidden="true">
        <div className="product-system__core"><span>One</span><strong>Institution</strong></div>
        <div className="product-system__rail product-system__rail--identity"><span>Identity</span><i /><b>Structured</b></div>
        <div className="product-system__rail product-system__rail--operations"><span>Operations</span><i /><b>Active</b></div>
        <div className="product-system__rail product-system__rail--records"><span>Records</span><i /><b>Shared</b></div>
        <div className="product-system__rail product-system__rail--review"><span>Exceptions</span><i /><b>Review</b></div>
      </div>
      <div className="product-system__states">
        <div><span>6</span><p><strong>Product layers</strong><small>working in one context</small></p></div>
        <div className="is-review"><span>2</span><p><strong>States need review</strong><small>visible, not hidden</small></p></div>
      </div>
    </div>
  );
}

function ProductProof() {
  return <div className="product-hero__proof" aria-label="Product scope"><span>Identity</span><span>Operations</span><span>Communication</span><span>Finance</span><span>Reporting</span></div>;
}

export default function ProductPage() {
  const reduceMotion = useReducedMotion();
  const motionProps = { initial: reduceMotion ? "visible" : "hidden", whileInView: "visible", viewport: scrollRevealViewport, variants: getScrollRevealVariants(reduceMotion) } as const;

  return (
    <div className="product-page">
      <SEO title="Product Overview | The Operating Layer" description="Explore GuruCool's connected institutional operating layer across identity, operations, communication, finance, assessments, and reporting." canonicalPath="/product" />
      <section className="product-hero">
        <div className="product-grid" aria-hidden="true"><i /></div>
        <div className="site-canvas product-hero__canvas">
          <m.div className="product-hero__copy header-motion-copy"><p className="product-kicker"><span />GuruCool product</p><h1>One connected operating layer for the institution.</h1><p className="product-hero__description">Coordinate identity, daily operations, communication, finance, assessments, and reporting without turning every workflow into another disconnected tool.</p><ProductProof /></m.div>
          <m.div className="product-hero__visual header-motion-visual"><ProductSystemMotif /></m.div>
        </div>
      </section>

      <section className="product-foundation"><div className="site-canvas product-foundation__layout"><SectionHeading eyebrow="Connected foundation" title="Structure before software complexity." description="GuruCool begins with the institutional relationships every workflow depends on: identity, responsibility, access, and shared records." /><m.div className="product-foundation__grid" {...motionProps}>{foundation.map((item, index) => <article className={index === 0 ? "foundation-card is-primary" : "foundation-card"} key={item.title}><div><span>0{index + 1}</span><item.icon aria-hidden="true" /></div><h3>{item.title}</h3><p>{item.text}</p></article>)}</m.div></div></section>

      <section className="product-operations"><div className="site-canvas"><div className="product-operations__intro"><SectionHeading eyebrow="Daily operations" title="Work moves through one coordinated view." description="Attendance, schedules, staff availability, communication, and follow-up become visible as related operational work." /><div className="product-operations__note"><i /><strong>Active institutional state</strong><span>Exceptions remain visible until they are reviewed.</span></div></div><m.div className="operations-workspace" {...motionProps}><div className="operations-workspace__top"><div><strong>Daily operations</strong><small>Today’s operating view</small></div><nav><span className="is-active">Work queue</span><span>Schedule</span><span>Attendance</span></nav><button type="button">Filter <span>3</span></button></div><div className="operations-workspace__content"><div className="operations-calendar"><div className="operations-calendar__head"><span aria-hidden="true" /><span>08:00</span><span>09:00</span><span>10:00</span></div><div className="operations-calendar__lane"><strong>Grade 10A</strong><span className="is-blue">Physics · 08:00</span><span>Mathematics · 09:00</span><span className="is-amber">Proxy required · 10:00</span></div><div className="operations-calendar__lane"><strong>Grade 10B</strong><span>English · 08:00</span><span className="is-blue">Chemistry · 09:00</span><span>Mathematics · 10:00</span></div><div className="operations-calendar__lane"><strong>Grade 9A</strong><span className="is-blue">Mathematics · 08:00</span><span>Physics · 09:00</span><span>English · 10:00</span></div></div><aside className="operations-context"><div className="operations-context__head"><CircleAlert /><div><small>Selected exception</small><strong>Proxy required</strong></div></div><dl><div><dt>Class</dt><dd>Grade 10A</dd></div><div><dt>Period</dt><dd>Physics · 10:00</dd></div><div><dt>Owner</dt><dd>Academic office</dd></div></dl><div className="operations-context__action"><CheckCircle2 /><span><strong>Available staff identified</strong><small>Review before assigning</small></span></div></aside></div></m.div></div></section>

      <section className="product-admin"><div className="site-canvas product-admin__layout"><m.div className="finance-ledger" {...motionProps}><div className="finance-ledger__head"><div><small>Finance & administration</small><strong>Student fee ledger</strong></div><span>STU-2026-0042</span></div><div className="finance-ledger__summary"><div><span>Paid</span><strong>₹45,000</strong></div><div><span>Balance</span><strong>₹5,000</strong></div><div className="is-attention"><span>Next action</span><strong>Review due item</strong></div></div><div className="finance-ledger__rows"><div className="is-head"><span>Particular</span><span>Amount</span><span>Status</span></div><div><span>Term 1 tuition fee</span><strong>₹45,000</strong><b className="is-lime">Paid</b></div><div><span>Laboratory fee</span><strong>₹5,000</strong><b className="is-amber">Due 15 Oct</b></div><div><span>Receipt record</span><strong>REC-1042</strong><b>Available</b></div></div></m.div><div className="product-admin__copy"><span>Administration & finance</span><h2>Operational records stay attached to the people and processes they serve.</h2><p>Fee structures, dues, receipts, documents, and approvals can be handled within the same institutional context instead of separate ledgers and message threads.</p><ul><li><Check />Custom fee structures and digital receipts</li><li><Check />Document and approval context</li><li><Check />Clear ownership for follow-up</li></ul></div></div></section>

      <section className="product-leadership"><div className="site-canvas product-leadership__layout"><SectionHeading eyebrow="Reporting & leadership" title="See the institution as a connected system." description="Leadership can move from an institution-wide view into the records, workflows, and exceptions that require attention." /><m.div className="leadership-view" {...motionProps}><div className="leadership-view__head"><div><BarChart3 /><span><strong>Institution overview</strong><small>Illustrative data</small></span></div><span>Current term</span></div><div className="leadership-view__stats"><div className="is-dark"><span>Attendance</span><strong>93.4%</strong><small>Across active classes</small></div><div><span>Open actions</span><strong>12</strong><small>3 require review</small></div><div><span>Fee follow-up</span><strong>08</strong><small>Assigned to accounts</small></div></div><div className="leadership-view__lower"><div className="leadership-bars"><div><span>Attendance by grade</span><small>Current week</small></div>{[86, 94, 91, 96, 89].map((value, index) => <p key={value}><span>Grade {index + 7}</span><i><b style={{ width: `${value}%` }} /></i><strong>{value}%</strong></p>)}</div><div className="leadership-actions"><span>Items requiring attention</span><div><CircleAlert /><p><strong>3 attendance exceptions</strong><small>Front office · Today</small></p></div><div><BellRing /><p><strong>2 parent updates pending</strong><small>Class teachers · Today</small></p></div><div><CreditCard /><p><strong>Fee review queue</strong><small>Accounts · 8 records</small></p></div></div></div></m.div></div></section>

      <section className="product-intelligence"><div className="site-canvas"><div className="product-intelligence__intro"><SectionHeading eyebrow="Automation & intelligence" title="Clear about what the system is doing." description="GuruCool distinguishes configured rules, deterministic automation, analytics, and model-generated assistance. The label should match the behavior." /></div><m.div className="product-intelligence__grid" {...motionProps}><article><div><Workflow /><span>Configured logic</span></div><h3>Rules</h3><p>Institution-defined conditions govern repeatable workflow behavior.</p><small>Example: permission and review requirements</small></article><article><div><Network /><span>Deterministic action</span></div><h3>Automation</h3><p>Known events can route work or prepare the next configured step.</p><small>Example: assigning an attendance exception</small></article><article className="is-ai"><div><Sparkles /><span>Model-generated</span></div><h3>AI-assisted</h3><p>AI wording is reserved for behavior that genuinely uses a model.</p><small>Always identifiable as assistance, not certainty</small></article></m.div></div></section>

      <section className="product-workflow" id="connected-workflow"><div className="product-grid product-grid--workflow" aria-hidden="true"><i /></div><div className="site-canvas product-workflow__layout"><div className="product-workflow__copy"><span>One connected workflow</span><h2>One event. Shared operational context.</h2><p>An attendance event can remain connected to the authorized record, communication, staff follow-up, and reporting without pretending every downstream decision happens automatically.</p></div><m.ol className="workflow-spine" {...motionProps}>{workflowSteps.map((step, index) => <li key={step.label}><span className="workflow-spine__number">0{index + 1}</span><div className="workflow-spine__icon"><step.icon /></div><div><h3>{step.label}</h3><p>{step.detail}</p></div>{index < workflowSteps.length - 1 && <i aria-hidden="true" />}</li>)}</m.ol></div></section>

      <section className="product-configuration"><div className="site-canvas product-configuration__layout"><div><span>Implementation & configuration</span><h2>Start where it matters. Expand when you are ready.</h2></div><div className="configuration-steps"><article><b>01</b><h3>Map the current process</h3><p>Understand roles, records, hand-offs, and the operational issue to solve first.</p></article><article><b>02</b><h3>Configure the operating layer</h3><p>Set access, workflow rules, institutional structure, and relevant communication paths.</p></article><article><b>03</b><h3>Extend deliberately</h3><p>Connect additional workflows as the institution is ready to operate them well.</p></article></div></div></section>
    </div>
  );
}
