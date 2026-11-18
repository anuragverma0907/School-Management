import { useEffect, useMemo, useState } from "react";
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
  Download,
  Eye,
  FileText,
  GraduationCap,
  Home,
  IndianRupee,
  Library,
  Mail,
  Menu,
  MoreHorizontal,
  Pencil,
  Printer,
  Search,
  Settings,
  ShieldCheck,
  Save,
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
  navy: "var(--dashboard-navy)",
  navyDark: "var(--dashboard-navy-dark)",
  blue: "var(--dashboard-blue)",
  blueLight: "var(--dashboard-blue-light)",
  background: "var(--dashboard-background)",
  ink: "var(--dashboard-ink)",
  muted: "var(--dashboard-muted)",
  green: "var(--dashboard-green)",
  orange: "var(--dashboard-orange)",
  purple: "var(--dashboard-purple)",
  pink: "var(--dashboard-pink)",
  teal: "var(--dashboard-teal)",
  red: "var(--dashboard-red)",
  border: "var(--dashboard-border)",
};

const MODULES = [
  { id: "dashboard", label: "Dashboard", icon: Home },
  { id: "students", label: "Student Management", icon: Users, children: ["Student Details", "Student Photos", "Student Admission", "Online Admission", "Disabled Students", "Multi Class Student", "Bulk Delete", "Student Categories", "Student House", "Disable Reason"] },
  { id: "academics", label: "Academics", icon: GraduationCap, children: ["Class Timetable", "Cleanup Timetable", "Teachers Timetable", "Assign Class Teacher", "Promote Students", "Subject Group", "Subjects", "Class", "Sections"] },
  { id: "attendance", label: "Attendance", icon: CalendarCheck, children: ["Student Attendance", "Approve Leave", "Attendance By Date"] },
  { id: "exams", label: "Examinations", icon: BookOpen, children: ["Exam Group", "Exam Schedule", "Exam Result", "Design Admit Card", "Print Admit Card", "Design Marksheet", "Print Marksheet", "Marks Grade", "Marks Division"] },
  { id: "fees", label: "Fee Management", icon: Wallet, children: ["Collect Fees", "Offline Bank Payments", "Search Fees Payment", "Search Due Fees", "Fees Master", "Fees Group", "Fees Type", "Fees Discount", "Receipt Setting", "Fees Carry Forward", "Fees Reminder"] },
  { id: "transport", label: "Transport", icon: Bus, children: ["Fees Master", "Pickup Point", "Routes", "Vehicles", "Assign Vehicle", "Route Pickup Point", "Student Transport Fees", "Live GPS Dashboard", "Manage Bus Drivers", "Live Fleet Map", "Student Scan Logs", "Driver QR Scanner"] },
  { id: "library", label: "Library", icon: Library, children: ["Book List", "Issue - Return", "Add Student", "Add Staff Member"] },
  { id: "hostel", label: "Hostel", icon: Home, children: ["Hostel Rooms", "Room Type", "Hostel", "Girls Hostel", "Girls - Students", "Girls - Rooms", "Girls - Allocation", "Girls - Attendance", "Girls - Leave", "Girls - Visitors", "Girls - Mess", "Girls - Complaints", "Girls - Reports", "Boys Hostel", "Boys - Students", "Boys - Rooms", "Boys - Allocation", "Boys - Attendance", "Boys - Leave", "Boys - Visitors", "Boys - Mess", "Boys - Complaints", "Boys - Reports"] },
  { id: "staff", label: "HR & Staff", icon: Users, children: ["Staff Directory", "Staff Attendance", "Payroll", "Approve Leave Request", "Apply Leave", "Leave Type", "Teachers Rating", "Department", "Designation", "Disabled Staff", "Holidays", "Staff Overtime"] },
  { id: "communication", label: "Communication", icon: Mail, children: ["Notice Board", "Send Email", "Send SMS / Whatsapp", "Email / SMS Log", "Schedule Email SMS Log", "Login Credentials Send", "Email Template", "SMS Template", "All Notifications"] },
  { id: "inventory", label: "Inventory", icon: MoreHorizontal, children: ["Inventory Dashboard", "Items", "Categories", "Suppliers", "Stock Movements", "Requisitions", "Student Sales", "Stock Alerts", "Reports", "Issue Item", "Add Item Stock", "Add Item", "Item Category", "Item Store", "Item Supplier"] },
  { id: "reports", label: "Reports & Analytics", icon: FileText, children: ["Student Information", "Finance", "Attendance", "Examinations", "Online Examinations", "Lesson Plan", "Human Resource", "Homework", "Library", "Inventory", "Transport", "Hostel", "Alumni", "User Log", "Audit Trail Report"] },
  { id: "calendar", label: "Calendar", icon: CalendarDays },
  { id: "settings", label: "Settings", icon: Settings, children: ["General Setting", "Session Setting", "Notification Setting", "SMS Setting", "Email Setting", "Payment Methods", "Print Header Footer", "Thermal Print", "Settings", "Roles Permissions", "Backup Restore", "Languages", "Currency", "Users", "Modules", "Custom Fields", "Captcha Setting", "System Fields", "Student Profile Update", "Online Admission", "File Types", "Sidebar Menu", "System Update", "Biometric Devices"] },
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
        <span className="grid size-11 shrink-0 place-items-center rounded-xl" style={{ color: tone, background: `color-mix(in srgb, ${tone} 10%, transparent)` }}>
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

const DEMO_STUDENTS = [
  { sats: "SRSB01301", name: "Aarav Sharma", roll: 1, className: "Nursery", section: "A", father: "Rohit Sharma", dob: "14/03/2019", gender: "Male", category: "General", mobile: "9876501001" },
  { sats: "SRSB01302", name: "Anaya Verma", roll: 2, className: "Nursery", section: "A", father: "Amit Verma", dob: "22/07/2019", gender: "Female", category: "OBC", mobile: "9876501002" },
  { sats: "SRSB01303", name: "Kabir Khan", roll: 3, className: "Nursery", section: "A", father: "Imran Khan", dob: "05/11/2019", gender: "Male", category: "General", mobile: "9876501003" },
  { sats: "SRSB01304", name: "Myra Patel", roll: 4, className: "Nursery", section: "A", father: "Kunal Patel", dob: "18/01/2020", gender: "Female", category: "General", mobile: "9876501004" },
  { sats: "SRSB01305", name: "Vivaan Singh", roll: 5, className: "Nursery", section: "A", father: "Manoj Singh", dob: "09/06/2019", gender: "Male", category: "SC", mobile: "9876501005" },
  { sats: "SRSB01306", name: "Sara Khan", roll: 6, className: "LKG", section: "B", father: "Sameer Khan", dob: "27/02/2018", gender: "Female", category: "General", mobile: "9876501006" },
  { sats: "SRSB01307", name: "Ishaan Gupta", roll: 7, className: "LKG", section: "B", father: "Rajesh Gupta", dob: "11/09/2018", gender: "Male", category: "General", mobile: "9876501007" },
  { sats: "SRSB01308", name: "Aisha Ali", roll: 8, className: "LKG", section: "B", father: "Farhan Ali", dob: "30/04/2018", gender: "Female", category: "OBC", mobile: "9876501008" },
  { sats: "SRSB01309", name: "Reyansh Yadav", roll: 9, className: "UKG", section: "A", father: "Deepak Yadav", dob: "16/12/2017", gender: "Male", category: "OBC", mobile: "9876501009" },
  { sats: "SRSB01310", name: "Kiara Das", roll: 10, className: "UKG", section: "A", father: "Suman Das", dob: "08/08/2017", gender: "Female", category: "General", mobile: "9876501010" },
];

const STUDENT_PHOTOS = [
  "/students/student-1.avif",
  "/students/student-2.webp",
  "/students/student-3.webp",
  "/students/student-4.jpg",
  "/students/student-5.webp",
  "/students/student-6.jpg",
  "/students/student-7.webp",
];
function StudentPortrait({ student, photo, className = "" }) {
  const index = Math.max(0, DEMO_STUDENTS.findIndex((item) => item.sats === student.sats));
  return <img src={photo || STUDENT_PHOTOS[index % STUDENT_PHOTOS.length]} alt={`${student.name} student photo`} className={`h-full w-full object-cover ${className}`} />;
}

const inputClass = "h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100";
const Field = ({ label, required = false, children }) => (
  <label className="block min-w-0 text-xs font-semibold text-slate-600">
    <span className="mb-1.5 block">{label}{required && <span className="text-rose-500"> *</span>}</span>
    {children || <input className={inputClass} />}
  </label>
);

function StudentDetailsScreen({ photos }) {
  const [className, setClassName] = useState("All Classes");
  const [section, setSection] = useState("");
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [view, setView] = useState("list");
  const students = DEMO_STUDENTS.filter((student) => (className === "All Classes" || student.className === className) && (!section || student.section === section) && `${student.name} ${student.sats} ${student.roll} ${student.father}`.toLowerCase().includes(query.toLowerCase()));
  return (
    <div className="space-y-4">
      <Panel title="Select Criteria" className="overflow-visible">
        <div className="grid gap-4 md:grid-cols-3">
          <Field label="Class" required><select className={inputClass} value={className} onChange={(event) => setClassName(event.target.value)}>{["All Classes", "Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5"].map((item) => <option key={item}>{item}</option>)}</select></Field>
          <Field label="Section"><select className={inputClass} value={section} onChange={(event) => setSection(event.target.value)}><option value="">Select</option><option>A</option><option>B</option></select></Field>
          <Field label="Search By Keyword"><input className={inputClass} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Student name, roll number, SATS number..." /></Field>
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-[11px] text-slate-400">Optional tools: OCR image scan and admission data extraction</p>
          <button type="button" onClick={() => setSearched(true)} className="rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-200 hover:bg-blue-700">⌕ Search</button>
        </div>
      </Panel>
      <Panel title={searched ? `${className} Student List` : "Student List"}>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3">
          <div className="flex gap-2">
            {[ ["list", "▤ List View"], ["details", "▧ Details View"] ].map(([id, label]) => <button key={id} type="button" onClick={() => setView(id)} className={`rounded-lg px-3 py-2 text-xs font-bold ${view === id ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50"}`}>{label}</button>)}
          </div>
          <input className="h-9 w-full max-w-xs rounded-lg border border-slate-200 px-3 text-xs outline-none focus:border-blue-400" placeholder="Search students..." value={query} onChange={(event) => setQuery(event.target.value)} />
        </div>
        {view === "list" ? <div className="overflow-x-auto"><table className="w-full min-w-[850px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase text-slate-500"><tr>{["SATS No.", "Student Name", "Roll No.", "Class", "Father Name", "Date of Birth", "Gender", "Category", "Mobile Number", "Action"].map((heading) => <th key={heading} className="px-3 py-3 font-bold">{heading}</th>)}</tr></thead><tbody>{students.map((student) => <tr key={student.sats} className="border-b border-slate-100 odd:bg-white even:bg-slate-50/70"><td className="px-3 py-3 text-slate-500">{student.sats}</td><td className="px-3 py-3 font-semibold text-cyan-700">{student.name}</td><td className="px-3 py-3">{student.roll}</td><td className="px-3 py-3">{student.className} ({student.section})</td><td className="px-3 py-3">{student.father}</td><td className="px-3 py-3">{student.dob}</td><td className="px-3 py-3">{student.gender}</td><td className="px-3 py-3">{student.category}</td><td className="px-3 py-3">{student.mobile}</td><td className="px-3 py-3"><button type="button" className="rounded-md border px-2 py-1 text-slate-600" aria-label={`Actions for ${student.name}`}>•••</button></td></tr>)}</tbody></table>{students.length === 0 && <p className="p-8 text-center text-sm text-slate-400">No students found.</p>}</div> : <div className="space-y-3">{students.map((student) => <article key={student.sats} className="grid gap-4 rounded-xl border border-slate-200 p-4 sm:grid-cols-[90px_1fr_1fr]"><div className="grid size-20 place-items-center rounded-xl bg-slate-100 text-3xl text-slate-400">{student.name[0]}</div><div><h3 className="font-bold text-cyan-700">{student.name}</h3><p className="mt-2 text-xs leading-5 text-slate-600">Class: {student.className} ({student.section})<br />SATS No.: {student.sats}<br />Date of Birth: {student.dob}<br />Gender: {student.gender}</p></div><div className="text-xs leading-5 text-slate-600">Father Name: {student.father}<br />Mobile: {student.mobile}<br />Local Identification Number: —<br />Current Address: —</div></article>)}</div>}
      </Panel>
    </div>
  );
}

function StudentPhotosScreen() {
  const [className, setClassName] = useState("Nursery");
  const [section, setSection] = useState("A");
  const [visible, setVisible] = useState(false);
  const [photos, setPhotos] = useState({});
  const students = visible ? DEMO_STUDENTS.filter((student) => student.className === className && student.section === section) : [];
  const setPhoto = (id, file) => { if (file) setPhotos((current) => ({ ...current, [id]: URL.createObjectURL(file) })); };
  return (
    <div className="space-y-4">
      <Panel title="Select Criteria">
        <div className="grid items-end gap-4 md:grid-cols-[1fr_1fr_auto]">
          <Field label="Class" required><select className={inputClass} value={className} onChange={(event) => setClassName(event.target.value)}>{["Nursery", "LKG", "UKG", "Class 1", "Class 2", "Class 3"].map((item) => <option key={item}>{item}</option>)}</select></Field>
          <Field label="Section"><select className={inputClass} value={section} onChange={(event) => setSection(event.target.value)}><option>A</option><option>B</option></select></Field>
          <button type="button" onClick={() => setVisible(true)} className="h-10 rounded-xl bg-blue-600 px-8 text-xs font-bold text-white shadow-md shadow-blue-200 hover:bg-blue-700">⌕ Search</button>
        </div>
        <p className="mt-3 text-[11px] text-slate-400">Select a class to load its students. Use Change or Upload to choose a photo from your device.</p>
      </Panel>
      {visible && <Panel title="Student List">
        <div className="mb-4 flex flex-wrap gap-2 text-[11px]"><span className="rounded-full bg-slate-100 px-3 py-1.5 text-slate-600">Total: {students.length}</span><span className="rounded-full bg-emerald-50 px-3 py-1.5 font-semibold text-emerald-700">With photo: {Object.keys(photos).length}</span><span className="rounded-full bg-rose-50 px-3 py-1.5 font-semibold text-rose-600">Pending: {Math.max(0, students.length - Object.keys(photos).length)}</span></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">{students.map((student, index) => <article key={student.sats} className="rounded-xl border border-slate-200 p-3 text-center"><div className="mx-auto grid h-36 w-full max-w-40 place-items-center overflow-hidden rounded-lg bg-slate-100 text-5xl text-slate-400">{photos[student.sats] ? <img src={photos[student.sats]} alt={`${student.name} student`} className="h-full w-full object-cover" /> : <span>{student.name[0]}</span>}</div><p className="mt-2 truncate text-sm font-bold text-slate-700">{student.name}</p><p className="mt-1 text-[10px] text-slate-400">Adm: {student.sats} | Roll: {student.roll + index}</p><label className="mt-3 block cursor-pointer rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white hover:bg-blue-700">{photos[student.sats] ? "📷 Change" : "⬆ Upload"}<input type="file" accept="image/*" className="sr-only" onChange={(event) => setPhoto(student.sats, event.target.files?.[0])} /></label></article>)}</div>
      </Panel>}
    </div>
  );
}

function StudentDetailsDemoScreen({ photos }) {
  const [className, setClassName] = useState("All Classes");
  const [section, setSection] = useState("All Sections");
  const [query, setQuery] = useState("");
  const [view, setView] = useState("list");
  const students = DEMO_STUDENTS.filter((student) => (className === "All Classes" || student.className === className) && (section === "All Sections" || student.section === section) && `${student.name} ${student.sats} ${student.roll} ${student.father}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="space-y-4">
    <Panel title="Select Criteria"><div className="grid gap-4 md:grid-cols-3">
      <Field label="Class"><select className={inputClass} value={className} onChange={(event) => setClassName(event.target.value)}>{["All Classes", "Nursery", "LKG", "UKG"].map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Section"><select className={inputClass} value={section} onChange={(event) => setSection(event.target.value)}><option>All Sections</option><option>A</option><option>B</option></select></Field>
      <Field label="Search By Keyword"><input className={inputClass} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Student name, roll number, SATS number..." /></Field>
    </div></Panel>
    <Panel title={`Student List (${students.length})`}>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3"><div className="flex gap-2">{[["list", "List View"], ["details", "Details View"]].map(([id, label]) => <button key={id} type="button" onClick={() => setView(id)} className={`rounded-lg px-3 py-2 text-xs font-bold ${view === id ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50"}`}>{label}</button>)}</div><input className="h-9 w-full max-w-xs rounded-lg border border-slate-200 px-3 text-xs" placeholder="Search students..." value={query} onChange={(event) => setQuery(event.target.value)} /></div>
      {view === "list" ? <div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase text-slate-500"><tr>{["SATS No.", "Student Name", "Roll No.", "Class", "Father Name", "Date of Birth", "Gender", "Category", "Mobile Number"].map((heading) => <th key={heading} className="px-3 py-3">{heading}</th>)}</tr></thead><tbody>{students.map((student) => <tr key={student.sats} className="border-b border-slate-100 odd:bg-white even:bg-slate-50/70"><td className="px-3 py-2">{student.sats}</td><td className="px-3 py-2"><span className="flex items-center gap-2 font-semibold text-cyan-700"><span className="size-9 overflow-hidden rounded-md"><StudentPortrait student={student} photo={photos[student.sats]} /></span>{student.name}</span></td><td className="px-3 py-3">{student.roll}</td><td className="px-3 py-3">{student.className} ({student.section})</td><td className="px-3 py-3">{student.father}</td><td className="px-3 py-3">{student.dob}</td><td className="px-3 py-3">{student.gender}</td><td className="px-3 py-3">{student.category}</td><td className="px-3 py-3">{student.mobile}</td></tr>)}</tbody></table>{students.length === 0 && <p className="p-8 text-center text-sm text-slate-400">No students found.</p>}</div> : <div className="grid gap-3 lg:grid-cols-2">{students.map((student) => <article key={student.sats} className="flex gap-4 rounded-xl border border-slate-200 p-4"><div className="size-20 shrink-0 overflow-hidden rounded-xl"><StudentPortrait student={student} photo={photos[student.sats]} /></div><div className="text-xs leading-5 text-slate-600"><h3 className="font-bold text-cyan-700">{student.name}</h3>Class: {student.className} ({student.section})<br />SATS No.: {student.sats}<br />Roll: {student.roll} · DOB: {student.dob}<br />Parent: {student.father} · {student.mobile}</div></article>)}</div>}
    </Panel>
  </div>;
}

function StudentProfileManager({ photos }) {
  const [students, setStudents] = useState(DEMO_STUDENTS);
  const [selectedId, setSelectedId] = useState("");
  const [view, setView] = useState("list");
  const [profileTab, setProfileTab] = useState("Personal");
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(null);
  const [saved, setSaved] = useState(false);
  const [qrOpen, setQrOpen] = useState(false);
  const selectedStudent = students.find((student) => student.sats === selectedId);
  const openProfile = (student, edit = false) => {
    setSelectedId(student.sats);
    setDraft({ ...student });
    setProfileTab("Personal");
    setEditing(edit);
    setSaved(false);
  };
  const saveProfile = () => {
    setStudents((current) => current.map((student) => student.sats === selectedId ? { ...draft } : student));
    setEditing(false);
    setSaved(true);
  };
  const printAdmissionForm = () => {
    if (!selectedStudent) return;
    const value = (text) => String(text || "—").replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
    const photoIndex = DEMO_STUDENTS.findIndex((student) => student.sats === selectedStudent.sats);
    const photoUrl = photos[selectedStudent.sats] || new URL(STUDENT_PHOTOS[photoIndex % STUDENT_PHOTOS.length], window.location.origin).href;
    const fields = [
      ["Admission Number", selectedStudent.sats], ["Student Name", selectedStudent.name], ["Roll Number", selectedStudent.roll],
      ["Class / Section", `${selectedStudent.className} / ${selectedStudent.section}`], ["Date of Birth", selectedStudent.dob],
      ["Gender", selectedStudent.gender], ["Category", selectedStudent.category], ["Mobile Number", selectedStudent.mobile],
      ["Father / Guardian Name", selectedStudent.father], ["Session", "2026-2027"],
    ];
    const printWindow = window.open("", "_blank", "width=900,height=700");
    if (!printWindow) return;
    printWindow.document.write(`<!doctype html><html><head><title>Admission Form - ${value(selectedStudent.name)}</title><style>body{font:14px Arial,sans-serif;color:#17243a;margin:32px}.header{text-align:center;background:#1764f5;color:#fff;padding:18px;border-radius:8px}.student{display:flex;gap:20px;align-items:center;margin:22px 0}.student img{width:120px;height:140px;object-fit:cover;border:1px solid #ddd;border-radius:6px}.grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}.field{border:1px solid #dbe2ec;padding:10px}.label{font-weight:bold;color:#64748b;font-size:11px;text-transform:uppercase}.value{margin-top:5px}.sign{display:flex;justify-content:space-between;margin-top:80px}.sign div{border-top:1px solid #777;padding-top:8px;width:30%;text-align:center}@media print{body{margin:18mm}}</style></head><body><div class="header"><h1>Sunrises Public School</h1><div>Student Admission Form · Session 2026-2027</div></div><div class="student"><img src="${value(photoUrl)}" alt="Student photo"><div><h2>${value(selectedStudent.name)}</h2><div>Admission No. ${value(selectedStudent.sats)}</div><div>${value(selectedStudent.className)} - ${value(selectedStudent.section)} · Roll ${value(selectedStudent.roll)}</div></div></div><div class="grid">${fields.map(([label, fieldValue]) => `<div class="field"><div class="label">${value(label)}</div><div class="value">${value(fieldValue)}</div></div>`).join("")}</div><div class="sign"><div>Parent / Guardian Signature</div><div>School Seal</div><div>Principal Signature</div></div><script>window.onload=()=>window.print()</script></body></html>`);
    printWindow.document.close();
  };

  if (!selectedStudent) return <div className="space-y-4">
    <Panel title="Select Criteria"><div className="grid gap-4 md:grid-cols-3"><Field label="Class"><select className={inputClass}><option>All Classes</option><option>Nursery</option><option>LKG</option><option>UKG</option></select></Field><Field label="Section"><select className={inputClass}><option>All Sections</option><option>A</option><option>B</option></select></Field><Field label="Search By Keyword"><input className={inputClass} placeholder="Student name, roll number, SATS number..." /></Field></div></Panel>
    <Panel title={`Student List (${students.length})`}><div className="mb-4 flex flex-wrap items-center justify-between gap-3"><div className="flex gap-2"><button type="button" onClick={() => setView("list")} className={`rounded-lg px-3 py-2 text-xs font-bold ${view === "list" ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50"}`}>List View</button><button type="button" onClick={() => setView("details")} className={`rounded-lg px-3 py-2 text-xs font-bold ${view === "details" ? "bg-blue-50 text-blue-700" : "text-slate-500 hover:bg-slate-50"}`}>Details View</button></div><input className="h-9 w-full max-w-xs rounded-lg border border-slate-200 px-3 text-xs" placeholder="Search students..." /></div>
      <div className={`overflow-x-auto ${view === "list" ? "" : "hidden"}`}><table className="w-full min-w-[980px] text-left text-xs"><thead className="bg-slate-50 text-[10px] uppercase text-slate-500"><tr>{["SATS No.", "Student Name", "Roll No.", "Class", "Father Name", "Date of Birth", "Gender", "Category", "Mobile Number", "Action"].map((heading) => <th key={heading} className="px-3 py-3">{heading}</th>)}</tr></thead><tbody>{students.map((student) => <tr key={student.sats} onClick={() => openProfile(student)} className="cursor-pointer border-b border-slate-100 odd:bg-white even:bg-slate-50/70 hover:bg-blue-50/60"><td className="px-3 py-2 text-slate-500">{student.sats}</td><td className="px-3 py-2"><button type="button" onClick={(event) => { event.stopPropagation(); openProfile(student); }} className="flex items-center gap-2 text-left font-semibold text-cyan-700"><span className="size-9 overflow-hidden rounded-md"><StudentPortrait student={student} photo={photos[student.sats]} /></span>{student.name}</button></td><td className="px-3 py-3">{student.roll}</td><td className="px-3 py-3">{student.className} ({student.section})</td><td className="px-3 py-3">{student.father}</td><td className="px-3 py-3">{student.dob}</td><td className="px-3 py-3">{student.gender}</td><td className="px-3 py-3">{student.category}</td><td className="px-3 py-3">{student.mobile}</td><td className="px-3 py-2" onClick={(event) => event.stopPropagation()}><div className="flex items-center gap-1"><button type="button" title="Open profile" aria-label={`Open ${student.name} profile`} onClick={() => openProfile(student)} className="grid size-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700"><Eye size={15} /></button><button type="button" title="Edit student" aria-label={`Edit ${student.name}`} onClick={() => openProfile(student, true)} className="grid size-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700"><Pencil size={14} /></button></div></td></tr>)}</tbody></table></div>
      <div className={`grid gap-4 md:grid-cols-2 ${view === "details" ? "" : "hidden"}`}>{students.map((student) => <article key={student.sats} onClick={() => openProfile(student)} className="cursor-pointer rounded-xl border border-slate-200 bg-white p-4 transition-shadow hover:shadow-md"><div className="flex items-start gap-4"><div className="size-24 shrink-0 overflow-hidden rounded-xl"><StudentPortrait student={student} photo={photos[student.sats]} /></div><div className="min-w-0 flex-1"><div className="flex flex-wrap items-start justify-between gap-2"><div><h3 className="text-base font-bold text-cyan-700">{student.name}</h3><p className="mt-0.5 text-[11px] text-slate-500">Admission No. {student.sats} · Roll No. {student.roll}</p></div><div className="flex gap-1" onClick={(event) => event.stopPropagation()}><button type="button" title="Open profile" onClick={() => openProfile(student)} className="grid size-8 place-items-center rounded-lg border text-slate-600 hover:bg-blue-50"><Eye size={15} /></button><button type="button" title="Edit student" onClick={() => openProfile(student, true)} className="grid size-8 place-items-center rounded-lg border text-slate-600 hover:bg-blue-50"><Pencil size={14} /></button></div></div><div className="mt-3 grid gap-x-5 gap-y-2 text-xs sm:grid-cols-2"><p><span className="text-slate-400">Class / Section:</span> {student.className} / {student.section}</p><p><span className="text-slate-400">Date of Birth:</span> {student.dob}</p><p><span className="text-slate-400">Gender:</span> {student.gender}</p><p><span className="text-slate-400">Category:</span> {student.category}</p><p><span className="text-slate-400">Father / Guardian:</span> {student.father}</p><p><span className="text-slate-400">Mobile:</span> {student.mobile}</p><p><span className="text-slate-400">Email:</span> {student.email || "—"}</p><p><span className="text-slate-400">Address:</span> {student.address || "Bareilly, Uttar Pradesh"}</p></div></div></div></article>)}</div>
    </Panel>
  </div>;

  const profileFields = profileTab === "Personal"
    ? [["Date of Birth", selectedStudent.dob], ["Gender", selectedStudent.gender], ["Category", selectedStudent.category], ["Admission Date", "2026-04-01"], ["Mobile Number", selectedStudent.mobile], ["Email", selectedStudent.email || "—"], ["Current Address", selectedStudent.address || "Bareilly, Uttar Pradesh"], ["Permanent Address", selectedStudent.address || "Bareilly, Uttar Pradesh"]]
    : profileTab === "Academic" ? [["Admission Number", selectedStudent.sats], ["Roll Number", selectedStudent.roll], ["Class", selectedStudent.className], ["Section", selectedStudent.section], ["Session", "2026-2027"], ["Status", "Active"]]
      : profileTab === "Fees" ? [["Fee Balance", "₹0.00"], ["Last Payment", "No payment record"], ["Fee Group", "Standard"]]
        : profileTab === "Attendance" ? [["Total Present", "0"], ["Total Late", "0"], ["Total Absent", "0"], ["Total Half Day", "0"], ["Total Holiday", "0"]]
          : profileTab === "Documents" ? [["Admission Form", "Available for download below"], ["Student Documents", "No documents uploaded"]]
            : profileTab === "Timeline" ? [["Admission Created", "2026-04-01"], ["Latest Activity", "Student profile added"]]
              : [["Behaviour Score", "—"], ["Teacher Notes", "No behaviour records"]];
  const editFields = [["name", "Full Name"], ["father", "Father / Guardian Name"], ["dob", "Date of Birth"], ["gender", "Gender"], ["category", "Category"], ["mobile", "Mobile Number"], ["email", "Email"], ["address", "Address"]];
  return <div className="space-y-4">
    <button type="button" onClick={() => { setSelectedId(""); setEditing(false); }} className="flex items-center gap-2 text-xs font-semibold text-blue-700 hover:underline">← Back to student list</button>
    <section className="rounded-2xl bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#3b82f6] p-5 text-white shadow-lg sm:p-7"><div className="grid grid-cols-1 gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center"><div className="flex min-w-0 items-center gap-4"><div className="size-24 shrink-0 overflow-hidden rounded-full border-4 border-white/70 shadow-lg"><StudentPortrait student={selectedStudent} photo={photos[selectedStudent.sats]} /></div><div><h2 className="text-2xl font-extrabold">{selectedStudent.name}</h2><p className="mt-1 text-sm text-blue-100">{selectedStudent.sats} · {selectedStudent.className} - {selectedStudent.section} · Roll: {selectedStudent.roll} · 2026-2027</p><div className="mt-3 flex flex-wrap gap-2 text-[10px] font-bold"><span className="rounded-lg bg-white/15 px-3 py-2">0% SCHOOL ATT.</span><span className="rounded-lg bg-white/15 px-3 py-2">₹0 FEE BALANCE</span><span className="rounded-lg bg-white/15 px-3 py-2">0 LIBRARY BOOKS</span><span className="rounded-lg bg-white/15 px-3 py-2">HOSTEL —</span></div></div></div><div className="justify-self-center"><StudentIdentifiers student={selectedStudent} compact onQrClick={() => setQrOpen(true)} /></div><div className="flex gap-2 md:justify-self-end"><button type="button" onClick={() => { setDraft({ ...selectedStudent }); setEditing(true); }} className="flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold hover:bg-white/20"><Pencil size={14} /> Edit</button><button type="button" onClick={printAdmissionForm} className="flex items-center gap-1.5 rounded-lg border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold hover:bg-white/20"><Printer size={14} /> Print</button></div></div></section>
    {qrOpen && <div className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/55 p-4" role="dialog" aria-modal="true" aria-label={`QR code for ${selectedStudent.name}`} onClick={() => setQrOpen(false)}><div className="w-full max-w-sm rounded-2xl bg-white p-5 text-center shadow-2xl" onClick={(event) => event.stopPropagation()}><div className="mb-3 flex items-center justify-between"><h3 className="font-bold text-slate-800">Student QR Code</h3><button type="button" onClick={() => setQrOpen(false)} aria-label="Close QR code" className="rounded-lg px-2 py-1 text-lg text-slate-500 hover:bg-slate-100">×</button></div><div className="mx-auto grid size-56 place-items-center rounded-xl border border-slate-200 bg-white"><StudentQrGraphic student={selectedStudent} size="size-48" /></div><p className="mt-3 font-semibold text-slate-800">{selectedStudent.name}</p><p className="mt-1 font-mono text-sm tracking-wider text-slate-500">{selectedStudent.sats}</p></div></div>}
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"><div className="flex gap-1 overflow-x-auto border-b border-slate-200 px-3">{["Personal", "Academic", "Attendance", "Fees", "Documents", "Timeline", "Behaviour"].map((tab) => <button type="button" key={tab} onClick={() => setProfileTab(tab)} className={`shrink-0 border-b-2 px-4 py-3 text-xs font-bold ${profileTab === tab ? "border-blue-600 text-blue-700" : "border-transparent text-slate-500 hover:text-blue-700"}`}>{tab}</button>)}</div>
      {editing ? <div className="p-5"><h3 className="mb-4 text-base font-bold text-slate-800">Edit Student Profile</h3><div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{editFields.map(([key, label]) => <Field key={key} label={label}><input className={inputClass} type="text" value={draft?.[key] || ""} onChange={(event) => setDraft((current) => ({ ...current, [key]: event.target.value }))} /></Field>)}</div><div className="mt-5 flex justify-end gap-2"><button type="button" onClick={() => setEditing(false)} className="rounded-lg border px-4 py-2 text-xs font-semibold text-slate-600">Cancel</button><button type="button" onClick={saveProfile} className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white"><Save size={14} /> Save Changes</button></div></div> : <div className="grid gap-4 p-5 lg:grid-cols-2">{(profileTab === "Personal" ? ["Basic Information", "Parent / Guardian Information"] : [profileTab, `${profileTab} Details`]).map((heading, index) => <div key={heading} className="overflow-hidden rounded-xl border border-slate-200"><h3 className="border-b border-slate-100 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-700">{heading}</h3><dl>{(index === 0 ? profileFields : profileTab === "Personal" ? [["Father's Name", selectedStudent.father], ["Father's Phone", selectedStudent.mobile], ["Mother's Name", "—"], ["Guardian Relation", "Father"]] : profileFields.slice(Math.ceil(profileFields.length / 2))).map(([label, value]) => <div key={label} className="grid grid-cols-[minmax(110px,1fr)_2fr] border-b border-slate-100 px-4 py-3 text-xs last:border-0 odd:bg-white even:bg-slate-50/60"><dt className="text-slate-500">{label}</dt><dd className="font-medium text-slate-700">{value || "—"}</dd></div>)}</dl></div>)}</div>}
      {saved && <p className="mx-5 mb-4 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">Student profile updated.</p>}
    </section>
    <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><div><h3 className="font-bold text-slate-800">Student Admission Form</h3><p className="mt-1 text-xs text-slate-500">Download or print the form with {selectedStudent.name}&apos;s details.</p></div><button type="button" onClick={printAdmissionForm} className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-xs font-bold text-white shadow-md hover:bg-blue-700"><Download size={15} /> Download Admission Form</button></section>
  </div>;
}

function StudentPhotosDemoScreen({ photos, setPhoto }) {
  const [className, setClassName] = useState("All Classes");
  const [section, setSection] = useState("All Sections");
  const [visible, setVisible] = useState(true);
  const students = visible ? DEMO_STUDENTS.filter((student) => (className === "All Classes" || student.className === className) && (section === "All Sections" || student.section === section)) : [];
  const handleUpload = (id, file) => { if (file) setPhoto((current) => ({ ...current, [id]: URL.createObjectURL(file) })); };
  return <div className="space-y-4">
    <Panel title="Select Criteria"><div className="grid items-end gap-4 md:grid-cols-[1fr_1fr_auto]">
      <Field label="Class"><select className={inputClass} value={className} onChange={(event) => setClassName(event.target.value)}>{["All Classes", "Nursery", "LKG", "UKG"].map((item) => <option key={item}>{item}</option>)}</select></Field>
      <Field label="Section"><select className={inputClass} value={section} onChange={(event) => setSection(event.target.value)}><option>All Sections</option><option>A</option><option>B</option></select></Field>
      <button type="button" onClick={() => setVisible(true)} className="h-10 rounded-xl bg-blue-600 px-8 text-xs font-bold text-white">Search</button>
    </div><p className="mt-3 text-[11px] text-slate-400">Choose Change or Upload to select a photo. Changes also appear in Student Details.</p></Panel>
    {visible && <Panel title="Student Photos"><div className="mb-4 flex gap-2 text-[11px]"><span className="rounded-full bg-slate-100 px-3 py-1.5">Total: {students.length}</span><span className="rounded-full bg-emerald-50 px-3 py-1.5 text-emerald-700">Photos updated: {students.filter((student) => photos[student.sats]).length}</span></div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5">{students.map((student) => <article key={student.sats} className="rounded-xl border border-slate-200 p-3 text-center"><div className="mx-auto h-40 w-full max-w-40 overflow-hidden rounded-lg bg-slate-100"><StudentPortrait student={student} photo={photos[student.sats]} /></div><p className="mt-2 truncate text-sm font-bold text-slate-700">{student.name}</p><p className="mt-1 text-[10px] text-slate-400">{student.className} ({student.section}) · Roll {student.roll}</p><label className="mt-3 block cursor-pointer rounded-lg bg-blue-600 px-3 py-2 text-xs font-bold text-white hover:bg-blue-700">{photos[student.sats] ? "Change Photo" : "Upload Photo"}<input type="file" accept="image/*" className="sr-only" onChange={(event) => handleUpload(student.sats, event.target.files?.[0])} /></label></article>)}</div>
    </Panel>}
  </div>;
}

function makeStudentQrPattern(value) {
  const size = 25;
  const grid = Array.from({ length: size }, () => Array(size).fill(null));
  const addFinder = (left, top) => {
    for (let y = -1; y <= 7; y += 1) for (let x = -1; x <= 7; x += 1) {
      const px = left + x;
      const py = top + y;
      if (px < 0 || py < 0 || px >= size || py >= size) continue;
      const inFinder = x >= 0 && x <= 6 && y >= 0 && y <= 6;
      grid[py][px] = inFinder && (x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4));
    }
  };
  addFinder(0, 0);
  addFinder(size - 7, 0);
  addFinder(0, size - 7);
  for (let i = 8; i < size - 8; i += 1) {
    grid[6][i] = i % 2 === 0;
    grid[i][6] = i % 2 === 0;
  }
  let seed = [...value].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 2166136261);
  for (let y = 0; y < size; y += 1) for (let x = 0; x < size; x += 1) {
    if (grid[y][x] !== null) continue;
    seed = (seed * 1664525 + 1013904223) >>> 0;
    grid[y][x] = ((seed >>> 29) & 1) === 1;
  }
  return grid;
}

function StudentQrGraphic({ student, size = "size-32" }) {
  const qr = makeStudentQrPattern(student.sats);
  return <svg viewBox="0 0 33 33" role="img" aria-label={`QR code for ${student.sats}`} className={`bg-white ${size}`}><rect width="33" height="33" fill="white" />{qr.flatMap((row, y) => row.map((dark, x) => dark ? <rect key={`${x}-${y}`} x={x + 4} y={y + 4} width="1" height="1" fill="#111827" /> : null))}</svg>;
}

function StudentIdentifiers({ student, compact = false, onQrClick }) {
  const bars = ["101", ...student.sats.split("").map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")), "101"].join("");
  const containerClass = compact ? "flex items-end gap-2" : "grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2";
  const cardClass = compact ? "rounded-lg bg-white p-2 text-center text-slate-700 shadow-sm" : "rounded-xl border border-slate-100 p-4 text-center";
  return <section className={containerClass}>
    <div className={cardClass}><h3 className={compact ? "text-[9px] font-bold" : "text-sm font-bold"}>Barcode</h3><svg viewBox={`0 0 ${bars.length * 2} 54`} role="img" aria-label={`Barcode for ${student.sats}`} className={`mx-auto mt-1 w-full ${compact ? "h-8 max-w-28" : "h-16 max-w-sm"}`}><rect width="100%" height="100%" fill="white" />{bars.split("").map((bit, index) => bit === "1" ? <rect key={index} x={index * 2} y="2" width="2" height="39" fill="#111827" /> : null)}</svg><p className={compact ? "mt-0.5 font-mono text-[8px]" : "mt-1 font-mono text-xs tracking-widest"}>{student.sats}</p></div>
    <button type="button" onClick={onQrClick} aria-label={`Enlarge QR code for ${student.name}`} title="Click to enlarge QR code" className={`${cardClass} cursor-zoom-in transition-transform hover:scale-105`}><h3 className={compact ? "text-[9px] font-bold" : "text-sm font-bold"}>QR Code</h3><StudentQrGraphic student={student} size={compact ? "size-12" : "size-32"} />{!compact && <p className="mt-1 font-mono text-xs tracking-widest text-slate-600">{student.sats}</p>}</button>
  </section>;
}

const ADMISSION_TABS = ["Basic", "Transport", "Hostel", "Fees", "Parent", "Address", "Miscellaneous", "Documents"];
function StudentAdmissionScreen() {
  const [tab, setTab] = useState(0);
  const [saved, setSaved] = useState(false);
  const sectionTitle = ["Student Admission", "Transport Details", "Hostel Details", "Fees Details", "Parent Guardian Detail", "Student Address Details", "Miscellaneous Details", "Upload Documents"][tab];
  const fieldsByTab = [
    [["Roll Number"], ["Class", true], ["Section", true], ["First Name", true], ["Last Name"], ["Gender", true], ["Date of Birth", true], ["Category"], ["Religion"], ["Mobile Number"], ["Email"], ["Admission Date"]],
    [["Route List"], ["Pickup Point"], ["Fees Month"]],
    [["Hostel"], ["Room Type"], ["Hostel Room"]],
    [["Fees Group"], ["Fees Type"], ["Transport Fees Amount"]],
    [["Father Name"], ["Mother Name"], ["Mother Phone"], ["Guardian Relation"]],
    [["Current Address"], ["Permanent Address"]],
    [["Bank Account Number"], ["Bank Name"], ["IFSC Code"], ["National Identification Number"], ["Local Identification Number"], ["Previous School Details"], ["Note"]],
    [["Document Title"], ["Choose Document File"]],
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-center gap-1 border-b border-slate-200 bg-slate-50 px-3 pt-2">{ADMISSION_TABS.map((label, index) => <button key={label} type="button" onClick={() => { setTab(index); setSaved(false); }} className={`border-t-2 px-3 py-3 text-xs font-semibold transition-colors ${tab === index ? "border-orange-500 bg-white text-cyan-700" : "border-transparent text-slate-500 hover:text-blue-700"}`}>{label}</button>)}</div>
      <div className="flex items-center justify-between gap-3 border-b border-slate-100 px-4 py-3"><h2 className="font-semibold text-slate-700">{sectionTitle}</h2><button type="button" className="rounded-lg bg-blue-600 px-3 py-2 text-[11px] font-bold text-white">⬆ Import Student</button></div>
      <div className="grid gap-x-4 gap-y-5 p-4 sm:grid-cols-2 xl:grid-cols-4">{fieldsByTab[tab].map(([label, required]) => <Field key={label} label={label} required={required}>{label.includes("Choose") || label.includes("Document") ? <input type="file" className="w-full text-xs text-slate-500 file:mr-2 file:rounded-lg file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-xs file:font-bold file:text-blue-700" /> : label === "Class" || label === "Section" || label === "Gender" || label === "Category" || label.includes("Route") || label.includes("Pickup") || label === "Hostel" || label.includes("Room") || label.includes("Fees") ? <select className={inputClass}><option>Select</option>{(label === "Class" ? ["Nursery", "LKG", "UKG", "Class 1"] : label === "Section" ? ["A", "B"] : label === "Gender" ? ["Female", "Male", "Other"] : []).map((option) => <option key={option}>{option}</option>)}</select> : <input className={inputClass} type={label.includes("Date") ? "date" : "text"} />}</Field>)}</div>
      {saved && <p className="mx-4 mb-3 rounded-lg bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">Admission form saved.</p>}
      <div className="flex justify-end gap-2 border-t border-slate-100 p-4"><button type="button" disabled={tab === 0} onClick={() => setTab((current) => Math.max(0, current - 1))} className="rounded-lg border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-600 disabled:opacity-40">Back</button>{tab < ADMISSION_TABS.length - 1 ? <button type="button" onClick={() => setTab((current) => Math.min(ADMISSION_TABS.length - 1, current + 1))} className="rounded-lg bg-blue-600 px-4 py-2 text-xs font-bold text-white">Next</button> : <button type="button" onClick={() => setSaved(true)} className="rounded-lg bg-emerald-600 px-4 py-2 text-xs font-bold text-white">Save</button>}</div>
    </div>
  );
}

function Sidebar({ expanded, menuSearch, setMenuSearch, active, setActive, activeSubmenu, setActiveSubmenu, role }) {
  const [openModule, setOpenModule] = useState(null);
  const filteredModules = useMemo(
    () => MODULES.filter((module) => module.label.toLowerCase().includes(menuSearch.toLowerCase()) || module.children?.some((child) => child.toLowerCase().includes(menuSearch.toLowerCase()))),
    [menuSearch],
  );

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-[272px] flex-col text-slate-800 shadow-xl transition-[width,transform] duration-200 md:translate-x-0 ${
        expanded ? "translate-x-0 md:w-[272px]" : "-translate-x-full md:translate-x-0 md:w-[76px]"
      }`}
      style={{ background: "#fff", borderRight: `1px solid ${COLORS.border}` }}
    >
      <a href="/" title="Back to Homepage" className="flex h-[70px] shrink-0 items-center gap-3 border-b border-slate-200 px-4 transition-colors hover:bg-slate-50 cursor-pointer">
        <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-lg font-bold shadow-lg shadow-blue-950/30">D</div>
        {expanded && (
          <div className="min-w-0">
            <p className="truncate text-sm font-bold">Sunrises Public School</p>
            <p className="truncate text-[10px] text-slate-500">Bareilly, Uttar Pradesh</p>
          </div>
        )}
      </a>

      {expanded && (
        <div className="px-3 pt-3">
          <label className="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 text-slate-500">
            <Search size={15} />
            <input
              value={menuSearch}
              onChange={(event) => setMenuSearch(event.target.value)}
              placeholder="Search menu..."
              className="w-full bg-transparent text-xs outline-none placeholder:text-slate-400"
            />
          </label>
        </div>
      )}

      <nav className="min-h-0 flex-1 overflow-y-auto px-2 py-4">
        {expanded && <p className="mb-2 px-3 text-[10px] font-bold tracking-[0.18em] text-slate-400">MAIN MENU</p>}
        <div className="space-y-1">
          {filteredModules.map(({ id, label, icon: Icon, children }) => {
            const selected = id === active;
            const isOpen = openModule === id || (menuSearch.length > 0 && children?.some((child) => child.toLowerCase().includes(menuSearch.toLowerCase())));
            return (
              <div key={id}>
                <button
                  type="button"
                  title={!expanded ? label : undefined}
                  onClick={() => {
                    setActive(id);
                    setActiveSubmenu("");
                    if (children) setOpenModule(isOpen && openModule === id ? null : id);
                  }}
                  className={`flex h-11 w-full items-center gap-3 rounded-xl px-3 text-left text-xs font-semibold transition-colors ${
                    selected ? "bg-blue-600 text-white shadow-md shadow-blue-950/20" : "text-slate-700 hover:bg-blue-50"
                  }`}
                >
                  <span className={`grid size-7 shrink-0 place-items-center rounded-lg ${selected ? "bg-emerald-500" : "bg-slate-100 text-slate-600"}`}>
                    <Icon size={16} />
                  </span>
                  {expanded && <span className="min-w-0 flex-1 truncate">{label}</span>}
                  {expanded && children && <ChevronDown size={14} className={`shrink-0 ${selected ? "text-white/80" : "text-slate-400"} transition-transform ${isOpen ? "rotate-180" : ""}`} />}
                </button>
                {expanded && children && isOpen && (
                  <div className="ml-2 mt-1 space-y-0.5 border-l border-slate-200 pl-2">
                    {children.filter((child) => !menuSearch || label.toLowerCase().includes(menuSearch.toLowerCase()) || child.toLowerCase().includes(menuSearch.toLowerCase())).map((child, index) => (
                      <button
                        key={`${child}-${index}`}
                        type="button"
                        onClick={() => { setActive(id); setActiveSubmenu(child); }}
                        className={`flex min-h-9 w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[11px] font-semibold transition-colors ${active === id && activeSubmenu === child ? "bg-blue-50 text-blue-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}
                      >
                        <ChevronRight size={12} className="shrink-0" />
                        <span className="min-w-0 flex-1">{child}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      <div className="shrink-0 border-t border-slate-200 p-3">
        {expanded ? (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-slate-800">
            <p className="text-[10px] font-bold tracking-[0.16em] text-slate-400">SYSTEM INFO</p>
            <div className="mt-3 flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-400">
                <ShieldCheck size={21} />
              </span>
              <div>
                <p className="text-[10px] text-slate-500">Mon, 18 Nov 2026</p>
                <p className="text-base font-bold">11:26 AM</p>
              </div>
            </div>
            <span className="mx-auto mt-3 flex w-fit items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-[10px] font-semibold text-emerald-700">
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
  const [activeSubmenu, setActiveSubmenu] = useState("");
  const [studentPhotos, setStudentPhotos] = useState({});
  const [role, setRole] = useState("Super Admin");
  const [globalSearch, setGlobalSearch] = useState("");

  useEffect(() => {
    let theme = "default";
    try {
      theme = window.localStorage.getItem("school-ecosystem-theme") || "default";
    } catch {
      // Keep the default palette if browser storage is unavailable.
    }
    if (theme === "default") document.documentElement.removeAttribute("data-theme");
    else document.documentElement.setAttribute("data-theme", theme);
  }, []);

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
        activeSubmenu={activeSubmenu}
        setActiveSubmenu={setActiveSubmenu}
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
            <a
              href="/"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
              title="Return to Homepage"
            >
              <Home size={14} />
              <span>Home</span>
            </a>
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
                {active === "dashboard" ? "Dashboard Overview" : activeSubmenu || MODULES.find((module) => module.id === active)?.label}
              </h1>
              <p className="mt-1 text-xs" style={{ color: COLORS.muted }}>Welcome back, {role}. Here&apos;s what&apos;s happening at your school today.</p>
            </div>
            <button type="button" className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-xs font-semibold shadow-sm" style={{ borderColor: COLORS.border }}>
              <CalendarDays size={15} style={{ color: COLORS.blue }} /> This Month <ChevronDown size={13} />
            </button>
          </div>

          {activeSubmenu === "Student Details" ? <StudentProfileManager photos={studentPhotos} />
            : activeSubmenu === "Student Photos" ? <StudentPhotosDemoScreen photos={studentPhotos} setPhoto={setStudentPhotos} />
              : activeSubmenu === "Student Admission" ? <StudentAdmissionScreen />
                : <>
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
                </>}
        </main>
      </div>
    </div>
  );
}
