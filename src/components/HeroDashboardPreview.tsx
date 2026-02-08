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
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-body-sm font-semibold text-foreground">Admin Dashboard</p>
            <p className="text-caption text-muted-foreground">Real-time overview</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-green animate-pulse" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-foreground">847</p>
          <p className="text-caption text-muted-foreground">Present</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-foreground">23</p>
          <p className="text-caption text-muted-foreground">Absent</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-guru-green">97%</p>
          <p className="text-caption text-muted-foreground">Rate</p>
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <div className="flex-1 flex items-center gap-2 bg-guru-green/5 border border-guru-green/20 rounded-lg px-3 py-2">
          <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">Attendance captured</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-whatsapp/5 border border-whatsapp/20 rounded-lg px-3 py-2">
          <MessageCircle className="w-4 h-4 text-whatsapp flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">WhatsApp sent</span>
        </div>
      </div>
    </div>
  );
}

// Teacher Dashboard Content
function TeacherDashboard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-guru-blue/10 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-guru-blue" />
          </div>
          <div>
            <p className="text-body-sm font-semibold text-foreground">Teacher Dashboard</p>
            <p className="text-caption text-muted-foreground">Today's overview</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-blue animate-pulse" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-foreground">4</p>
          <p className="text-caption text-muted-foreground">Classes</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-guru-orange">1</p>
          <p className="text-caption text-muted-foreground">Pending</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-foreground">12</p>
          <p className="text-caption text-muted-foreground">To Review</p>
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <div className="flex-1 flex items-center gap-2 bg-guru-green/5 border border-guru-green/20 rounded-lg px-3 py-2">
          <CheckCircle2 className="w-4 h-4 text-guru-green flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">Class 8A ready</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-guru-blue/5 border border-guru-blue/20 rounded-lg px-3 py-2">
          <Calendar className="w-4 h-4 text-guru-blue flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">Timetable updated</span>
        </div>
      </div>
    </div>
  );
}

// Student Dashboard Content
function StudentDashboard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-guru-orange/10 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-guru-orange" />
          </div>
          <div>
            <p className="text-body-sm font-semibold text-foreground">Student Dashboard</p>
            <p className="text-caption text-muted-foreground">Class 10-B</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-orange animate-pulse" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-foreground">5</p>
          <p className="text-caption text-muted-foreground">Periods</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-guru-orange">2</p>
          <p className="text-caption text-muted-foreground">HW Due</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-heading-md font-bold text-guru-green">96%</p>
          <p className="text-caption text-muted-foreground">Attendance</p>
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <div className="flex-1 flex items-center gap-2 bg-guru-blue/5 border border-guru-blue/20 rounded-lg px-3 py-2">
          <Bell className="w-4 h-4 text-guru-blue flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">New remark</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
          <FileText className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">Exam schedule</span>
        </div>
      </div>
    </div>
  );
}

// Parent Dashboard Content
function ParentDashboard() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-whatsapp/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-whatsapp" />
          </div>
          <div>
            <p className="text-body-sm font-semibold text-foreground">Parent Dashboard</p>
            <p className="text-caption text-muted-foreground">Child status</p>
          </div>
        </div>
        <div className="w-2 h-2 rounded-full bg-guru-green animate-pulse" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-guru-green/5 border border-guru-green/20 rounded-lg p-3 text-center">
          <p className="text-body-sm font-bold text-guru-green">In School</p>
          <p className="text-caption text-muted-foreground">8:12 AM</p>
        </div>
        <div className="bg-muted/50 rounded-lg p-3 text-center">
          <p className="text-body-sm font-bold text-foreground">Present</p>
          <p className="text-caption text-muted-foreground">Today</p>
        </div>
        <div className="bg-whatsapp/5 border border-whatsapp/20 rounded-lg p-3 text-center">
          <p className="text-body-sm font-bold text-whatsapp">Sent</p>
          <p className="text-caption text-muted-foreground">Alert</p>
        </div>
      </div>
      <div className="flex gap-3 pt-2">
        <div className="flex-1 flex items-center gap-2 bg-guru-orange/5 border border-guru-orange/20 rounded-lg px-3 py-2">
          <Clock className="w-4 h-4 text-guru-orange flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">Fee reminder</span>
        </div>
        <div className="flex-1 flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-lg px-3 py-2">
          <Bell className="w-4 h-4 text-primary flex-shrink-0" />
          <span className="text-caption font-medium text-foreground">PTM notice</span>
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
      <div className="bg-card rounded-2xl border border-border/60 shadow-premium-lg p-6 backdrop-blur-sm">
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
        <div className="relative min-h-[180px]">
          {dashboardTabs.map((tab) => {
            const DashboardComponent = dashboardComponents[tab.id];
            const isActive = activeTab === tab.id;

            return (
              <div
                key={tab.id}
                className={cn(
                  "absolute inset-0 transition-all",
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
