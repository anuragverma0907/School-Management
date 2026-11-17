import { useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  Bell,
  BookMarked,
  BookOpen,
  Bus,
  Calendar,
  CalendarCheck,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  IndianRupee,
  Library,
  Mail,
  Menu,
  MoreHorizontal,
  Pencil,
  Search,
  Settings,
  ShieldCheck,
  Star,
  Trophy,
  Users,
  UserPlus,
  Wallet,
} from "lucide-react";
import {
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const COLORS = {
  navy: "#123675",
  navyDark: "#0D2854",
  blue: "#1764F5",
  blueLight: "#E8F0FF",
  background: "#F4F7FC",
  ink: "#17243A",
  muted: "#8792A5",
  green: "#1EBB69",
  orange: "#F47A20",
  purple: "#8755EC",
  pink: "#E84B9A",
  teal: "#16AFA7",
  red: "#E64B55",
  border: "#E9EDF4",
};

const MODULES = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "students", label: "Student Management", icon: Users, expandable: true },
  { id: "admission", label: "Admission", icon: UserPlus },
  { id: "academics", label: "Academics", icon: GraduationCap, expandable: true },
  { id: "attendance", label: "Attendance", icon: CalendarCheck, expandable: true },
  { id: "exams", label: "Examinations", icon: BookOpen, expandable: true },
  { id: "fees", label: "Fee Management", icon: Wallet, expandable: true },
  { id: "transport", label: "Transport", icon: Bus },
  { id: "library", label: "Library", icon: Library },
  { id: "reports", label: "Reports", icon: FileText },
  { id: "calendar", label: "Academic Calendar", icon: CalendarDays },
  { id: "settings", label: "Settings", icon: Settings },
];

const SUMMARY = [
  { label: "Total Students", value: "1,248", change: "8.2% from last month", icon: Users, tone: COLORS.blue },
  { label: "Total Teachers", value: "76", change: "2 new this month", icon: GraduationCap, tone: COLORS.green },
  { label: "Total Classes", value: "26", change: "Across 3 sections", icon: BookOpen, tone: "#E4A900" },
  { label: "Fee Collection (This Month)", value: "\u20B93,84,500", change: "12% from last month", icon: IndianRupee, tone: COLORS.pink },
  { label: "Attendance Today", value: "93%", change: "2% from yesterday", icon: ClipboardCheck, tone: "#2A9BD6" },
];

const COLLECTIONS = [
  { day: "1", fees: 18, expenses: 8 },
  { day: "3", fees: 22, expenses: 10 },
  { day: "5", fees: 15, expenses: 6 },
  { day: "7", fees: 27, expenses: 12 },
  { day: "9", fees: 19, expenses: 9 },
  { day: "11", fees: 32, expenses: 14 },
  { day: "13", fees: 24, expenses: 11 },
  { day: "15", fees: 38, expenses: 18 },
  { day: "17", fees: 29, expenses: 12 },
  { day: "19", fees: 42, expenses: 20 },
  { day: "21", fees: 34, expenses: 15 },
  { day: "23", fees: 49, expenses: 23 },
  { day: "25", fees: 39, expenses: 17 },
  { day: "27", fees: 55, expenses: 26 },
  { day: "29", fees: 47, expenses: 20 },
  { day: "30", fees: 61, expenses: 28 },
];

const STUDENT_DISTRIBUTION = [
  { name: "Nursery", value: 77, color: COLORS.green },
  { name: "Primary", value: 23, color: "#4380F5" },
  { name: "Middle", value: 0, color: COLORS.orange },
  { name: "High", value: 0, color: COLORS.purple },
  { name: "Higher Secondary", value: 0, color: COLORS.teal },
];

const NOTICES = [
  { title: "Library Books Due", detail: "2 books are overdue for return", icon: BookMarked, color: COLORS.purple },
  { title: "Parent-teacher meeting", detail: "Saturday at 10:00 AM", icon: Calendar, color: COLORS.blue },
];

const ACTIVITIES = [
  { title: "New student record added", detail: "Class 6 - Section A", time: "09:42 AM", icon: UserPlus },
  { title: "Fee receipt generated", detail: "Receipt #RC-2048", time: "09:18 AM", icon: IndianRupee },
  { title: "Attendance updated", detail: "Class 8 - Section B", time: "08:56 AM", icon: CalendarCheck },
  { title: "Exam timetable published", detail: "Mid-term examinations", time: "Yesterday", icon: FileText },
];

const QUICK_LINKS = [
  { label: "Student List", target: "students", icon: Users, color: COLORS.green },
  { label: "Fee Reports", target: "reports", icon: IndianRupee, color: COLORS.blue },
  { label: "Exam Results", target: "exams", icon: Trophy, color: COLORS.orange },
  { label: "Time Table", target: "academics", icon: CalendarDays, color: COLORS.purple },
  { label: "ID Cards", target: "students", icon: CreditCard, color: COLORS.teal },
  { label: "Certificates", target: "reports", icon: FileText, color: COLORS.pink },
  { label: "Homework", target: "academics", icon: BookOpen, color: "#D89A00" },
  { label: "Notice Board", target: "calendar", icon: Bell, color: "#6054D9" },
];

const formatRupees = (value) => `\u20B9${value.toLocaleString("en-IN")}`;

function Panel({ title, icon: Icon, action, children, className = "" }) {
  return (
    <section className={`min-w-0 overflow-hidden rounded-2xl border bg-white shadow-sm ${className}`} style={{ borderColor: COLORS.border }}>
      <div className="flex min-h-11 items-center justify-between gap-3 border-b px-4 py-3" style={{ borderColor: COLORS.border }}>
        <h2 className="flex min-w-0 items-center gap-2 text-sm font-bold" style={{ color: COLORS.ink }}>
          {Icon && <Icon size={16} style={{ color: COLORS.blue }} />}
          <span className="truncate">{title}</span>
        </h2>
        {action && (
          <button type="button" className="shrink-0 text-xs font-semibold hover:underline" style={{ color: "#3286A6" }}>
            {action}
          </button>
        )}
      </div>
      <div className="p-4">{children}</div>
    </section>
  );
}

function SummaryCard({ label, value, change, icon: Icon, tone }) {
  return (
    <article className="relative min-w-0 overflow-hidden rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: COLORS.border }}>
      <div className="flex items-start gap-3">
        <span className="grid size-11 shrink-0 place-items-center rounded-xl" style={{ color: tone, background: `${tone}18` }}>
          <Icon size={21} />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-medium leading-5" style={{ color: COLORS.muted }}>{label}</p>
          <p className="mt-0.5 truncate text-2xl font-bold tracking-tight" style={{ color: COLORS.ink }}>{value}</p>
          <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold" style={{ color: COLORS.green }}>
            <ArrowUpRight size={13} /> {change}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-4 h-0.5 w-16 rounded-full" style={{ background: tone }} />
    </article>
  );
}

function Sidebar({ expanded, menuSearch, setMenuSearch, active, setActive, role }) {
  const filteredModules = useMemo(
    () => MODULES.filter((module) => module.label.toLowerCase().includes(menuSearch.toLowerCase())),
    [menuSearch],
  );

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col text-white shadow-xl transition-[width,transform] duration-200 md:translate-x-0 ${
        expanded ? "translate-x-0 md:w-[272px]" : "-translate-x-full md:translate-x-0 md:w-[76px]"
      }`}
      style={{ background: `linear-gradient(180deg, ${COLORS.navy} 0%, ${COLORS.navyDark} 100%)` }}
    >
      <div className="flex h-[70px] shrink-0 items-center gap-3 border-b border-white/10 px-4">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-lg font-bold shadow-lg shadow-blue-950/30">D</div>
        {expanded && (
          <div className="min-w-0">
            <p className="truncate text-sm font-bold">Sunrises Public School</p>
            <p className="truncate text-[10px] text-blue-200">Bareilly, Uttar Pradesh</p>
          </div>
        )}
      </div>

      {expanded && (
        <div className="px-3 pt-3">
          <label className="flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-[#0B2B5B]/70 px-3 text-blue-100">
            <Search size={15} />
            <input
              value={menuSearch}
              onChange={(event) => setMenuSearch(event.target.value)}
              placeholder="Search menu..."
              className="w-full bg-transparent text-xs outline-none placeholder:text-blue-200/60"
            />
          </label>
        </div>
      )}

      <nav className="min-h-0 flex-1 overflow-y-auto px-2 py-4">
        {expanded && <p className="mb-2 px-3 text-[10px] font-bold tracking-[0.18em] text-blue-200/70">MAIN MENU</p>}
        <div className="space-y-1">
          {filteredModules.map(({ id, label, icon: Icon, expandable }) => {
            const selected = id === active;
            return (
              <button
                key={id}
                type="button"
                title={!expanded ? label : undefined}
                onClick={() => setActive(id)}
                className={`flex h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-xs font-semibold transition-colors ${
                  selected ? "bg-blue-600 text-white shadow-md shadow-blue-950/20" : "text-blue-100 hover:bg-white/10"
                }`}
              >
                <span className={`grid size-7 shrink-0 place-items-center rounded-lg ${selected ? "bg-emerald-500" : "bg-white/10"}`}>
                  <Icon size={16} />
                </span>
                {expanded && <span className="min-w-0 flex-1 truncate">{label}</span>}
                {expanded && expandable && <ChevronRight size={14} className="shrink-0 text-blue-200/70" />}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="shrink-0 border-t border-white/10 p-3">
        {expanded ? (
          <div className="rounded-2xl border border-white/10 bg-[#081F43]/80 p-3">
            <p className="text-[10px] font-bold tracking-[0.16em] text-blue-200/70">SYSTEM INFO</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-400">
                <ShieldCheck size={21} />
              </span>
              <div>
                <p className="text-[10px] text-blue-200">Mon, 17 Nov 2026</p>
                <p className="text-base font-bold">11:26 AM</p>
              </div>
            </div>
            <span className="mx-auto mt-3 flex w-fit items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-[10px] font-semibold text-emerald-300">
              <span className="size-1.5 rounded-full bg-emerald-400" /> Online · {role}
            </span>
          </div>
        ) : (
          <div className="grid place-items-center py-2 text-emerald-400" title="System online">
            <ShieldCheck size={22} />
          </div>
        )}
      </div>
    </aside>
  );
}

function DistributionChart() {
  return (
    <div className="flex h-full flex-col items-center">
      <div className="relative h-[170px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={STUDENT_DISTRIBUTION} dataKey="value" nameKey="name" innerRadius={52} outerRadius={76} paddingAngle={1} stroke="none">
              {STUDENT_DISTRIBUTION.map((entry) => <Cell key={entry.name} fill={entry.color} />)}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold" style={{ color: COLORS.ink }}>1,248</span>
          <span className="text-[10px] uppercase tracking-wide" style={{ color: COLORS.muted }}>Students</span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-3 gap-y-1">
        {STUDENT_DISTRIBUTION.map((entry) => (
          <span key={entry.name} className="flex items-center gap-1 text-[10px]" style={{ color: COLORS.muted }}>
            <span className="size-2 rounded-full" style={{ background: entry.color }} />
            {entry.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function MiniCalendar() {
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-xs font-bold" style={{ color: COLORS.ink }}>November 2026</span>
        <span className="flex gap-2" style={{ color: COLORS.muted }}><ChevronLeft size={14} /><ChevronRight size={14} /></span>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center text-[10px]">
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <span key={`${day}-${index}`} className="py-1 font-semibold" style={{ color: COLORS.muted }}>{day}</span>
        ))}
        {days.map((day) => (
          <span key={day} className={`mx-auto grid size-6 place-items-center rounded-full ${day === 16 ? "font-bold text-white" : ""}`} style={day === 16 ? { background: COLORS.blue } : { color: day === 24 ? COLORS.red : COLORS.ink }}>
            {day}
          </span>
        ))}
      </div>
      <div className="mt-2 flex justify-center gap-2 text-[9px]" style={{ color: COLORS.muted }}>
        <span><i className="mr-1 inline-block size-1.5 rounded-full bg-red-500" />Exams</span>
        <span><i className="mr-1 inline-block size-1.5 rounded-full bg-green-500" />Holidays</span>
        <span><i className="mr-1 inline-block size-1.5 rounded-full bg-blue-500" />Events</span>
      </div>
    </div>
  );
}

export default function SchoolDashboard() {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const [menuSearch, setMenuSearch] = useState("");
  const [active, setActive] = useState("dashboard");
  const [role, setRole] = useState("Super Admin");
  const [globalSearch, setGlobalSearch] = useState("");

  return (
    <div className="min-h-screen" style={{ background: COLORS.background, color: COLORS.ink }}>
      {sidebarExpanded && (
        <button
          type="button"
          aria-label="Close navigation"
          className="fixed inset-0 z-30 bg-slate-950/40 md:hidden"
          onClick={() => setSidebarExpanded(false)}
        />
      )}
      <Sidebar
        expanded={sidebarExpanded}
        menuSearch={menuSearch}
        setMenuSearch={setMenuSearch}
        active={active}
        setActive={setActive}
        role={role}
      />

      <div className={`min-h-screen min-w-0 transition-[margin] duration-200 ${sidebarExpanded ? "md:ml-[272px]" : "md:ml-[76px]"}`}>
        <header className="sticky top-0 z-20 flex min-h-[70px] flex-wrap items-center gap-3 border-b bg-white px-4 py-2 shadow-sm lg:flex-nowrap lg:px-5" style={{ borderColor: COLORS.border }}>
          <button type="button" onClick={() => setSidebarExpanded(!sidebarExpanded)} aria-label="Toggle navigation" className="grid size-9 shrink-0 place-items-center rounded-lg hover:bg-slate-100">
            <Menu size={20} />
          </button>

          <button type="button" className="hidden h-12 shrink-0 items-center gap-2 rounded-xl border px-3 sm:flex" style={{ borderColor: "#D7E3F8", background: "#F5F8FF" }}>
            <span className="grid size-8 place-items-center rounded-lg bg-blue-600 text-white"><CalendarCheck size={17} /></span>
            <span className="text-left leading-tight">
              <span className="block text-[9px] font-bold tracking-wider" style={{ color: COLORS.muted }}>CURRENT SESSION</span>
              <span className="block text-xs font-bold">2026-2027</span>
            </span>
            <Pencil size={14} className="ml-1 text-blue-500" />
          </button>

          <button type="button" className="hidden h-12 shrink-0 items-center gap-2 rounded-xl border px-3 lg:flex" style={{ borderColor: "#B7EBD1", background: "#F0FFF7" }}>
            <span className="grid size-8 place-items-center rounded-lg bg-emerald-600 text-white"><Star size={16} fill="currentColor" /></span>
            <span className="text-left leading-tight">
              <span className="block text-[9px] font-bold tracking-wider" style={{ color: COLORS.muted }}>CURRENT PLAN · MONTHLY</span>
              <span className="block text-xs font-bold text-emerald-800">Premium plan</span>
            </span>
            <span className="rounded-full bg-white px-2 py-1 text-[9px] font-bold text-emerald-700">ACTIVE</span>
          </button>

          <label className="flex h-11 min-w-[160px] flex-1 items-center gap-2 rounded-full border px-4 lg:mx-2" style={{ borderColor: COLORS.border, color: COLORS.muted }}>
            <Search size={17} />
            <input
              value={globalSearch}
              onChange={(event) => setGlobalSearch(event.target.value)}
              placeholder="Search student, admission, fee, etc..."
              className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400"
            />
          </label>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
            <button type="button" aria-label="Messages" className="relative grid size-9 place-items-center rounded-full hover:bg-slate-100"><Mail size={19} /><span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-red-500 text-[9px] font-bold text-white">0</span></button>
            <button type="button" aria-label="Notifications" className="relative grid size-9 place-items-center rounded-full hover:bg-slate-100"><Bell size={19} /><span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-red-500 text-[9px] font-bold text-white">0</span></button>
            <button type="button" aria-label="Calendar" className="hidden size-9 place-items-center rounded-full hover:bg-slate-100 sm:grid"><Calendar size={19} /></button>
            <button type="button" aria-label="Help" className="hidden size-9 place-items-center rounded-full hover:bg-slate-100 sm:grid"><CircleHelp size={19} /></button>
            <span className="hidden size-9 place-items-center rounded-full bg-slate-100 text-slate-500 md:grid"><Users size={18} /></span>
            <label className="hidden min-w-[94px] sm:block">
              <span className="block text-xs font-bold">Owner</span>
              <select value={role} onChange={(event) => setRole(event.target.value)} className="w-full cursor-pointer bg-transparent text-[10px] outline-none" aria-label="Select role">
                <option>Super Admin</option>
                <option>School Admin</option>
                <option>Teacher</option>
                <option>Accountant</option>
              </select>
            </label>
            <ChevronDown size={14} className="hidden text-slate-500 sm:block" />
          </div>
        </header>

        <main className="mx-auto max-w-[1800px] space-y-4 p-4 lg:p-6">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ color: COLORS.ink }}>
                {active === "dashboard" ? "Dashboard Overview" : MODULES.find((module) => module.id === active)?.label}
              </h1>
              <p className="mt-1 text-xs" style={{ color: COLORS.muted }}>Welcome back, {role}. Here&apos;s what&apos;s happening at your school today.</p>
            </div>
            <button type="button" className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-xs font-semibold shadow-sm" style={{ borderColor: COLORS.border }}>
              <CalendarDays size={15} style={{ color: COLORS.blue }} /> This Month <ChevronDown size={13} />
            </button>
          </div>

          <section aria-label="School summary" className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {SUMMARY.map((item) => <SummaryCard key={item.label} {...item} />)}
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <Panel title="Fee Collection & Expenses Overview" icon={Activity} action="This Month" className="xl:col-span-6">
              <div className="mb-3 flex gap-5 text-[10px] font-medium" style={{ color: COLORS.muted }}>
                <span className="flex items-center gap-1.5"><i className="h-0.5 w-5 rounded bg-blue-600" />Fee Collection</span>
                <span className="flex items-center gap-1.5"><i className="h-0.5 w-5 rounded bg-orange-500" />Expenses</span>
              </div>
              <div className="h-[245px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={COLLECTIONS} margin={{ top: 8, right: 8, left: -18, bottom: 0 }}>
                    <CartesianGrid stroke="#EDF1F6" vertical />
                    <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: COLORS.muted }} />
                    <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 10, fill: COLORS.muted }} tickFormatter={(value) => `${value}K`} />
                    <Tooltip formatter={(value, name) => [`${value}K`, name === "fees" ? "Fee Collection" : "Expenses"]} />
                    <Line type="monotone" dataKey="fees" stroke={COLORS.blue} strokeWidth={2.5} dot={{ r: 2, fill: COLORS.blue }} activeDot={{ r: 4 }} />
                    <Line type="monotone" dataKey="expenses" stroke={COLORS.orange} strokeWidth={2} dot={{ r: 2, fill: COLORS.orange }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </Panel>

            <Panel title="Student Distribution" icon={Users} className="xl:col-span-3">
              <DistributionChart />
            </Panel>

            <div className="grid gap-4 sm:grid-cols-2 xl:col-span-3 xl:grid-cols-1">
              <Panel title="Class-wise Fee Status" icon={IndianRupee} action="View Report">
                <div className="space-y-3">
                  {[
                    { name: "Nursery", paid: 5900, due: 166100, unpaid: 20 },
                    { name: "Primary", paid: 126000, due: 42000, unpaid: 8 },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="font-bold">{item.name}</span>
                        <span className="rounded-full bg-rose-50 px-2 py-1 text-[9px] font-semibold text-rose-600">{item.unpaid} unpaid</span>
                      </div>
                      <div className="mt-1.5 flex flex-wrap gap-x-3 text-[10px] font-semibold">
                        <span className="text-emerald-600"><CheckCircle2 size={11} className="mr-1 inline" />Paid {formatRupees(item.paid)}</span>
                        <span className="text-rose-600"><CircleAlert size={11} className="mr-1 inline" />Due {formatRupees(item.due)}</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-rose-100">
                        <div className="h-full rounded-full bg-emerald-500" style={{ width: `${(item.paid / (item.paid + item.due)) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>

              <Panel title="Important Notifications" icon={Bell} action="View All">
                <div className="space-y-3">
                  {NOTICES.map(({ title, detail, icon: Icon, color }) => (
                    <div key={title} className="flex items-center gap-3">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl text-white" style={{ background: color }}><Icon size={16} /></span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-bold">{title}</p>
                        <p className="truncate text-[10px]" style={{ color: COLORS.muted }}>{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Panel>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6">
            <Panel title="Today's Attendance" icon={CheckCircle2}>
              <div className="flex items-center justify-center gap-4">
                <div className="grid size-[76px] place-items-center rounded-full" style={{ background: "conic-gradient(#4380F5 0 93%, #E8EEF8 93% 100%)" }}>
                  <div className="grid size-[58px] place-items-center rounded-full bg-white text-sm font-bold" style={{ color: COLORS.blue }}>93%</div>
                </div>
                <div className="text-[10px] leading-5"><p className="font-semibold text-emerald-600">● 1,161 Present</p><p className="font-semibold text-rose-500">● 87 Absent</p></div>
              </div>
            </Panel>

            <Panel title="Today's Collection" icon={IndianRupee}>
              <p className="text-center text-xl font-bold">{formatRupees(42800)}</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-center text-[10px]">
                <div className="rounded-lg bg-emerald-50 p-2 text-emerald-700"><b className="block">Cash</b>{formatRupees(17800)}</div>
                <div className="rounded-lg bg-blue-50 p-2 text-blue-700"><b className="block">Online</b>{formatRupees(25000)}</div>
              </div>
            </Panel>

            <Panel title="Pending Fees" icon={CircleAlert}>
              <p className="text-center text-2xl font-bold text-rose-500">{formatRupees(412000)}</p>
              <p className="mt-2 text-center text-[10px]" style={{ color: COLORS.muted }}>86 students · 12 invoices overdue</p>
            </Panel>

            <Panel title="Transport on Route" icon={Bus}>
              <p className="text-center text-2xl font-bold">11 <span className="text-sm font-medium" style={{ color: COLORS.muted }}> / 14</span></p>
              <p className="mt-2 text-center text-[10px]" style={{ color: COLORS.muted }}>3 buses currently at school</p>
            </Panel>

            <Panel title="Library" icon={Library}>
              <p className="text-center text-2xl font-bold">1,259 <span className="text-sm font-medium" style={{ color: COLORS.muted }}>Books</span></p>
              <p className="mt-2 text-center text-[10px]" style={{ color: COLORS.muted }}>2 books due for return</p>
            </Panel>

            <Panel title="Academic Calendar" icon={CalendarDays}>
              <MiniCalendar />
            </Panel>
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-12">
            <Panel title="Top Performing Classes" icon={Trophy} className="xl:col-span-3">
              <div className="space-y-4">
                {[["Nursery - A", 89.3], ["Class 8 - A", 84.6], ["Class 10 - B", 82.1]].map(([name, score]) => (
                  <div key={name}>
                    <div className="mb-1 flex justify-between text-xs"><span className="font-semibold">{name}</span><b>{score}%</b></div>
                    <div className="h-1.5 rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: `${score}%` }} /></div>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Recent Activities" icon={Clock3} action="View All" className="xl:col-span-4">
              <div className="max-h-[190px] space-y-3 overflow-y-auto pr-1">
                {ACTIVITIES.map(({ title, detail, time, icon: Icon }) => (
                  <div key={title} className="flex items-center gap-3 border-b pb-3 last:border-0 last:pb-0" style={{ borderColor: COLORS.border }}>
                    <span className="grid size-8 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-600"><Icon size={15} /></span>
                    <div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">{title}</p><p className="truncate text-[10px]" style={{ color: COLORS.muted }}>{detail}</p></div>
                    <span className="shrink-0 text-[9px]" style={{ color: COLORS.muted }}>{time}</span>
                  </div>
                ))}
              </div>
            </Panel>

            <Panel title="Gender Ratio" icon={Users} className="xl:col-span-2">
              <div className="relative mx-auto h-[145px] max-w-[190px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={[{ name: "Boys", value: 51 }, { name: "Girls", value: 49 }]} dataKey="value" innerRadius={43} outerRadius={64} paddingAngle={2} stroke="none">
                      <Cell fill="#4380F5" />
                      <Cell fill={COLORS.pink} />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 grid place-items-center text-xl font-bold">1,248</div>
              </div>
              <p className="text-center text-[9px] font-semibold"><span className="text-blue-500">Boys 51%</span><span className="mx-2 text-pink-500">Girls 49%</span></p>
            </Panel>

            <Panel title="Quick Links" icon={MoreHorizontal} className="xl:col-span-3">
              <div className="grid grid-cols-4 gap-2">
                {QUICK_LINKS.map(({ label, target, icon: Icon, color }) => (
                  <button key={label} type="button" onClick={() => setActive(target)} className="flex min-h-[62px] flex-col items-center justify-center gap-1 rounded-xl p-1 text-center text-[9px] font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5" style={{ background: color }}>
                    <Icon size={19} />
                    <span className="leading-tight">{label}</span>
                  </button>
                ))}
              </div>
            </Panel>
          </section>

          <section className="grid gap-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 p-5 text-white shadow-lg sm:grid-cols-3 sm:items-center sm:px-8">
            <div className="sm:col-span-1">
              <p className="text-base font-bold">Everything you need, all in one place</p>
              <ul className="mt-2 space-y-1 text-xs text-blue-100">
                <li>✓ Smart school management</li>
                <li>✓ Secure and easy to use</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-sm font-bold">Need help?</p>
              <p className="mt-1 text-xs text-blue-100">Our support team is ready to assist you.</p>
              <button type="button" className="mt-3 rounded-full bg-white px-4 py-2 text-xs font-bold text-blue-700">Contact Support</button>
            </div>
            <div className="hidden items-center justify-end gap-3 sm:flex">
              <span className="grid size-14 place-items-center rounded-2xl bg-white/15"><BookMarked size={30} /></span>
              <div><p className="text-sm font-bold">School in your pocket</p><p className="mt-1 text-[10px] text-blue-100">Manage your school from anywhere</p></div>
            </div>
          </section>

          <footer className="flex flex-wrap items-center justify-between gap-2 py-2 text-[10px]" style={{ color: COLORS.muted }}>
            <span>© 2026 Demo School. All rights reserved.</span>
            <span className="flex items-center gap-1"><Activity size={12} /> School management dashboard</span>
          </footer>
        </main>
      </div>
    </div>
  );
}
