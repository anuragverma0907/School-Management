import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  LogIn,
  GraduationCap,
  Users,
  Wallet,
  FileSpreadsheet,
  QrCode,
  MonitorPlay,
  Briefcase,
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Play,
  Check,
  MapPin,
  FileText,
  Search,
  Calendar,
  BookOpen,
  Award,
  MessageCircle,
  X,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  Sparkles,
  ExternalLink,
  Menu,
  UserCheck,
  Lock
} from 'lucide-react';

// ============================================================================
// MOCK DATA & CONSTANTS
// ============================================================================

const HERO_SLIDES = [
  {
    id: 1,
    badge: 'All-in-One School Management Solution',
    titleMain: 'Simplify School Operations',
    titleAccent: 'Build a Better Tomorrow',
    subtitle:
      'Manage Students, Staff, Fees, Exams, Attendance, LMS and more — all in one powerful platform.',
    tagline: 'Smart Education, Brighter Future',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    badge: 'Next-Gen Digital Campus Platform',
    titleMain: 'Empowering Educators',
    titleAccent: 'Inspiring Every Student',
    subtitle:
      'Real-time parent communication, automated fee collection, smart QR attendance, and interactive e-learning.',
    tagline: 'Connected Campus • Seamless Learning',
    image:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 3,
    badge: 'Trusted by Modern Institutions',
    titleMain: 'Seamless Admissions',
    titleAccent: 'Transparent Administration',
    subtitle:
      'Paperless online admissions, instant report cards, transport tracking, and comprehensive analytics.',
    tagline: 'Excellence in Every Classroom',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80'
  }
];

const ERP_MODULES = [
  {
    id: 'students',
    label: 'Student Management',
    icon: Users,
    bg: 'bg-blue-500',
    lightBg: 'bg-blue-50',
    text: 'text-blue-600',
    description:
      'Complete digital student lifecycle from online admission, profile records, ID card generation, to alumni tracking.',
    highlights: ['360° Student Profiles', 'Digital ID Cards', 'Parent Portal Sync']
  },
  {
    id: 'fees',
    label: 'Fees & Accounts',
    icon: Wallet,
    bg: 'bg-emerald-500',
    lightBg: 'bg-emerald-50',
    text: 'text-emerald-600',
    description:
      'Automated fee structure setup, instant UPI/Card payment receipts, defaulter reminders, and ledger reconciliation.',
    highlights: ['Instant E-Receipts', 'Automated SMS Alerts', 'Installment Tracking']
  },
  {
    id: 'exams',
    label: 'Exams & Results',
    icon: FileSpreadsheet,
    bg: 'bg-indigo-500',
    lightBg: 'bg-indigo-50',
    text: 'text-indigo-600',
    description:
      'Flexible CCE/CBSE/ICSE grading schemes, online mark entry, automated rank calculation, and PDF report cards.',
    highlights: ['Custom Report Cards', 'Performance Analytics', 'Online Assessments']
  },
  {
    id: 'attendance',
    label: 'Attendance & QR',
    icon: QrCode,
    bg: 'bg-amber-500',
    lightBg: 'bg-amber-50',
    text: 'text-amber-600',
    description:
      'Smart QR & biometric attendance with real-time push notifications sent directly to parents upon check-in.',
    highlights: ['Instant Parent Alerts', 'Monthly Attendance Logs', 'Leave Approvals']
  },
  {
    id: 'lms',
    label: 'LMS & Live Classes',
    icon: MonitorPlay,
    bg: 'bg-cyan-500',
    lightBg: 'bg-cyan-50',
    text: 'text-cyan-600',
    description:
      'Share study materials, recorded lectures, daily homework assignments, and host integrated live interactive classes.',
    highlights: ['Homework Submission', 'Video Lectures', 'Digital Library']
  },
  {
    id: 'hrm',
    label: 'Staff & HRM',
    icon: Briefcase,
    bg: 'bg-rose-500',
    lightBg: 'bg-rose-50',
    text: 'text-rose-600',
    description:
      'Manage faculty profiles, timetable allocation, biometric staff attendance, leave management, and automated payroll.',
    highlights: ['Auto-Payroll & Payslips', 'Smart Timetable', 'Faculty Appraisal']
  }
];

const STAFF_MEMBERS = [
  {
    id: 1,
    name: 'Neha Gupta',
    role: 'English Teacher',
    qualification: 'M.A. English, B.Ed • 8+ Yrs Exp.',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Sweta',
    role: 'Hindi Teacher',
    qualification: 'M.A. Hindi Literature, B.Ed • 10+ Yrs Exp.',
    avatar:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Ankit Sharma',
    role: 'Math Teacher',
    qualification: 'M.Sc. Mathematics, B.Ed • 7+ Yrs Exp.',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  }
];

const EVENTS_NEWS = [
  {
    id: 1,
    title: "Teachers' Day",
    date: 'September 5, 2026',
    category: 'Celebration',
    bannerTitle: "Happy Teachers' Day",
    bannerSubtitle: 'Better Teachers Build a Brighter Future',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    summary:
      'Students of Demo School organized a heartwarming cultural tribute honoring our dedicated educators for their tireless mentorship and guidance.'
  },
  {
    id: 2,
    title: 'Independence Day Celebration at Demo School',
    date: 'August 15, 2026',
    category: 'National Event',
    bannerTitle: '15 AUGUST • INDEPENDENCE DAY',
    bannerSubtitle: 'NCC Parade & Cultural Showcase',
    image:
      'https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80',
    summary:
      'Flag hoisting ceremony followed by a disciplined NCC cadet march-past, patriotic songs, and inspiring speeches celebrating the spirit of freedom.'
  },
  {
    id: 3,
    title: 'Congratulations to Our MYP E-Assessment Achievers!',
    date: 'July 28, 2026',
    category: 'Academic Excellence',
    bannerTitle: 'Congratulations! Our E-Assessment Achievers',
    bannerSubtitle: 'Outstanding Grade 10 Board & Assessment Results',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    summary:
      'We proudly congratulate our Grade 10 scholars for achieving stellar distinctions across STEM, Humanities, and Languages in the annual assessments.'
  }
];

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Main Academic Campus',
    category: 'Campus',
    image:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80',
    caption: 'Modern smart-class enabled academic block surrounded by lush greenery.'
  },
  {
    id: 2,
    title: 'Evening Campus View',
    category: 'Campus',
    image:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    caption: 'State-of-the-art infrastructure designed for holistic student development.'
  },
  {
    id: 3,
    title: 'Smart ERP & Digital Lab',
    category: 'Academics',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    caption: 'Integrated School ERP dashboards empowering teachers, students, and parents.'
  },
  {
    id: 4,
    title: 'Academic Certificates & Records',
    category: 'Events',
    image:
      'https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=800&q=80',
    caption: 'Digitally verifiable birth, transfer, and merit certificates issued seamlessly.'
  }
];

const IQ_QUESTIONS = [
  {
    q: 'Which number comes next in the sequence: 2, 6, 12, 20, 30, ?',
    options: ['38', '40', '42', '44'],
    answer: 2
  },
  {
    q: 'If all Bloops are Razzies and all Razzies are Lazzies, are all Bloops definitely Lazzies?',
    options: ['Yes', 'No', 'Cannot be determined', 'Only on Tuesdays'],
    answer: 0
  },
  {
    q: 'A bat and a ball cost ₹110 in total. The bat costs ₹100 more than the ball. How much does the ball cost?',
    options: ['₹10', '₹5', '₹1', '₹15'],
    answer: 1
  }
];

const NAV_ITEMS = [
  { id: 'HOME', label: 'HOME' },
  { id: 'ABOUT US', label: 'ABOUT US' },
  { id: 'ACADEMICS', label: 'ACADEMICS' },
  { id: 'GALLERY', label: 'GALLERY' },
  { id: 'NEWS & EVENTS', label: 'NEWS & EVENTS' },
  { id: 'CONTACT US', label: 'CONTACT US' },
  { id: 'ONLINE ADMISSION', label: 'ONLINE ADMISSION' }
];

// ============================================================================
// MAIN APPLICATION COMPONENT
// ============================================================================

export default function App() {
  // Navigation & UI State
  const [activePage, setActivePage] = useState('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);

  // Modals & Drawers State
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loginRole, setLoginRole] = useState('Student');
  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightboxItem, setLightboxItem] = useState(null);
  const [iqModalOpen, setIqModalOpen] = useState(false);
  const [iqStep, setIqStep] = useState(0);
  const [iqScore, setIqScore] = useState(0);
  const [iqFinished, setIqFinished] = useState(false);

  // Chat Widget State
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome to Demo School! How can we help you with admissions, fees, or ERP login today?'
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Gallery Filter State
  const [galleryFilter, setGalleryFilter] = useState('All');

  // Online Admission State
  const [statusModalOpen, setStatusModalOpen] = useState(false);
  const [statusSearchId, setStatusSearchId] = useState('');
  const [statusResult, setStatusResult] = useState(null);

  const [submittedApplications, setSubmittedApplications] = useState([
    {
      id: 'DS-2026-8492',
      studentName: 'Aarav Verma',
      classApplying: 'Class 5',
      status: 'Under Document Verification',
      date: '2026-11-12'
    }
  ]);

  const [admissionForm, setAdmissionForm] = useState({
    studentClass: '',
    section: '',
    firstName: '',
    lastName: '',
    gender: '',
    dob: '',
    mobile: '',
    email: '',
    category: '',
    religion: '',
    currentAddress: '',
    currentCity: '',
    currentState: 'Uttar Pradesh',
    currentPincode: '',
    sameAsCurrent: false,
    permanentAddress: '',
    permanentCity: '',
    permanentState: 'Uttar Pradesh',
    permanentPincode: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [submittedRefId, setSubmittedRefId] = useState(null);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Auto-advance hero carousel
  useEffect(() => {
    if (activePage !== 'HOME') return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [activePage]);

  // Navigate helper with smooth scroll to top
  const navigateTo = (page) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync permanent address when checkbox toggled
  const handleSameAddressToggle = (checked) => {
    setAdmissionForm((prev) => ({
      ...prev,
      sameAsCurrent: checked,
      permanentAddress: checked ? prev.currentAddress : prev.permanentAddress,
      permanentCity: checked ? prev.currentCity : prev.permanentCity,
      permanentState: checked ? prev.currentState : prev.permanentState,
      permanentPincode: checked ? prev.currentPincode : prev.permanentPincode
    }));
  };

  const handleCurrentAddressChange = (field, value) => {
    setAdmissionForm((prev) => {
      const updated = { ...prev, [field]: value };
      if (prev.sameAsCurrent) {
        if (field === 'currentAddress') updated.permanentAddress = value;
        if (field === 'currentCity') updated.permanentCity = value;
        if (field === 'currentState') updated.permanentState = value;
        if (field === 'currentPincode') updated.permanentPincode = value;
      }
      return updated;
    });
  };

  // Admission Form Submit
  const handleAdmissionSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!admissionForm.studentClass) errors.studentClass = 'Class is required';
    if (!admissionForm.section) errors.section = 'Section is required';
    if (!admissionForm.firstName.trim()) errors.firstName = 'First Name is required';
    if (!admissionForm.gender) errors.gender = 'Gender is required';
    if (!admissionForm.dob) errors.dob = 'Date of Birth is required';
    if (!admissionForm.email.trim()) errors.email = 'Email is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    const newId = `DS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const newApp = {
      id: newId,
      studentName: `${admissionForm.firstName} ${admissionForm.lastName}`.trim(),
      classApplying: admissionForm.studentClass,
      status: 'Application Received • Pending Interaction',
      date: new Date().toISOString().split('T')[0]
    };
    setSubmittedApplications((prev) => [newApp, ...prev]);
    setSubmittedRefId(newId);
  };

  // Check Application Status
  const handleStatusLookup = (e) => {
    e.preventDefault();
    const query = statusSearchId.trim().toUpperCase();
    const found = submittedApplications.find((app) => app.id === query);
    if (found) {
      setStatusResult({ found: true, data: found });
    } else {
      setStatusResult({
        found: false,
        message: 'No application found with this ID. Try "DS-2026-8492" or submit a new form.'
      });
    }
  };

  // Chat Send
  const handleChatSend = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setChatInput('');

    setTimeout(() => {
      let reply =
        'Thank you for reaching out! Our admissions desk at Jhansi, Uttar Pradesh will assist you shortly, or you can call us at 34356789999998.';
      if (userMsg.toLowerCase().includes('admission')) {
        reply =
          'Admissions for Session 2026–27 are open! Click "ONLINE ADMISSION" in the top bar to fill out the digital registration form.';
      } else if (userMsg.toLowerCase().includes('fee')) {
        reply =
          'You can view and pay school fees online via the ERP Login portal using UPI, Net Banking, or Cards.';
      } else if (userMsg.toLowerCase().includes('login')) {
        reply =
          'Click the orange "Login" button at the top right to access the Student, Staff, or Admin ERP Dashboard.';
      }
      setChatMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 500);
  };

  // IQ Challenge Handler
  const handleIqAnswer = (idx) => {
    if (idx === IQ_QUESTIONS[iqStep].answer) {
      setIqScore((s) => s + 1);
    }
    if (iqStep + 1 < IQ_QUESTIONS.length) {
      setIqStep((s) => s + 1);
    } else {
      setIqFinished(true);
    }
  };

  const resetIqChallenge = () => {
    setIqStep(0);
    setIqScore(0);
    setIqFinished(false);
    setIqModalOpen(true);
  };

  // Login Handler
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginSuccess(true);
    setTimeout(() => {
      setLoginSuccess(false);
      setLoginModalOpen(false);
      setLoginCreds({ username: '', password: '' });
      window.location.href = '/dashboard';
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F7FC] text-slate-800 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* ====================================================================
          1. TOP UTILITY BAR & STICKY MAIN NAVIGATION HEADER
      ==================================================================== */}
      <header className="sticky top-0 z-40 shadow-md">
        {/* Top Utility Bar */}
        <div className="bg-[#162C56] text-white text-xs sm:text-sm border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-end gap-4 sm:gap-6">
            <a
              href="mailto:demo@schoolsathi.in"
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-blue-300" />
              <span className="font-medium">demo@schoolsathi.in</span>
            </a>
            <a
              href="tel:34356789999998"
              className="hidden sm:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-300" />
              <span className="font-medium">34356789999998</span>
            </a>
            <button
              onClick={() => setLoginModalOpen(true)}
              className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-4 py-1 rounded-full text-xs transition-all shadow-sm cursor-pointer"
            >
              Login
            </button>
            <a
              href="/dashboard"
              className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold px-3.5 py-1 rounded-full text-xs transition-all shadow-sm flex items-center gap-1"
            >
              <span>Dashboard</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="bg-[#233D63] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
            {/* Brand Logo */}
            <button
              onClick={() => navigateTo('HOME')}
              className="flex items-center gap-3 text-left group cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-lg bg-[#2563EB] flex items-center justify-center font-extrabold text-white text-sm tracking-wider shadow-md group-hover:scale-105 transition-transform">
                US
              </div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-white">
                Demo School
              </span>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-6">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`relative py-2 text-xs font-bold tracking-wider transition-colors cursor-pointer ${
                      isActive ? 'text-white' : 'text-slate-200 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#F97316] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right CTA Button & Mobile Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateTo('ONLINE ADMISSION')}
                className="hidden sm:inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs tracking-wider px-4 py-2.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>ONLINE ADMISSION</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
                className="lg:hidden p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#1B3152] border-t border-white/10 px-4 pt-2 pb-4 space-y-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigateTo(item.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-bold tracking-wider flex items-center justify-between ${
                      isActive
                        ? 'bg-[#2563EB] text-white'
                        : 'text-slate-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#F97316]" />}
                  </button>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('ONLINE ADMISSION')}
                  className="w-full flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold text-xs py-3 rounded-lg shadow"
                >
                  <FileText className="w-4 h-4" />
                  <span>ONLINE ADMISSION</span>
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* ====================================================================
          2. MAIN PAGE CONTENT ROUTER
      ==================================================================== */}
      <main className="flex-grow">
        {/* ==================================================================
            VIEW A: HOME PAGE
        ================================================================== */}
        {activePage === 'HOME' && (
          <div>
            {/* --------------------------------------------------------------
                HERO CAROUSEL / BANNER (Matches Home.jpeg)
            -------------------------------------------------------------- */}
            <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF5FF] via-[#F8FBFF] to-[#E0EDFF] border-b border-slate-200/80">
              {/* Decorative Right Blue Wave Shape */}
              <div
                aria-hidden="true"
                className="hidden lg:block absolute top-0 right-0 w-[34%] h-full bg-gradient-to-bl from-[#0284C7] via-[#2563EB] to-[#1D4ED8] rounded-bl-[180px] pointer-events-none opacity-95"
              />

              {/* Floating Tagline on Right Wave */}
              <div className="hidden lg:block absolute top-8 right-10 z-10 text-white text-right transform -rotate-6 pointer-events-none select-none">
                <p className="text-xl font-extrabold tracking-wide leading-tight drop-shadow">
                  Smart
                  <br />
                  Education
                  <br />
                  Brighter
                  <br />
                  Future
                </p>
                <div className="mt-1.5 h-1 w-24 bg-white/80 rounded-full ml-auto" />
              </div>

              {/* Left / Right Slider Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                }
                aria-label="Previous Slide"
                className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1B365D] shadow-md items-center justify-center transition-transform hover:scale-105 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
                aria-label="Next Slide"
                className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-white text-[#1B365D] shadow-md items-center justify-center transition-transform hover:scale-105 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12 lg:py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                  {/* Left Column: ERP Branding, Headline, 6 Module Cards, CTA */}
                  <div className="lg:col-span-7 space-y-5">
                    {/* School ERP Sub-brand Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] text-white flex items-center justify-center shadow-md">
                        <GraduationCap className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-2xl font-extrabold tracking-tight leading-none">
                          <span className="text-[#0F172A]">School </span>
                          <span className="text-[#2563EB]">ERP</span>
                        </div>
                        <p className="text-xs font-medium text-slate-600 mt-0.5">
                          Smart School • Connected Future
                        </p>
                      </div>
                    </div>

                    {/* Pill Badge */}
                    <div className="inline-block bg-[#DBEAFE] text-[#1D4ED8] text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full">
                      {HERO_SLIDES[currentSlide].badge}
                    </div>

                    {/* Main Hero Headline */}
                    <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-[1.15]">
                      <span className="block text-[#0F172A]">
                        {HERO_SLIDES[currentSlide].titleMain}
                      </span>
                      <span className="block text-[#1D63ED] mt-1">
                        {HERO_SLIDES[currentSlide].titleAccent}
                      </span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-slate-600 text-sm sm:text-base max-w-xl leading-relaxed font-medium">
                      {HERO_SLIDES[currentSlide].subtitle}
                    </p>

                    {/* 6 Colorful ERP Module Quick-Access Cards */}
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-1">
                      {ERP_MODULES.map((mod) => {
                        const IconComponent = mod.icon;
                        return (
                          <button
                            key={mod.id}
                            onClick={() => setSelectedModule(mod)}
                            className="group flex flex-col items-center text-center focus:outline-none cursor-pointer"
                          >
                            <div
                              className={`w-13 h-13 sm:w-14 sm:h-14 ${mod.bg} rounded-2xl flex items-center justify-center text-white shadow-md group-hover:-translate-y-1 group-hover:shadow-lg transition-all`}
                            >
                              <IconComponent className="w-6 h-6" />
                            </div>
                            <span className="mt-2 text-[11px] font-bold text-slate-800 leading-tight group-hover:text-[#2563EB] transition-colors">
                              {mod.label}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Bottom CTA & Trust Badges */}
                    <div className="pt-3 flex flex-wrap items-center gap-4 sm:gap-6">
                      <button
                        onClick={() => navigateTo('ONLINE ADMISSION')}
                        className="inline-flex items-center gap-2.5 bg-[#1B365D] hover:bg-[#132744] text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all cursor-pointer"
                      >
                        <span>Get Started Today</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 border-l border-slate-300 pl-4 sm:pl-6">
                        <ShieldCheck className="w-5 h-5 text-[#1B365D]" />
                        <span>Secure • Reliable • Scalable</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Student Imagery */}
                  <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-md lg:max-w-none">
                      <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                        <img
                          src={HERO_SLIDES[currentSlide].image}
                          alt="Happy School Students"
                          className="w-full h-[320px] sm:h-[380px] object-cover object-center transition-all duration-700"
                        />
                        <div className="bg-gradient-to-t from-[#0F172A]/85 via-[#0F172A]/30 to-transparent absolute inset-0 flex flex-col justify-end p-6 text-white">
                          <span className="text-xs uppercase tracking-widest text-blue-200 font-bold">
                            Demo School Portal
                          </span>
                          <p className="text-lg font-extrabold mt-0.5">
                            {HERO_SLIDES[currentSlide].tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Carousel Pagination Dots */}
                <div className="flex items-center justify-center gap-2 mt-8">
                  {HERO_SLIDES.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        currentSlide === idx
                          ? 'w-7 bg-[#2563EB]'
                          : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------
                INTERACTIVE LEARNING & IQ VIDEO SECTION (Matches Home2.jpeg)
            -------------------------------------------------------------- */}
            <section className="py-14 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] tracking-tight">
                  Interactive Learning Hub
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-1.5">
                  Building Bright Futures Together
                </p>
              </div>

              {/* Embedded Interactive Video / Quiz Showcase Card */}
              <div
                onClick={resetIqChallenge}
                className="group relative max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-[#F8E7B9] cursor-pointer"
              >
                <div className="relative aspect-video w-full flex flex-col justify-between p-5 sm:p-8 bg-gradient-to-b from-[#F5E0A9] via-[#FDF3D7] to-[#F4D99B]">
                  {/* Top Video Title Bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-[#1B365D] text-white flex items-center justify-center font-bold text-xs shadow">
                        DS
                      </div>
                      <div>
                        <p className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                          Test Your IQ Level in 7 Minutes
                        </p>
                        <p className="text-xs text-slate-600">
                          Demo School Cognitive &amp; Aptitude Series
                        </p>
                      </div>
                    </div>
                    <span className="bg-black/75 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Interactive Quiz
                    </span>
                  </div>

                  {/* Center Bold Graphic & Play Button */}
                  <div className="my-auto text-center z-10 py-4">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">
                      TEST YOUR <span className="text-red-600">IQ</span> LEVEL
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-700 mt-2">
                      Click to launch the interactive student brain-teaser challenge
                    </p>

                    <div className="mt-5 inline-flex items-center justify-center w-16 h-12 rounded-2xl bg-[#FF0000] text-white shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Bottom IQ Spectrum Bar */}
                  <div className="z-10">
                    <div className="h-2.5 w-full rounded-full bg-gradient-to-r from-emerald-500 via-yellow-400 to-red-600 shadow-inner" />
                    <div className="flex justify-between text-[11px] font-bold text-slate-700 mt-1">
                      <span>Beginner</span>
                      <span>Analytical</span>
                      <span>Genius Level</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------
                EXPERIENCE STAFF SECTION (Matches Home3.jpeg)
            -------------------------------------------------------------- */}
            <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">
                  Experience Staff
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-1.5">
                  Quality education with modern campus facilities
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {STAFF_MEMBERS.map((staff) => (
                  <div
                    key={staff.id}
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-slate-100 flex flex-col items-center text-center transition-all"
                  >
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#EEF5FF] shadow-sm mb-5">
                      <img
                        src={staff.avatar}
                        alt={staff.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900">{staff.name}</h3>
                    <p className="text-sm font-semibold text-[#2563EB] mt-1">{staff.role}</p>
                    <p className="text-xs text-slate-500 mt-2">{staff.qualification}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* --------------------------------------------------------------
                EVENT & NEWS SECTION (Matches Home3.jpeg & home4.jpeg)
            -------------------------------------------------------------- */}
            <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">
                  Event &amp; News
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-1.5">
                  Latest celebrations, achievements, and campus highlights
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {EVENTS_NEWS.map((event) => (
                  <div
                    key={event.id}
                    onClick={() => setSelectedEvent(event)}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-100 transition-all cursor-pointer flex flex-col"
                  >
                    <div className="relative h-52 overflow-hidden bg-slate-100">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent p-4 flex flex-col justify-between">
                        <span className="self-start bg-white/95 text-[#1B365D] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                          {event.category}
                        </span>
                        <div className="text-white">
                          <p className="text-xs font-semibold text-amber-300">
                            {event.bannerSubtitle}
                          </p>
                          <p className="text-base font-extrabold leading-tight">
                            {event.bannerTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-slate-400 font-medium mb-1.5">{event.date}</p>
                        <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#2563EB] transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#2563EB]">
                        <span>Read Highlights</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* --------------------------------------------------------------
                STUDENT SUPPORT & CARE + ADMISSION PROCESS (Matches Home5.jpeg)
            -------------------------------------------------------------- */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-12">
              {/* Student Support & Care */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] text-center mb-6">
                  Student Support &amp; Care
                </h2>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
                    Our school ensures that every child feels safe, supported and motivated.
                    Teachers and staff closely monitor student progress and well-being.
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Personal attention to every student',
                      'Friendly and caring teachers',
                      'Guidance for academic and personal growth',
                      'Healthy learning atmosphere'
                    ].map((point, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium"
                      >
                        <Check className="w-4 h-4 text-[#1B365D] flex-shrink-0 stroke-[2.5]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Admission Process */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B] text-center mb-6">
                  Admission Process
                </h2>
                <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                  <div className="space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm sm:text-base text-slate-700">
                      <span className="font-extrabold text-[#1B365D]">Step 1: Enquiry</span>
                      <span className="hidden sm:inline text-slate-400">—</span>
                      <span>Parents can enquire at school or online.</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm sm:text-base text-slate-700">
                      <span className="font-extrabold text-[#1B365D]">Step 2: Registration</span>
                      <span className="hidden sm:inline text-slate-400">—</span>
                      <span>Fill admission form with required details.</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm sm:text-base text-slate-700">
                      <span className="font-extrabold text-[#1B365D]">Step 3: Interaction</span>
                      <span className="hidden sm:inline text-slate-400">—</span>
                      <span>Student interaction and document verification.</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs sm:text-sm text-slate-500">
                      Ready to begin your child&apos;s educational journey?
                    </span>
                    <button
                      onClick={() => navigateTo('ONLINE ADMISSION')}
                      className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg shadow transition-colors cursor-pointer"
                    >
                      <span>Proceed to Online Registration</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------
                IMAGE GALLERY SECTION (Matches Home6.jpeg)
            -------------------------------------------------------------- */}
            <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E293B]">
                  Image Gallery
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mt-1.5">Top School</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {GALLERY_ITEMS.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setLightboxItem(item)}
                    className="group bg-white rounded-2xl p-2.5 shadow-sm hover:shadow-lg border border-slate-100 transition-all cursor-pointer"
                  >
                    <div className="relative h-52 rounded-xl overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 bg-white/95 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow transition-opacity">
                          View Photo
                        </span>
                      </div>
                    </div>
                    <div className="pt-3 pb-1 px-1">
                      <p className="text-sm font-bold text-slate-800 truncate">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* ==================================================================
            VIEW B: ABOUT US PAGE (Matches Home8.jpeg)
        ================================================================== */}
        {activePage === 'ABOUT US' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6 bg-gradient-to-b from-[#EEF4FF]/60 to-transparent">
            {/* Page Title Banner Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">About Us</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Empowering minds, building futures at Demo School, Jhansi
                </p>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white/90 rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-100 space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-block bg-blue-50 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full">
                    OUR INSTITUTION
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    Nurturing Excellence Through Modern Education &amp; Smart Technology
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    Demo School is committed to providing a holistic, student-centric learning
                    environment where academic rigor meets creativity, ethics, and digital
                    readiness. Powered by our integrated School ERP ecosystem, we ensure complete
                    transparency between teachers, students, and parents.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-[#F4F7FC] border border-slate-200/60">
                      <p className="text-2xl font-extrabold text-[#2563EB]">1,500+</p>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">Active Students</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F7FC] border border-slate-200/60">
                      <p className="text-2xl font-extrabold text-[#1B365D]">85+</p>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">Expert Faculty</p>
                    </div>
                    <div className="p-4 rounded-xl bg-[#F4F7FC] border border-slate-200/60 col-span-2 sm:col-span-1">
                      <p className="text-2xl font-extrabold text-[#F97316]">100%</p>
                      <p className="text-xs font-semibold text-slate-600 mt-0.5">Smart Classrooms</p>
                    </div>
                  </div>
                </div>

                {/* Emblem Graphic Card */}
                <div className="lg:col-span-5 flex justify-center">
                  <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#DC2626] p-8 flex flex-col items-center justify-center text-white shadow-xl">
                    <GraduationCap className="w-24 h-24 text-white drop-shadow-md" />
                    <span className="mt-4 font-extrabold text-xl tracking-wide">Demo School</span>
                    <span className="text-xs text-blue-100 mt-1">Jhansi, Uttar Pradesh</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            VIEW C: ACADEMICS PAGE (Matches home9.jpeg)
        ================================================================== */}
        {activePage === 'ACADEMICS' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Academics</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Structured curriculum, digital LMS, and continuous evaluation
                </p>
              </div>
            </div>

            {/* Curriculum Stages */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  stage: 'Primary Wing (Nursery – Class 5)',
                  desc: 'Activity-based foundational literacy, numeracy, storytelling, and creative arts in joyful classrooms.',
                  badge: 'Foundation Stage'
                },
                {
                  stage: 'Middle Wing (Class 6 – Class 8)',
                  desc: 'Experiential STEM labs, coding fundamentals, language proficiency, and collaborative project learning.',
                  badge: 'Preparatory Stage'
                },
                {
                  stage: 'Senior Wing (Class 9 – Class 12)',
                  desc: 'Focused streams in Science, Commerce & Humanities with career counseling and competitive exam readiness.',
                  badge: 'Secondary Stage'
                }
              ].map((wing, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block bg-blue-50 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {wing.badge}
                    </span>
                    <h3 className="text-lg font-extrabold text-slate-900">{wing.stage}</h3>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{wing.desc}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#1B365D]">
                    <BookOpen className="w-4 h-4 text-[#2563EB]" />
                    <span>NEP 2020 Aligned Curriculum</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            VIEW D: GALLERY PAGE (Matches Home10.jpeg)
        ================================================================== */}
        {activePage === 'GALLERY' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Gallery</h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    Explore our campus infrastructure, digital labs, and school life
                  </p>
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {['All', 'Campus', 'Academics', 'Events'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGalleryFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                      galleryFilter === cat
                        ? 'bg-[#2563EB] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY_ITEMS.filter(
                (item) => galleryFilter === 'All' || item.category === galleryFilter
              ).map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxItem(item)}
                  className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md border border-slate-100 cursor-pointer transition-all"
                >
                  <div className="h-52 rounded-xl overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="pt-3 px-1">
                    <span className="text-[11px] font-bold text-[#2563EB] uppercase">
                      {item.category}
                    </span>
                    <h3 className="text-sm font-extrabold text-slate-900 mt-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">{item.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            VIEW E: NEWS & EVENTS PAGE (Matches Home11.jpeg)
        ================================================================== */}
        {activePage === 'NEWS & EVENTS' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  News &amp; Events
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Announcements, academic milestones, and upcoming school calendar
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EVENTS_NEWS.map((ev) => (
                <div
                  key={ev.id}
                  onClick={() => setSelectedEvent(ev)}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 cursor-pointer transition-all"
                >
                  <img src={ev.image} alt={ev.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-bold text-[#2563EB]">{ev.category}</span>
                      <span>{ev.date}</span>
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900">{ev.title}</h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">{ev.summary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ==================================================================
            VIEW F: CONTACT US PAGE (Matches Home12.jpeg)
        ================================================================== */}
        {activePage === 'CONTACT US' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-6">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">Contact Us</h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                  Reach out to Demo School administration for admissions and support
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Contact Information */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
                <h2 className="text-lg font-extrabold text-slate-900">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Campus Address</p>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        Demo School, Jhansi, Uttar Pradesh
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F97316] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Phone Number</p>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">34356789999998</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Email Address</p>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">
                        demo@schoolsathi.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Message Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <h2 className="text-lg font-extrabold text-slate-900 mb-4">Send Us a Message</h2>
                {contactSubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <p className="font-extrabold text-emerald-900">Message Sent Successfully!</p>
                    <p className="text-xs text-emerald-700">
                      Our school office will contact you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setContactSubmitted(false);
                        setContactForm({
                          name: '',
                          email: '',
                          phone: '',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="mt-2 text-xs font-bold text-[#2563EB] underline cursor-pointer"
                    >
                      Send another inquiry
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Parent / Student Name *"
                        value={contactForm.name}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address *"
                        value={contactForm.email}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="tel"
                        placeholder="Mobile Number"
                        value={contactForm.phone}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                      <input
                        type="text"
                        required
                        placeholder="Subject *"
                        value={contactForm.subject}
                        onChange={(e) =>
                          setContactForm({ ...contactForm, subject: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your query here..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                    />
                    <button
                      type="submit"
                      className="bg-[#1B365D] hover:bg-[#132744] text-white font-bold text-sm px-6 py-3 rounded-lg shadow transition-colors cursor-pointer"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            VIEW G: ONLINE ADMISSION PAGE (Matches home13.jpeg)
        ================================================================== */}
        {activePage === 'ONLINE ADMISSION' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-start sm:items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="inline-block bg-[#DBEAFE] text-[#1E40AF] text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-0.5 rounded-full mb-1">
                  APPLY ONLINE
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  Online Admission
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Apply online for admission at Demo School. Complete all sections below and submit
                  your application.
                </p>
              </div>
            </div>

            {/* Check Your Form Status Button Row */}
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setStatusResult(null);
                  setStatusModalOpen(true);
                }}
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-[#1E3A8A] border border-blue-200 font-bold text-xs px-4 py-2.5 rounded-full shadow-sm transition-colors cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Check Your Form Status</span>
              </button>
            </div>

            {/* Submission Success Banner */}
            {submittedRefId && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-extrabold text-emerald-950">
                      Admission Application Submitted Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-800 mt-0.5">
                      Your Application Reference ID is{' '}
                      <span className="font-mono font-extrabold bg-white px-2 py-0.5 rounded border border-emerald-300">
                        {submittedRefId}
                      </span>
                      . Save this ID to track your form status.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setStatusSearchId(submittedRefId);
                    setStatusResult(null);
                    setStatusModalOpen(true);
                  }}
                  className="bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow cursor-pointer whitespace-nowrap"
                >
                  Track Status Now
                </button>
              </div>
            )}

            {/* Admission Form */}
            <form onSubmit={handleAdmissionSubmit} className="space-y-6">
              {/* SECTION 01: BASIC DETAILS */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 pb-4 mb-6 border-b border-slate-100">
                  <span className="w-7 h-7 rounded-lg bg-[#1E3A8A] text-white text-xs font-extrabold flex items-center justify-center">
                    01
                  </span>
                  <h2 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase">
                    BASIC DETAILS
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {/* Class * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Class <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={admissionForm.studentClass}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, studentClass: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:border-[#2563EB] ${
                        formErrors.studentClass ? 'border-red-400' : 'border-slate-200'
                      }`}
                    >
                      <option value="">Select</option>
                      {[
                        'Nursery',
                        'LKG',
                        'UKG',
                        'Class 1',
                        'Class 2',
                        'Class 3',
                        'Class 4',
                        'Class 5',
                        'Class 6',
                        'Class 7',
                        'Class 8',
                        'Class 9',
                        'Class 11'
                      ].map((cls) => (
                        <option key={cls} value={cls}>
                          {cls}
                        </option>
                      ))}
                    </select>
                    {formErrors.studentClass && (
                      <p className="text-[11px] text-red-500 mt-1">{formErrors.studentClass}</p>
                    )}
                  </div>

                  {/* Section * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Section <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={admissionForm.section}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, section: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:border-[#2563EB] ${
                        formErrors.section ? 'border-red-400' : 'border-slate-200'
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="A">Section A</option>
                      <option value="B">Section B</option>
                      <option value="C">Section C</option>
                    </select>
                    {formErrors.section && (
                      <p className="text-[11px] text-red-500 mt-1">{formErrors.section}</p>
                    )}
                  </div>

                  {/* First Name * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={admissionForm.firstName}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, firstName: e.target.value })
                      }
                      placeholder="Enter first name"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-[#2563EB] ${
                        formErrors.firstName ? 'border-red-400' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.firstName && (
                      <p className="text-[11px] text-red-500 mt-1">{formErrors.firstName}</p>
                    )}
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={admissionForm.lastName}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, lastName: e.target.value })
                      }
                      placeholder="Enter last name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>

                  {/* Gender * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Gender <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={admissionForm.gender}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, gender: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm bg-white focus:outline-none focus:border-[#2563EB] ${
                        formErrors.gender ? 'border-red-400' : 'border-slate-200'
                      }`}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {formErrors.gender && (
                      <p className="text-[11px] text-red-500 mt-1">{formErrors.gender}</p>
                    )}
                  </div>

                  {/* Date of Birth * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={admissionForm.dob}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, dob: e.target.value })
                      }
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-[#2563EB] ${
                        formErrors.dob ? 'border-red-400' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.dob && (
                      <p className="text-[11px] text-red-500 mt-1">{formErrors.dob}</p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      value={admissionForm.mobile}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, mobile: e.target.value })
                      }
                      placeholder="10-digit mobile"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>

                  {/* Email * */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={admissionForm.email}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, email: e.target.value })
                      }
                      placeholder="parent@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm focus:outline-none focus:border-[#2563EB] ${
                        formErrors.email ? 'border-red-400' : 'border-slate-200'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-500 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Category
                    </label>
                    <select
                      value={admissionForm.category}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, category: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm bg-white focus:outline-none focus:border-[#2563EB]"
                    >
                      <option value="">Select</option>
                      <option value="General">General</option>
                      <option value="OBC">OBC</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                    </select>
                  </div>

                  {/* Religion */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Religion
                    </label>
                    <input
                      type="text"
                      value={admissionForm.religion}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, religion: e.target.value })
                      }
                      placeholder="Enter religion"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                </div>
              </div>

              {/* SECTION 02: STUDENT ADDRESS DETAILS */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-[#1E3A8A] text-white text-xs font-extrabold flex items-center justify-center">
                      02
                    </span>
                    <h2 className="text-sm font-extrabold tracking-wider text-slate-900 uppercase">
                      STUDENT ADDRESS DETAILS
                    </h2>
                  </div>

                  <label className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={admissionForm.sameAsCurrent}
                      onChange={(e) => handleSameAddressToggle(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-300 text-[#2563EB] focus:ring-[#2563EB]"
                    />
                    <span>If Permanent Address Is Current Address</span>
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Current Address */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Current Address
                    </h3>
                    <input
                      type="text"
                      placeholder="House No., Street / Locality"
                      value={admissionForm.currentAddress}
                      onChange={(e) =>
                        handleCurrentAddressChange('currentAddress', e.target.value)
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="City"
                        value={admissionForm.currentCity}
                        onChange={(e) =>
                          handleCurrentAddressChange('currentCity', e.target.value)
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        value={admissionForm.currentState}
                        onChange={(e) =>
                          handleCurrentAddressChange('currentState', e.target.value)
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                      <input
                        type="text"
                        placeholder="Pincode"
                        value={admissionForm.currentPincode}
                        onChange={(e) =>
                          handleCurrentAddressChange('currentPincode', e.target.value)
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  {/* Permanent Address */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      Permanent Address
                    </h3>
                    <input
                      type="text"
                      placeholder="House No., Street / Locality"
                      disabled={admissionForm.sameAsCurrent}
                      value={admissionForm.permanentAddress}
                      onChange={(e) =>
                        setAdmissionForm({ ...admissionForm, permanentAddress: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:border-[#2563EB]"
                    />
                    <div className="grid grid-cols-3 gap-3">
                      <input
                        type="text"
                        placeholder="City"
                        disabled={admissionForm.sameAsCurrent}
                        value={admissionForm.permanentCity}
                        onChange={(e) =>
                          setAdmissionForm({ ...admissionForm, permanentCity: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:border-[#2563EB]"
                      />
                      <input
                        type="text"
                        placeholder="State"
                        disabled={admissionForm.sameAsCurrent}
                        value={admissionForm.permanentState}
                        onChange={(e) =>
                          setAdmissionForm({ ...admissionForm, permanentState: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:border-[#2563EB]"
                      />
                      <input
                        type="text"
                        placeholder="Pincode"
                        disabled={admissionForm.sameAsCurrent}
                        value={admissionForm.permanentPincode}
                        onChange={(e) =>
                          setAdmissionForm({ ...admissionForm, permanentPincode: e.target.value })
                        }
                        className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm disabled:bg-slate-50 disabled:text-slate-500 focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-end gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setAdmissionForm({
                        studentClass: '',
                        section: '',
                        firstName: '',
                        lastName: '',
                        gender: '',
                        dob: '',
                        mobile: '',
                        email: '',
                        category: '',
                        religion: '',
                        currentAddress: '',
                        currentCity: '',
                        currentState: 'Uttar Pradesh',
                        currentPincode: '',
                        sameAsCurrent: false,
                        permanentAddress: '',
                        permanentCity: '',
                        permanentState: 'Uttar Pradesh',
                        permanentPincode: ''
                      })
                    }
                    className="px-5 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-bold cursor-pointer"
                  >
                    Reset Form
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-[#1E3A8A] hover:bg-[#172554] text-white font-bold text-sm px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <span>Submit Application</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* ====================================================================
          3. PERSISTENT BOTTOM CTA BANNER & DARK NAVY FOOTER (Matches home7.jpeg)
      ==================================================================== */}
      {/* Blue Online Admission CTA Strip */}
      <section className="bg-gradient-to-r from-[#1E3A8A] via-[#2145A6] to-[#2563EB] text-white border-b-2 border-[#F97316]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Online Admission
            </h2>
            <p className="text-blue-100 text-sm mt-1">
              Demo School — Start your journey with us today.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => navigateTo('ONLINE ADMISSION')}
              className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-[#1E3A8A] font-bold text-sm px-6 py-3 rounded-full shadow-md transition-all cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>Online Admission</span>
            </button>
            <button
              onClick={() => navigateTo('CONTACT US')}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm px-6 py-3 rounded-full transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </section>

      {/* Dark Navy 4-Column Footer */}
      <footer className="bg-[#0F1E3A] text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
            {/* Column 1: Brand & Address */}
            <div className="lg:col-span-4 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#2563EB] flex items-center justify-center font-extrabold text-white text-sm flex-shrink-0 shadow">
                US
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Demo School</h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
                  Empowering minds, building futures.
                </p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Jhansi, Uttar Pradesh</span>
                </div>
              </div>
            </div>

            {/* Column 2: LINKS (2-column grid) */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold tracking-wider text-[#F97316] uppercase mb-4">
                LINKS
              </h4>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-xs sm:text-sm">
                <button
                  onClick={() => navigateTo('HOME')}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
                <button
                  onClick={() => navigateTo('ABOUT US')}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
                <button
                  onClick={() => navigateTo('ACADEMICS')}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Academics
                </button>
                <button
                  onClick={() => navigateTo('GALLERY')}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Gallery
                </button>
                <button
                  onClick={() => navigateTo('NEWS & EVENTS')}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  News &amp; Events
                </button>
                <button
                  onClick={() => navigateTo('CONTACT US')}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => navigateTo('ONLINE ADMISSION')}
                  className="text-left hover:text-white transition-colors col-span-2 cursor-pointer"
                >
                  Online Admission
                </button>
              </div>
            </div>

            {/* Column 3: CONTACT Cards */}
            <div className="lg:col-span-3">
              <h4 className="text-xs font-extrabold tracking-wider text-[#F97316] uppercase mb-4">
                CONTACT
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:34356789999998"
                  className="flex items-center gap-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F97316] text-white flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      PHONE
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white">34356789999998</p>
                  </div>
                </a>

                <a
                  href="mailto:demo@schoolsathi.in"
                  className="flex items-center gap-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#F97316] text-white flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      EMAIL
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white">
                      demo@schoolsathi.in
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Column 4: FOLLOW US / ERP LOGIN */}
            <div className="lg:col-span-2">
              <h4 className="text-xs font-extrabold tracking-wider text-[#F97316] uppercase mb-4">
                FOLLOW US
              </h4>
              <button
                onClick={() => setLoginModalOpen(true)}
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-xs px-5 py-2.5 rounded-lg shadow transition-colors cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
            <p>© {new Date().getFullYear()} Demo School • Powered by School ERP. All rights reserved.</p>
            <p>Jhansi, Uttar Pradesh</p>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          4. FLOATING GREEN WHATSAPP / SUPPORT CHAT WIDGET
      ==================================================================== */}
      <div className="fixed bottom-5 right-5 z-50">
        {chatOpen && (
          <div className="mb-3 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-[#14532D] text-white px-4 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center font-bold text-xs">
                  DS
                </div>
                <div>
                  <p className="text-sm font-bold leading-none">Demo School Helpdesk</p>
                  <p className="text-[11px] text-emerald-200 mt-1">Online • Typically replies fast</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1 rounded-lg hover:bg-white/10 text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 h-60 overflow-y-auto space-y-3 bg-slate-50 text-xs sm:text-sm">
              {chatMessages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#2563EB] text-white rounded-br-none'
                        : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={handleChatSend}
              className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2"
            >
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask about admissions, fees..."
                className="flex-grow px-3 py-2 text-xs sm:text-sm bg-slate-100 rounded-full focus:outline-none"
              />
              <button
                type="submit"
                className="w-9 h-9 rounded-full bg-[#15803D] hover:bg-[#166534] text-white flex items-center justify-center flex-shrink-0 cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          aria-label="Open Support Chat"
          className="ml-auto w-13 h-13 rounded-full bg-[#14532D] hover:bg-[#166534] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105 cursor-pointer"
        >
          {chatOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* ====================================================================
          5. INTERACTIVE MODALS (ERP Login, Module Preview, Event Details, IQ Quiz, Status)
      ==================================================================== */}

      {/* A. ERP Portal Login Modal */}
      {loginModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-100">
            <div className="bg-[#1B365D] text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB] flex items-center justify-center font-extrabold">
                  US
                </div>
                <div>
                  <h3 className="font-extrabold text-lg">School ERP Login</h3>
                  <p className="text-xs text-blue-200">Demo School Unified Portal</p>
                </div>
              </div>
              <button
                onClick={() => setLoginModalOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {/* Role Tabs */}
              <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl">
                {['Student', 'Staff', 'Admin'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setLoginRole(role)}
                    className={`py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      loginRole === role
                        ? 'bg-white text-[#1B365D] shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {role}
                  </button>
                ))}
              </div>

              {loginSuccess ? (
                <div className="py-8 text-center space-y-2">
                  <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                  <p className="font-extrabold text-slate-900">
                    Authenticated as {loginRole}!
                  </p>
                  <p className="text-xs text-slate-500">
                    Redirecting to Demo School {loginRole} Dashboard...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {loginRole} ID / Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={`Enter ${loginRole.toLowerCase()} username`}
                      value={loginCreds.username}
                      onChange={(e) =>
                        setLoginCreds({ ...loginCreds, username: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={loginCreds.password}
                      onChange={(e) =>
                        setLoginCreds({ ...loginCreds, password: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold text-sm py-3 rounded-lg shadow transition-colors cursor-pointer"
                  >
                    Sign In to {loginRole} Portal
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* B. ERP Module Quick Preview Modal */}
      {selectedModule && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div
                  className={`w-12 h-12 ${selectedModule.bg} rounded-2xl text-white flex items-center justify-center shadow`}
                >
                  <selectedModule.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">
                    School ERP Module
                  </span>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {selectedModule.label}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedModule(null)}
                className="p-1.5 rounded-lg hover:bg-slate-100 text-slate-500 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedModule.description}
            </p>

            <div className="bg-[#F4F7FC] rounded-xl p-4 space-y-2">
              <p className="text-xs font-extrabold uppercase text-slate-500">Key Capabilities</p>
              {selectedModule.highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setSelectedModule(null)}
                className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-bold text-slate-600 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedModule(null);
                  setLoginModalOpen(true);
                }}
                className="px-5 py-2 rounded-lg bg-[#1B365D] text-white text-xs font-bold shadow cursor-pointer"
              >
                Access Module in ERP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* C. Event Details Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl">
            <div className="relative h-56">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#2563EB]">
                <span>{selectedEvent.category}</span>
                <span>•</span>
                <span className="text-slate-500">{selectedEvent.date}</span>
              </div>
              <h3 className="text-xl font-extrabold text-slate-900">{selectedEvent.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{selectedEvent.summary}</p>
            </div>
          </div>
        </div>
      )}

      {/* D. Gallery Lightbox Modal */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-xs flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
          >
            <img
              src={lightboxItem.image}
              alt={lightboxItem.title}
              className="w-full max-h-[65vh] object-cover"
            />
            <div className="p-5 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-slate-900">{lightboxItem.title}</h3>
                <p className="text-xs text-slate-500 mt-0.5">{lightboxItem.caption}</p>
              </div>
              <button
                onClick={() => setLightboxItem(null)}
                className="px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* E. Interactive IQ Challenge Modal */}
      {iqModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <span className="bg-amber-100 text-amber-800 text-xs font-extrabold px-3 py-1 rounded-full">
                Demo School IQ Challenge
              </span>
              <button
                onClick={() => setIqModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {iqFinished ? (
              <div className="text-center py-6 space-y-3">
                <Award className="w-14 h-14 text-[#F97316] mx-auto" />
                <h3 className="text-2xl font-extrabold text-slate-900">
                  You Scored {iqScore} / {IQ_QUESTIONS.length}!
                </h3>
                <p className="text-sm text-slate-600">
                  Great analytical thinking! Explore more interactive quizzes inside the Demo
                  School LMS portal.
                </p>
                <button
                  onClick={resetIqChallenge}
                  className="mt-2 bg-[#2563EB] text-white text-xs font-bold px-5 py-2.5 rounded-lg cursor-pointer"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400">
                  Question {iqStep + 1} of {IQ_QUESTIONS.length}
                </p>
                <h3 className="text-lg font-extrabold text-slate-900">
                  {IQ_QUESTIONS[iqStep].q}
                </h3>
                <div className="space-y-2.5">
                  {IQ_QUESTIONS[iqStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleIqAnswer(idx)}
                      className="w-full text-left px-4 py-3 rounded-xl border border-slate-200 hover:border-[#2563EB] hover:bg-blue-50 text-sm font-semibold text-slate-800 transition-colors cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* F. Check Application Form Status Modal */}
      {statusModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-slate-900">
                Check Admission Form Status
              </h3>
              <button
                onClick={() => setStatusModalOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleStatusLookup} className="space-y-3">
              <label className="block text-xs font-bold text-slate-600">
                Enter Application Reference ID (e.g., DS-2026-8492)
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  value={statusSearchId}
                  onChange={(e) => setStatusSearchId(e.target.value)}
                  placeholder="DS-2026-XXXX"
                  className="flex-grow px-3.5 py-2.5 rounded-lg border border-slate-200 text-sm uppercase focus:outline-none focus:border-[#2563EB]"
                />
                <button
                  type="submit"
                  className="bg-[#1E3A8A] text-white text-xs font-bold px-4 py-2.5 rounded-lg cursor-pointer"
                >
                  Check
                </button>
              </div>
            </form>

            {statusResult && (
              <div
                className={`p-4 rounded-xl border text-xs sm:text-sm ${
                  statusResult.found
                    ? 'bg-blue-50 border-blue-200 text-slate-800'
                    : 'bg-amber-50 border-amber-200 text-amber-900'
                }`}
              >
                {statusResult.found ? (
                  <div className="space-y-1.5">
                    <p className="font-extrabold text-[#1E3A8A]">{statusResult.data.id}</p>
                    <p>
                      <span className="font-semibold">Student:</span>{' '}
                      {statusResult.data.studentName}
                    </p>
                    <p>
                      <span className="font-semibold">Class:</span>{' '}
                      {statusResult.data.classApplying}
                    </p>
                    <p>
                      <span className="font-semibold">Current Status:</span>{' '}
                      <span className="font-bold text-emerald-700">
                        {statusResult.data.status}
                      </span>
                    </p>
                  </div>
                ) : (
                  <p>{statusResult.message}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}