import { useState } from "react";
import { 
  Bell, 
  Calendar, 
  Users,
  Activity,
  CheckCircle,
  AlertCircle,
  FileText,
  Clock,
  TrendingUp,
  MessageCircle,
  GraduationCap
} from "lucide-react";
import logo from "@/assets/logo-new-blue.png";

interface AbstractDashboardProps {
  colorScheme?: "primary" | "accent" | "foreground";
  title?: string;
  mode?: "school-overview" | "college-timetable" | "tuition-branch" | "executive-multicampus" | string;
}

export function AbstractDashboard({ mode = "school-overview" }: AbstractDashboardProps) {
  let activeMode = mode;
  // Map legacy modes if needed
  if (!["school-overview", "college-timetable", "tuition-branch", "executive-multicampus"].includes(activeMode)) {
     if (activeMode === "multicampus" || activeMode === "system-command" || activeMode === "educational-institutions") {
         activeMode = "executive-multicampus";
     } else if (activeMode === "attendance") {
         activeMode = "tuition-branch";
     } else if (activeMode === "finance") {
         activeMode = "college-timetable";
     } else {
         activeMode = "school-overview";
     }
  }

  const wrapperClasses = "w-full overflow-hidden flex justify-center items-center";
  const shellClasses = "w-[1140px] h-[720px] rounded-2xl bg-white/40 glass p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative z-10 flex flex-col shrink-0 overflow-hidden";

  const getDashboardConfig = () => {
    switch(activeMode) {
      case "school-overview":
        return {
          title: "School Operations",
          status: "All Systems Operational",
          modules: ["Attendance Sync", "Fee Collection", "Parent Comms", "Exam Grading", "Staff Payroll"],
          avatar: "PR"
        };
      case "college-timetable":
        return {
          title: "College Timetable & Operations",
          status: "Active Term: Fall 2026",
          modules: ["Timetable Auto-gen", "Faculty Workload", "Room Booking", "Student Portal", "Grades Mgmt"],
          avatar: "DE"
        };
      case "tuition-branch":
        return {
          title: "Tuition / Coaching Branch",
          status: "Branch Active",
          modules: ["Batch Scheduling", "Fee Reminders", "WhatsApp Bot", "Test Analytics", "Lead Mgmt"],
          avatar: "BM"
        };
      case "executive-multicampus":
      default:
        return {
          title: "Multi-Campus Executive",
          status: "Global Sync: OK",
          modules: ["Consolidated Finance", "Inter-branch Transfer", "Global Analytics", "HR Management", "Franchise Controls"],
          avatar: "EX"
        };
    }
  };

  const config = getDashboardConfig();

  // Helper for KPI Cards
  const KpiCard = ({ label, value, trend, alert = false }: { label: string, value: string, trend?: string, alert?: boolean }) => (
    <div className={`bg-white rounded-xl p-5 shadow-sm border border-border/40 flex flex-col justify-center h-full relative overflow-hidden transition-all hover:shadow-md ${alert ? 'ring-1 ring-red-500/20' : ''}`}>
      <div className="flex items-center justify-between mb-2">
         <div className="text-xs font-semibold text-muted-foreground">{label}</div>
         {trend && <div className={`text-xs font-bold px-2 py-0.5 rounded-full ${trend.startsWith('+') ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>{trend}</div>}
      </div>
      <div className="flex items-end gap-2 mt-auto">
         <div className={`text-3xl font-black tracking-tight ${alert ? 'text-red-600' : 'text-foreground'}`}>{value}</div>
      </div>
      {alert && <div className="absolute top-3 right-3"><AlertCircle className="w-4 h-4 text-red-500" /></div>}
    </div>
  );

  const renderSchoolOverview = () => (
    <div className="flex flex-col h-full gap-6">
      {/* KPI Row (100px) */}
      <div className="grid grid-cols-4 gap-6 shrink-0 h-[100px]">
         <KpiCard label="Present Today" value="96.4%" trend="+1.2%" />
         <KpiCard label="Staff Active" value="142" trend="145 Total" />
         <KpiCard label="Comms Sent" value="840" />
         <KpiCard label="Action Required" value="3" alert />
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
         <div className="flex-[2] flex flex-col gap-6 min-h-0">
            {/* Chart Block (220px) */}
            <div className="bg-white border border-border/40 rounded-xl p-6 shadow-sm flex flex-col h-[220px] shrink-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-4 text-foreground flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary"/> Attendance Trend (Week)</h3>
               <div className="flex flex-1 items-end gap-4 pt-2">
                 {[85, 92, 95, 90, 96].map((h, i) => (
                   <div key={i} className="flex-1 flex flex-col justify-end group cursor-pointer relative h-full">
                     <div className="w-full bg-primary/10 rounded-t-md transition-all duration-300 group-hover:bg-primary" style={{height: `${h}%`}}></div>
                     <span className="text-xs text-center mt-2 font-medium text-muted-foreground">{'MTWTF'[i]}</span>
                   </div>
                 ))}
               </div>
            </div>
            {/* List Block */}
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2"><Users className="w-4 h-4 text-primary"/> Class Summary</h3>
               <div className="flex flex-col gap-2.5 flex-1 justify-between overflow-hidden">
                 {[
                   {c: "Class 10A", p: "98%", s: "45/46"}, 
                   {c: "Class 10B", p: "95%", s: "44/46"}, 
                   {c: "Class 9A", p: "92%", s: "40/43"}, 
                   {c: "Class 9B", p: "89%", s: "38/42", alert: true}
                 ].map((row,i) => (
                   <div key={i} className={`flex justify-between items-center text-sm px-4 py-2 rounded-lg border border-border/30 transition-colors ${row.alert ? 'bg-red-50/30' : 'hover:bg-muted/30'}`}>
                     <span className="font-medium w-24">{row.c}</span>
                     <span className="text-xs text-muted-foreground">{row.s}</span>
                     <span className={`font-bold ${row.alert ? 'text-red-600' : 'text-foreground'}`}>{row.p}</span>
                   </div>
                 ))}
               </div>
            </div>
         </div>
         <div className="flex-[3] flex flex-col gap-6 min-h-0">
            {/* Live Activity */}
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-primary"/> Live Activity</h3>
               <div className="flex flex-col gap-3 flex-1 justify-between overflow-hidden">
                 <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5"><CheckCircle className="w-4 h-4 text-emerald-600" /></div>
                   <div><div className="text-sm leading-snug"><span className="font-semibold">Term 1 Result</span> published for Class 10</div><div className="text-xs text-muted-foreground mt-0.5">Just now</div></div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5"><Users className="w-4 h-4 text-blue-600" /></div>
                   <div><div className="text-sm leading-snug"><span className="font-semibold">Amit Kumar</span> marked present (late)</div><div className="text-xs text-muted-foreground mt-0.5">10m ago</div></div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center shrink-0 mt-0.5"><Calendar className="w-4 h-4 text-amber-600" /></div>
                   <div><div className="text-sm leading-snug"><span className="font-semibold">Math Dept Meeting</span> scheduled in Room 12</div><div className="text-xs text-muted-foreground mt-0.5">1h ago</div></div>
                 </div>
                 <div className="flex gap-4 items-start">
                   <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center shrink-0 mt-0.5"><FileText className="w-4 h-4 text-purple-600" /></div>
                   <div><div className="text-sm leading-snug"><span className="font-semibold">₹45,000</span> fees collected (Online)</div><div className="text-xs text-muted-foreground mt-0.5">2h ago</div></div>
                 </div>
               </div>
            </div>
            {/* Communication Status */}
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-[0.8] min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary"/> Communication Status</h3>
               <div className="flex gap-4 flex-1">
                 <div className="flex-1 bg-muted/20 rounded-xl p-4 flex flex-col justify-center border border-border/30">
                   <div className="text-sm font-medium text-foreground mb-1">Fee Reminder</div>
                   <div className="text-2xl font-black text-emerald-600 mb-0.5">100%</div>
                   <div className="text-[11px] text-muted-foreground leading-tight">Delivered to 450 parents</div>
                 </div>
                 <div className="flex-1 bg-muted/20 rounded-xl p-4 flex flex-col justify-center border border-border/30">
                   <div className="text-sm font-medium text-foreground mb-1">Holiday Notice</div>
                   <div className="text-2xl font-black text-blue-600 mb-0.5">Pending</div>
                   <div className="text-[11px] text-muted-foreground leading-tight">Awaiting Principal Approval</div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  const renderCollegeTimetable = () => (
    <div className="flex flex-col h-full gap-6">
      <div className="grid grid-cols-4 gap-6 shrink-0 h-[100px]">
         <KpiCard label="Active Lectures" value="42" />
         <KpiCard label="Rooms Occupied" value="88%" trend="+5%" />
         <KpiCard label="Faculty on Leave" value="3" alert />
         <KpiCard label="Conflicts Detected" value="0" />
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
         <div className="flex-[3] flex flex-col gap-6 min-h-0">
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2"><Calendar className="w-4 h-4 text-primary"/> Timetable Grid Snapshot</h3>
               <div className="flex flex-col gap-2 flex-1 justify-between overflow-hidden">
                 {[
                   { time: "10:00 AM", sub: "Advanced Calculus", prof: "Dr. Sharma", room: "LT-1", st: "Live" },
                   { time: "10:00 AM", sub: "Data Structures", prof: "Prof. Verma", room: "Lab 4", st: "Live" },
                   { time: "11:00 AM", sub: "Fluid Dynamics", prof: "Dr. Iyer", room: "LT-2", st: "Next" },
                   { time: "11:00 AM", sub: "Macroeconomics", prof: "Dr. Desai", room: "Room 304", st: "Next" },
                   { time: "12:00 PM", sub: "Machine Learning", prof: "Dr. Patil", room: "Lab 1", st: "Upcoming" }
                 ].map((row,i) => (
                   <div key={i} className="flex gap-2 justify-between items-center hover:bg-muted/30 px-3 py-2 rounded-lg border border-border/30 text-sm transition-colors">
                     <span className="font-semibold text-primary w-20 text-[13px] shrink-0">{row.time}</span>
                     <span className="font-medium text-foreground flex-1 truncate pr-2">{row.sub}</span>
                     <span className="text-muted-foreground w-28 shrink-0 truncate">{row.prof}</span>
                     <span className="font-medium text-foreground w-20 text-right text-[13px] shrink-0">{row.room}</span>
                     <span className={`w-16 shrink-0 text-center text-[10px] font-bold px-1.5 py-1 uppercase rounded-full ${row.st === 'Live' ? 'bg-emerald-50 text-emerald-700' : 'bg-muted/50 text-muted-foreground'}`}>{row.st}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="bg-white border border-border/40 rounded-xl p-6 shadow-sm flex flex-col h-[160px] shrink-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-4 text-foreground flex items-center gap-2"><FileText className="w-4 h-4 text-primary"/> Room Allocation</h3>
               <div className="flex gap-6 h-full">
                 <div className="flex-1 bg-emerald-50/50 rounded-xl border border-emerald-100/50 flex flex-col items-center justify-center">
                   <div className="text-3xl font-black text-emerald-700">42</div>
                   <div className="text-[10px] uppercase text-emerald-600 font-bold mt-1">In Use</div>
                 </div>
                 <div className="flex-1 bg-muted/20 rounded-xl border border-border/30 flex flex-col items-center justify-center">
                   <div className="text-3xl font-black text-muted-foreground">18</div>
                   <div className="text-[10px] uppercase text-muted-foreground font-bold mt-1">Available</div>
                 </div>
                 <div className="flex-1 bg-amber-50/50 rounded-xl border border-amber-100/50 flex flex-col items-center justify-center">
                   <div className="text-3xl font-black text-amber-700">5</div>
                   <div className="text-[10px] uppercase text-amber-600 font-bold mt-1">Maintenance</div>
                 </div>
               </div>
            </div>
         </div>
         <div className="flex-[2] flex flex-col gap-6 min-h-0">
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2"><Users className="w-4 h-4 text-primary"/> Faculty Workload</h3>
               <div className="flex-1 flex flex-col gap-6 text-sm justify-center">
                  <div>
                    <div className="flex justify-between text-muted-foreground mb-2"><span className="text-xs font-semibold">Engineering Dept</span><span className="font-bold text-foreground">92%</span></div>
                    <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden"><div className="bg-primary h-full rounded-full w-[92%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-muted-foreground mb-2"><span className="text-xs font-semibold">Science Dept</span><span className="font-bold text-foreground">85%</span></div>
                    <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden"><div className="bg-primary/80 h-full rounded-full w-[85%]"></div></div>
                  </div>
                  <div>
                    <div className="flex justify-between text-muted-foreground mb-2"><span className="text-xs font-semibold">Commerce Dept</span><span className="font-bold text-foreground">78%</span></div>
                    <div className="w-full bg-muted/50 rounded-full h-2.5 overflow-hidden"><div className="bg-primary/60 h-full rounded-full w-[78%]"></div></div>
                  </div>
               </div>
            </div>
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-2.5 text-foreground flex items-center gap-2"><AlertCircle className="w-4 h-4 text-primary"/> Operational Alerts</h3>
               <div className="flex flex-col gap-2.5 flex-1 justify-center">
                 <div className="p-3 rounded-xl bg-amber-50/50 text-xs text-amber-800 border border-amber-100/50 flex items-start gap-3">
                   <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                   <div><span className="font-semibold block mb-0.5 text-[13px]">Prof. Singh Leave</span><span className="leading-tight block">2 afternoon lectures need substitution.</span></div>
                 </div>
                 <div className="p-3 rounded-xl bg-muted/20 text-xs text-muted-foreground border border-border/30 flex items-start gap-3">
                   <Clock className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                   <div><span className="font-semibold block text-foreground mb-0.5 text-[13px]">Lab 4 Setup</span><span className="leading-tight block">Requires projector replacement by 12 PM.</span></div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  const renderTuitionBranch = () => (
    <div className="flex flex-col h-full gap-6">
      <div className="grid grid-cols-4 gap-6 shrink-0 h-[100px]">
         <KpiCard label="Sessions Today" value="22" />
         <KpiCard label="Attendance" value="92%" trend="+2%" />
         <KpiCard label="Fees Collected" value="₹1.2L" trend="+15k" />
         <KpiCard label="Pending Follow-ups" value="12" alert />
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
         <div className="flex-[3] flex flex-col gap-6 min-h-0">
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-[1.5] min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-4 text-foreground flex items-center gap-2"><GraduationCap className="w-4 h-4 text-primary"/> Batch Schedule</h3>
               <div className="flex flex-col gap-2.5 flex-1 justify-between overflow-hidden">
                 {[
                   { b: "JEE Advanced 2025", t: "04:00 PM", f: "A. Patel", s: "Live" },
                   { b: "NEET Crash Course", t: "04:30 PM", f: "S. Roy", s: "Live" },
                   { b: "10th Foundation Math", t: "05:00 PM", f: "K. Iyer", s: "Upcoming" },
                   { b: "12th Boards Physics", t: "06:00 PM", f: "R. Sharma", s: "Upcoming" }
                 ].map((row,i) => (
                   <div key={i} className={`flex items-center justify-between px-4 py-2.5 border rounded-lg transition-colors ${row.s === 'Live' ? 'bg-blue-50/20 border-blue-100/50' : 'hover:bg-muted/30 border-border/30'}`}>
                     <span className="font-semibold text-foreground w-40 truncate">{row.b}</span>
                     <span className="text-primary font-medium w-20 text-[13px]">{row.t}</span>
                     <span className="text-muted-foreground w-20 text-[13px] truncate">{row.f}</span>
                     <span className={`text-[10px] font-bold px-3 py-1 uppercase rounded-full ${row.s === 'Live' ? 'bg-emerald-50 text-emerald-700' : 'bg-muted text-muted-foreground'}`}>{row.s}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="bg-white border border-border/40 rounded-xl p-6 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-5 text-foreground flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary"/> Attendance by Batch</h3>
               <div className="flex flex-col justify-center flex-1 gap-6">
                 <div>
                   <div className="flex justify-between items-center text-xs mb-2 text-muted-foreground"><span className="font-semibold text-foreground">JEE Adv 2025</span><span className="font-bold text-emerald-600">45/50</span></div>
                   <div className="w-full bg-muted/50 h-2.5 rounded-full overflow-hidden"><div className="bg-emerald-500 h-full w-[90%]"></div></div>
                 </div>
                 <div>
                   <div className="flex justify-between items-center text-xs mb-2 text-muted-foreground"><span className="font-semibold text-foreground">NEET Crash</span><span className="font-bold text-emerald-600">38/40</span></div>
                   <div className="w-full bg-muted/50 h-2.5 rounded-full overflow-hidden"><div className="bg-emerald-500 h-full w-[95%]"></div></div>
                 </div>
               </div>
            </div>
         </div>
         <div className="flex-[2] flex flex-col gap-6 min-h-0">
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-[1.2] min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2"><AlertCircle className="w-4 h-4 text-primary"/> Fee Follow-ups</h3>
               <div className="flex flex-col gap-3 flex-1 text-sm justify-center">
                 <div className="flex flex-col p-4 bg-red-50/30 border border-red-100/50 rounded-xl text-red-900 gap-1">
                   <div className="flex justify-between items-center"><span className="font-semibold text-[13px]">Overdue &gt; 30 Days</span><span className="text-lg font-black text-red-600">12</span></div>
                   <div className="text-[11px] text-red-700/80 leading-tight">Immediate action required</div>
                 </div>
                 <div className="flex flex-col p-4 bg-amber-50/30 border border-amber-100/50 rounded-xl text-amber-900 gap-1">
                   <div className="flex justify-between items-center"><span className="font-semibold text-[13px]">Overdue &lt; 30 Days</span><span className="text-lg font-black text-amber-600">45</span></div>
                   <div className="text-[11px] text-amber-700/80 leading-tight">Send WhatsApp reminder</div>
                 </div>
               </div>
            </div>
            <div className="bg-white border border-border/40 rounded-xl p-5 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-3 text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-primary"/> Branch Activity</h3>
               <div className="flex flex-col gap-2.5 flex-1 justify-between text-[11px] overflow-hidden">
                 <div className="flex gap-3 items-center">
                   <div className="text-muted-foreground font-mono w-10 shrink-0">14:05</div>
                   <div className="font-medium text-foreground bg-muted/20 px-3 py-2 rounded-lg border border-border/30 flex-1 truncate">Attendance synced for JEE Adv</div>
                 </div>
                 <div className="flex gap-3 items-center">
                   <div className="text-muted-foreground font-mono w-10 shrink-0">13:50</div>
                   <div className="font-medium text-emerald-800 bg-emerald-50/50 px-3 py-2 rounded-lg border border-emerald-100/50 flex-1 truncate">Fee collected: ₹25,000</div>
                 </div>
                 <div className="flex gap-3 items-center">
                   <div className="text-muted-foreground font-mono w-10 shrink-0">13:15</div>
                   <div className="font-medium text-foreground bg-muted/20 px-3 py-2 rounded-lg border border-border/30 flex-1 truncate">WhatsApp broadcast sent to 10th</div>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  const renderExecutiveMulticampus = () => (
    <div className="flex flex-col h-full gap-6">
      <div className="grid grid-cols-4 gap-6 shrink-0 h-[100px]">
         <KpiCard label="Total Campuses" value="12" />
         <KpiCard label="Active Students" value="18.5k" trend="+450" />
         <KpiCard label="Network Att. Rate" value="94%" />
         <KpiCard label="Collection Rate" value="92%" />
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
         <div className="flex-[3] flex flex-col gap-6 min-h-0">
            <div className="bg-white border border-border/40 rounded-xl p-6 shadow-sm flex flex-col flex-[1.5] min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-5 text-foreground flex items-center gap-2"><Activity className="w-4 h-4 text-primary"/> Campus Comparison</h3>
               <div className="flex-1 flex flex-col justify-between overflow-hidden">
                 <div className="flex text-[10px] font-bold text-muted-foreground uppercase pb-3 border-b border-border/40">
                   <div className="flex-[1.5]">Campus</div><div className="flex-1 text-right">Students</div><div className="flex-1 text-right">Att. Rate</div><div className="flex-1 text-right">Collection</div>
                 </div>
                 <div className="flex flex-col gap-1 mt-3 text-sm flex-1 justify-between">
                   {[
                     { c: "Mumbai Main", s: "4,500", a: "96%", f: "95%" },
                     { c: "Pune Hub", s: "3,800", a: "94%", f: "92%" },
                     { c: "Delhi North", s: "5,200", a: "95%", f: "94%" },
                     { c: "Bangalore Tech", s: "5,000", a: "88%", f: "85%", alert: true }
                   ].map((row,i) => (
                     <div key={i} className={`flex py-2.5 border-b border-border/20 last:border-0 items-center rounded-lg px-3 transition-colors ${row.alert ? 'bg-red-50/30 border-red-100/50' : 'hover:bg-muted/30'}`}>
                       <div className={`flex-[1.5] font-semibold ${row.alert ? 'text-red-800' : 'text-foreground'}`}>{row.c}</div>
                       <div className="flex-1 text-right text-muted-foreground">{row.s}</div>
                       <div className={`flex-1 text-right font-medium ${row.alert ? 'text-red-600' : 'text-foreground'}`}>{row.a}</div>
                       <div className={`flex-1 text-right font-medium ${row.alert ? 'text-red-600' : 'text-emerald-600'}`}>{row.f}</div>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
            <div className="bg-white border border-border/40 rounded-xl p-6 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-4 text-foreground flex items-center gap-2"><TrendingUp className="w-4 h-4 text-primary"/> Network Performance Chart</h3>
               <div className="flex flex-1 items-end gap-4 pt-2">
                 {[40, 55, 60, 45, 70, 80, 65, 90, 85, 75].map((h,i) => (
                   <div key={i} className="flex-1 bg-primary/20 rounded-t-md hover:bg-primary transition-colors cursor-pointer" style={{height: `${h}%`}}></div>
                 ))}
               </div>
            </div>
         </div>
         <div className="flex-[2] flex flex-col gap-6 min-h-0">
            <div className="bg-white border border-border/40 rounded-xl p-6 shadow-sm flex flex-col flex-1 min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-5 text-foreground flex items-center gap-2"><AlertCircle className="w-4 h-4 text-primary"/> Network Alerts</h3>
               <div className="flex flex-col gap-4 flex-1 justify-center text-xs">
                 <div className="p-5 bg-red-50/30 border border-red-100/50 rounded-xl">
                   <div className="font-semibold text-red-900 mb-1.5 text-sm">Bangalore: Low Collection</div>
                   <div className="text-red-700/80">Fee collection is 15% below network average for current term.</div>
                 </div>
                 <div className="p-5 bg-amber-50/30 border border-amber-100/50 rounded-xl">
                   <div className="font-semibold text-amber-900 mb-1.5 text-sm">Pune Hub: Faculty Shortage</div>
                   <div className="text-amber-700/80">Science dept operating at 110% workload capacity.</div>
                 </div>
               </div>
            </div>
            <div className="bg-white border border-border/40 rounded-xl p-6 shadow-sm flex flex-col flex-[0.8] min-h-0 hover:shadow-md transition-shadow">
               <h3 className="font-semibold text-sm mb-5 text-foreground flex items-center gap-2"><Users className="w-4 h-4 text-primary"/> Executive Summary</h3>
               <div className="flex flex-col gap-4 flex-1 justify-center text-sm">
                 <div className="flex justify-between items-center p-4 rounded-xl bg-emerald-50/30 text-emerald-800 border border-emerald-100/50">
                   <span className="font-medium">Top Performer: <strong className="font-semibold">Mumbai Main</strong></span>
                   <span className="text-[10px] uppercase font-bold bg-emerald-100 px-2.5 py-1 rounded-full text-emerald-900">A+</span>
                 </div>
                 <div className="flex justify-between items-center p-4 rounded-xl bg-red-50/30 text-red-800 border border-red-100/50">
                   <span className="font-medium">Needs Attention: <strong className="font-semibold">Bangalore Tech</strong></span>
                   <span className="text-[10px] uppercase font-bold bg-red-100 px-2.5 py-1 rounded-full text-red-900">C</span>
                 </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );

  return (
    <div className={wrapperClasses}>
      <div className="transform origin-top scale-[0.3] sm:scale-[0.45] md:scale-[0.7] lg:scale-100 transition-transform h-[220px] sm:h-[330px] md:h-[510px] lg:h-[720px] w-[340px] sm:w-[500px] md:w-[800px] lg:w-[1140px] flex justify-center">
        <div className={shellClasses}>
          {/* Subtle decorative background blur matching the faint blue panel treatment request */}
          <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none rounded-t-xl" />

          <div className="w-full h-full rounded-xl overflow-hidden bg-[#f4f7fa] border border-border/50 relative flex flex-col shadow-inner">
          {/* Top Bar (64px rigid height) */}
          <div className="h-16 border-b border-border/40 bg-white flex items-center justify-between px-6 shrink-0 z-20">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 pr-4 border-r border-border/40">
                <img src={logo} alt="GuruCool" className="h-7 w-auto object-contain" />
                <span className="font-bold text-foreground text-lg tracking-tight">GuruCool</span>
              </div>
              <div className="font-bold text-blue-900 text-sm tracking-tight bg-blue-50/50 px-3 py-1.5 rounded-md border border-blue-100">
                {config.title}
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs bg-muted/10 px-3 py-1.5 rounded-md border border-border/40 text-muted-foreground font-semibold">
                 <Calendar className="w-3.5 h-3.5" />
                 <span>Today</span>
              </div>
              <div className="w-px h-6 bg-border/50"></div>
              <div className="relative cursor-pointer">
                 <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
              </div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 text-primary font-bold text-xs cursor-pointer ml-1">
                 {config.avatar}
              </div>
            </div>
          </div>

          <div className="flex flex-1 min-h-0 relative">
            {/* Left Panel (Rigid 220px width) */}
            {/* Left Panel (Rigid 220px width) - System Status (No Fake Tabs) */}
            <div className="w-[220px] border-r border-border/40 bg-white/90 backdrop-blur-sm flex flex-col z-10 shrink-0">
              <div className="p-5 flex flex-col gap-6 flex-1">
                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">System Status</div>
                  <div className="flex items-center gap-2 text-[13px] leading-tight font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-2 rounded-lg">
                    <CheckCircle className="w-4 h-4 shrink-0" />
                    <span>{config.status}</span>
                  </div>
                </div>

                <div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">Active Modules</div>
                  <div className="flex flex-col gap-2">
                     {config.modules.map((mod) => (
                       <div key={mod} className="flex items-center gap-2.5 text-sm font-medium text-foreground/80 py-1">
                         <div className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0" />
                         <span className="truncate">{mod}</span>
                       </div>
                     ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border/50">
                  <div className="text-xs text-muted-foreground font-medium text-center">
                    Last sync: Just now
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 flex flex-col min-w-0 bg-[#f4f7fa] overflow-hidden relative">
              {/* Content Renderers */}
              <div className="w-full h-full flex flex-col min-h-0 animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both" key={activeMode}>
                {activeMode === "school-overview" && renderSchoolOverview()}
                {activeMode === "college-timetable" && renderCollegeTimetable()}
                {activeMode === "tuition-branch" && renderTuitionBranch()}
                {activeMode === "executive-multicampus" && renderExecutiveMulticampus()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
