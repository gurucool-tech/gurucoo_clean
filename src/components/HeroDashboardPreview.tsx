import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  CheckCircle2,
  MessageCircle,
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Bell,
  Calendar,
  FileText,
} from "lucide-react";

type DashboardType = "admin" | "teacher" | "student" | "parent";

const ROTATION_INTERVAL = 4000; // 4 seconds
const PAUSE_AFTER_CLICK = 10000; // 10 seconds pause after manual selection

const dashboardTabs: { id: DashboardType; label: string }[] = [
  { id: "admin", label: "Admin" },
  { id: "teacher", label: "Teacher" },
  { id: "student", label: "Student" },
  { id: "parent", label: "Parent" },
];

// Admin Dashboard Content
function AdminDashboard() {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground leading-tight">Admin Dashboard</p>
            <p className="text-xs text-muted-foreground">Real-time overview</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-green animate-pulse shrink-0" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-muted/30 border border-border/40 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-foreground leading-none mb-1">847</p>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase">Present</p>
        </div>
        <div className="bg-muted/30 border border-border/40 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-foreground leading-none mb-1">23</p>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase">Absent</p>
        </div>
        <div className="bg-guru-green/10 border border-guru-green/20 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-guru-green leading-none mb-1">97%</p>
          <p className="text-[10px] font-semibold text-guru-green uppercase">Rate</p>
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 flex items-center gap-2 bg-guru-green/10 border border-guru-green/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <CheckCircle2 className="w-3.5 h-3.5 text-guru-green shrink-0" />
          <span className="text-xs font-semibold text-guru-green truncate">Attendance captured</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-whatsapp/10 border border-whatsapp/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <MessageCircle className="w-3.5 h-3.5 text-whatsapp shrink-0" />
          <span className="text-xs font-semibold text-whatsapp truncate">WhatsApp sent</span>
        </div>
      </div>
    </div>
  );
}

// Teacher Dashboard Content
function TeacherDashboard() {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-guru-blue/10 flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-guru-blue" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground leading-tight">Teacher Dashboard</p>
            <p className="text-xs text-muted-foreground">Today's overview</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-blue animate-pulse shrink-0" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-muted/30 border border-border/40 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-foreground leading-none mb-1">4</p>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase">Classes</p>
        </div>
        <div className="bg-guru-orange/10 border border-guru-orange/20 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-guru-orange leading-none mb-1">1</p>
          <p className="text-[10px] font-semibold text-guru-orange uppercase">Pending</p>
        </div>
        <div className="bg-muted/30 border border-border/40 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-foreground leading-none mb-1">12</p>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase">To Review</p>
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 flex items-center gap-2 bg-guru-green/10 border border-guru-green/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <CheckCircle2 className="w-3.5 h-3.5 text-guru-green shrink-0" />
          <span className="text-xs font-semibold text-guru-green truncate">Class 8A ready</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-guru-blue/10 border border-guru-blue/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <Calendar className="w-3.5 h-3.5 text-guru-blue shrink-0" />
          <span className="text-xs font-semibold text-guru-blue truncate">Timetable updated</span>
        </div>
      </div>
    </div>
  );
}

// Student Dashboard Content
function StudentDashboard() {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-guru-orange/10 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5 text-guru-orange" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground leading-tight">Student Dashboard</p>
            <p className="text-xs text-muted-foreground">Class 10-B</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-orange animate-pulse shrink-0" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-muted/30 border border-border/40 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-foreground leading-none mb-1">5</p>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase">Periods</p>
        </div>
        <div className="bg-guru-orange/10 border border-guru-orange/20 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-guru-orange leading-none mb-1">2</p>
          <p className="text-[10px] font-semibold text-guru-orange uppercase">HW Due</p>
        </div>
        <div className="bg-guru-green/10 border border-guru-green/20 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-guru-green leading-none mb-1">96%</p>
          <p className="text-[10px] font-semibold text-guru-green uppercase">Attendance</p>
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 flex items-center gap-2 bg-guru-blue/10 border border-guru-blue/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <Bell className="w-3.5 h-3.5 text-guru-blue shrink-0" />
          <span className="text-xs font-semibold text-guru-blue truncate">New remark</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <FileText className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-semibold text-primary truncate">Exam schedule</span>
        </div>
      </div>
    </div>
  );
}

// Parent Dashboard Content
function ParentDashboard() {
  return (
    <div className="flex flex-col h-full gap-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
            <Users className="w-5 h-5 text-whatsapp" />
          </div>
          <div>
            <p className="text-sm font-bold text-foreground leading-tight">Parent Dashboard</p>
            <p className="text-xs text-muted-foreground">Child status</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-green animate-pulse shrink-0" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="bg-guru-green/10 border border-guru-green/20 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-guru-green leading-none mb-1">In</p>
          <p className="text-[10px] font-semibold text-guru-green uppercase">School</p>
        </div>
        <div className="bg-muted/30 border border-border/40 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-foreground leading-none mb-1">96%</p>
          <p className="text-[10px] font-semibold text-muted-foreground uppercase">Rate</p>
        </div>
        <div className="bg-whatsapp/10 border border-whatsapp/20 rounded-lg p-2.5 text-center flex flex-col justify-center">
          <p className="text-lg font-black text-whatsapp leading-none mb-1">Sent</p>
          <p className="text-[10px] font-semibold text-whatsapp uppercase">Alert</p>
        </div>
      </div>
      <div className="flex gap-2 mt-auto">
        <div className="flex-1 flex items-center gap-2 bg-guru-orange/10 border border-guru-orange/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <Clock className="w-3.5 h-3.5 text-guru-orange shrink-0" />
          <span className="text-xs font-semibold text-guru-orange truncate">Fee reminder</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-lg px-2.5 py-1.5 overflow-hidden">
          <Bell className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="text-xs font-semibold text-primary truncate">PTM notice</span>
        </div>
      </div>
    </div>
  );
}

const dashboardComponents: Record<DashboardType, () => JSX.Element> = {
  admin: AdminDashboard,
  teacher: TeacherDashboard,
  student: StudentDashboard,
  parent: ParentDashboard,
};

export function HeroDashboardPreview() {
  const [activeTab, setActiveTab] = useState<DashboardType>("admin");
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Auto-rotation logic
  useEffect(() => {
    if (isPaused || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = dashboardTabs.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % dashboardTabs.length;
        return dashboardTabs[nextIndex].id;
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [isPaused, prefersReducedMotion]);

  // Handle manual tab click
  const handleTabClick = useCallback((tabId: DashboardType) => {
    setActiveTab(tabId);
    setIsPaused(true);

    // Resume auto-rotation after pause duration
    const timeout = setTimeout(() => setIsPaused(false), PAUSE_AFTER_CLICK);
    return () => clearTimeout(timeout);
  }, []);

  const ActiveDashboard = dashboardComponents[activeTab];

  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <div className="bg-card rounded-2xl border border-border/60 shadow-premium-lg p-6 backdrop-blur-sm overflow-hidden">
        {/* Tab Navigation */}
        <div className="flex gap-1 p-1 bg-muted/50 rounded-lg mb-5">
          {dashboardTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={cn(
                "flex-1 px-3 py-1.5 text-caption font-medium rounded-md transition-all duration-200",
                activeTab === tab.id
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-card/50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dashboard Content with Animation */}
        <div className="relative h-[220px] overflow-hidden">
          {dashboardTabs.map((tab) => {
            const DashboardComponent = dashboardComponents[tab.id];
            const isActive = activeTab === tab.id;

            return (
              <div
                key={tab.id}
                className={cn(
                  "absolute inset-0 transition-all w-full h-full overflow-hidden",
                  prefersReducedMotion ? "duration-0" : "duration-300 ease-out",
                  isActive
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-2 pointer-events-none"
                )}
                aria-hidden={!isActive}
              >
                <DashboardComponent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-guru-blue/5 rounded-full blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-guru-green/5 rounded-full blur-xl" />
    </div>
  );
}
