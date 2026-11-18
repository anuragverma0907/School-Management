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
  ChevronDown,
  Play,
  Check,
  MapPin,
  FileText,
  Search,
  Calendar,
  BookOpen,
  Award,
  Palette,
  X,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  Sparkles,
  ExternalLink,
  Menu,
  UserCheck,
  Lock,
  Bed,
  Utensils,
  Wifi,
  Tv,
  HeartPulse,
  AlertTriangle
} from 'lucide-react';

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

const LEADERSHIP_MEMBERS = [
  {
    id: 1,
    name: 'Shri Rajeshwar Nath Sharma',
    role: 'Chairman',
    department: 'School Management Committee',
    qualification: 'M.A., Retd. Educationist & Philanthropist',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    badge: 'Founder & Chairman',
    message:
      'True education transcends textbooks. Our enduring commitment is to nurture empathetic leaders of tomorrow who combine deep-rooted moral values with modern intellectual curiosity.'
  },
  {
    id: 2,
    name: 'Dr. Ananya Singhania',
    role: 'Managing Director & Trustee',
    department: 'Governing Council',
    qualification: 'Ph.D. in Educational Leadership (UK), M.Ed.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    badge: 'Managing Director',
    message:
      'By integrating cutting-edge educational technology, smart ERP systems, and collaborative pedagogy, we prepare our scholars to thrive in an interconnected global landscape.'
  },
  {
    id: 3,
    name: 'Mrs. Sunita Verma',
    role: 'Principal & Head of Institution',
    department: 'Academic Administration',
    qualification: 'M.Sc. (Physics), M.Ed., National Merit Awardee',
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80',
    badge: 'Principal',
    message:
      'Every student carries infinite potential. Our dedicated educators provide compassionate mentorship, intellectual rigor, and an environment where dreams take flight.'
  }
];

const ADMINISTRATIVE_HEADS = [
  {
    id: 1,
    name: 'Mr. Alok Mukherjee',
    role: 'Vice Principal',
    wing: 'Senior Secondary Wing (Grades XI - XII)',
    qualification: 'M.Sc., B.Ed. • 22+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 2,
    name: 'Mrs. Rekha Pathak',
    role: 'Academic Coordinator',
    wing: 'Secondary Wing (Grades IX - X)',
    qualification: 'M.A., M.Ed. • 18+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    name: 'Mrs. Meenakshi Joshi',
    role: 'Headmistress',
    wing: 'Primary & Pre-Primary Wing',
    qualification: 'M.A. Child Psychology, B.Ed. • 15+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 4,
    name: 'Maj. (Retd.) V. K. Chauhan',
    role: 'Administrative Officer & Superintendent',
    wing: 'Campus Operations & Security',
    qualification: 'Ex-Army Officer, M.B.A. • 20+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  }
];

const FACULTY_MEMBERS = [
  {
    id: 1,
    name: 'Dr. Arvind Saxena',
    role: 'HOD Physics',
    department: 'Science & Technology',
    qualification: 'Ph.D., M.Sc. Physics, CSIR-NET',
    experience: '18+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    email: 'arvind.saxena@demoschool.in'
  },
  {
    id: 2,
    name: 'Mr. Rakesh Chandra Joshi',
    role: 'HOD Mathematics',
    department: 'Mathematics',
    qualification: 'M.Sc. Mathematics (Gold Medalist), B.Ed.',
    experience: '16+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    email: 'rakesh.joshi@demoschool.in'
  },
  {
    id: 3,
    name: 'Mrs. Priyanka Trivedi',
    role: 'Senior Chemistry Faculty',
    department: 'Science & Technology',
    qualification: 'M.Sc. Organic Chemistry, B.Ed.',
    experience: '12+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    email: 'priyanka.trivedi@demoschool.in'
  },
  {
    id: 4,
    name: 'Mr. Vikramaditya Rao',
    role: 'HOD Computer Science & AI',
    department: 'Science & Technology',
    qualification: 'M.Tech (CSE), Certified Python/AI Educator',
    experience: '11+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    email: 'vikram.rao@demoschool.in'
  },
  {
    id: 5,
    name: 'Mrs. Catherine D\'Souza',
    role: 'HOD English Literature',
    department: 'Languages & Humanities',
    qualification: 'M.A. English Lit, Cambridge CELTA',
    experience: '14+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=400&q=80',
    email: 'catherine.dsouza@demoschool.in'
  },
  {
    id: 6,
    name: 'Acharya Ramakant Mishra',
    role: 'HOD Hindi & Sanskrit',
    department: 'Languages & Humanities',
    qualification: 'Ph.D., M.A. Sanskrit & Hindi, B.Ed.',
    experience: '20+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    email: 'ramakant.mishra@demoschool.in'
  },
  {
    id: 7,
    name: 'Mr. Devendra Pratap Singh',
    role: 'HOD Commerce & Accountancy',
    department: 'Commerce & Economics',
    qualification: 'M.Com, FCA (Fellow Chartered Accountant)',
    experience: '15+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    email: 'dp.singh@demoschool.in'
  },
  {
    id: 8,
    name: 'Dr. Neha Mehrotra',
    role: 'HOD Economics & Social Sciences',
    department: 'Commerce & Economics',
    qualification: 'Ph.D. Economics, M.A., B.Ed.',
    experience: '13+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    email: 'neha.mehrotra@demoschool.in'
  },
  {
    id: 9,
    name: 'Coach Surendra Pal Singh',
    role: 'Director of Physical Education',
    department: 'Sports & Athletics',
    qualification: 'M.P.Ed., NIS Certified National Coach',
    experience: '16+ Years Exp.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    email: 'surendra.sports@demoschool.in'
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

const FUTURE_READY_PROGRAMMES = [
  {
    id: 'sports-programme',
    label: 'Sports Programme',
    category: 'Athletics & Physical Fitness',
    tagline: 'Building Stamina, Sportsmanship, and Competitive Excellence',
    bannerImage:
      'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Our comprehensive Sports Programme is designed to nurture physical fitness, mental agility, emotional resilience, and lifelong camaraderie. With world-class outdoor grounds and indoor sports arenas, students train under NIS-certified national coaches to compete at district, state, and CBSE cluster levels.',
    highlights: [
      'Olympic-standard 400m athletic track and synthetic turf sports fields',
      'Dedicated cricket pitch, basketball courts, and tennis courts with floodlights',
      'Indoor sports complex with wooden badminton courts, table tennis, and chess hall',
      'Martial arts training (Taekwondo, Karate & Judo) for self-defense and discipline',
      'Daily morning fitness sessions and specialized evening coaching camps',
      'Annual Sports Meet with inter-house track & field championship trophies'
    ],
    outcomes: [
      'Cardiovascular endurance, physical agility, and motor coordination',
      'Strategic thinking, leadership under pressure, and gracious sportsmanship',
      'Pathways to national school competitions and athletic scholarships'
    ],
    inCharge: 'Directorate of Physical Education & Sports Coaches',
    frequency: 'Daily Sessions & Weekend Tournaments',
    hasSubmenu: false
  },
  {
    id: 'national-cadet-corps',
    label: 'National Cadet Corps',
    category: 'Discipline & National Service',
    tagline: 'Unity and Discipline — Serving the Nation with Pride',
    bannerImage:
      'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1000&q=80',
    overview:
      'The National Cadet Corps (NCC) unit at Demo School grooms young boys and girls into disciplined, patriotic citizens with qualities of courage, character, comradeship, and selfless service. Cadets participate in ceremonial drill parades, weapon training, social outreach drives, and state-level adventure camps.',
    highlights: [
      'Junior Division (JD) and Junior Wing (JW) Army and Air Wings',
      'Weekly ceremonial drill practice, rifle handling basics, and map-reading sessions',
      'Participation in Independence Day and Republic Day ceremonial district parades',
      'Annual Training Camps (ATC) and Combined Annual Training Camps (CATC)',
      'Community service drives: cleanliness rallies, blood donation awareness, and tree planting',
      'Opportunity to qualify for Thal Sainik Camp and Republic Day Camp (RDC), New Delhi'
    ],
    outcomes: [
      'Uncompromising discipline, punctuality, and pride in national heritage',
      'Confidence and competitive advantage in Defense services (NDA, CDS) interviews',
      'First aid, crisis management, and survival skills during emergencies'
    ],
    inCharge: 'Associate NCC Officer (ANO) & Indian Army Instructors',
    frequency: 'Twice Weekly Parades & Annual Camps',
    hasSubmenu: false
  },
  {
    id: 'outbounds',
    label: 'Outbounds',
    category: 'Adventure & Experiential Learning',
    tagline: 'Real-World Wilderness Expeditions and Survival Challenges',
    bannerImage:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Outbounds take education beyond conventional classrooms into untamed nature. Through wilderness trekking, obstacle courses, river crossings, and environmental study expeditions, students conquer personal fears, discover self-reliance, and forge unbreakable teamwork.',
    highlights: [
      'Annual wilderness adventure camps in the Himalayan foothills and scenic nature reserves',
      'Rock climbing, rappelling, ziplining, Burma bridge crossings, and river rafting',
      'Outdoor tent pitching, fire-craft, compass navigation, and star-gazing sessions',
      'Ecological field surveys, river conservation studies, and local village interactions',
      'Strict adherence to international safety protocols with certified mountaineering instructors',
      'Round-the-clock medical escorts, satellite tracking, and organic outdoor mess'
    ],
    outcomes: [
      'Heightened self-confidence, grit, and emotional adaptability outside comfort zones',
      'Deep reverence for environmental biodiversity and sustainable living',
      'Decisive problem-solving and collective teamwork under challenging conditions'
    ],
    inCharge: 'Outbound Expedition Committee & Certified Adventure Leaders',
    frequency: 'Term-End Expeditions & Weekend Hikes',
    hasSubmenu: false
  },
  {
    id: '21st-century-skills',
    label: '21st Century Skills',
    category: 'Innovation, Technology & STEM',
    tagline: 'Empowering Young Minds with 4Cs: Critical Thinking, Creativity, Collaboration, and Communication',
    bannerImage:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Our 21st Century Skills framework prepares learners for an AI-driven, rapidly evolving global economy. Students engage in maker-spaces, robotics workshops, algorithmic problem-solving, financial acumen seminars, and design thinking sprints that bridge textbook concepts with real-world innovation.',
    highlights: [
      'Atal Tinkering & STEM Labs with 3D printers, IoT kits, and robotics controllers',
      'Structured coding curriculum: Scratch for juniors, Python and web technologies for seniors',
      'Design Thinking sprints tackling urban sustainability, water recycling, and smart mobility',
      'Financial literacy modules: budgeting, saving, compound interest, and digital economy',
      'Interactive media labs for video editing, digital animation, podcasting, and graphics',
      'Annual InnoVision Science & Technology Expo showcasing student inventions'
    ],
    outcomes: [
      'Algorithmic reasoning, technological agility, and creative problem-solving mindset',
      'Ability to articulate complex ideas through digital storytelling and presentations',
      'Preparedness for future-ready careers in AI, biotechnology, and entrepreneurship'
    ],
    inCharge: 'Department of Computer Science & Innovation Coordinators',
    frequency: 'Weekly Lab Sprints & Monthly Hackathons',
    hasSubmenu: true,
    subItems: [
      'STEM & Robotics Lab',
      'Coding & Artificial Intelligence',
      'Design Thinking Sprints',
      'Financial Literacy & Enterprise'
    ]
  },
  {
    id: 'house-system',
    label: 'House System',
    category: 'Tradition, Values & Camaraderie',
    tagline: 'Fostering Healthy Rivalry, Institutional Pride, and Brotherhood',
    bannerImage:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80',
    overview:
      'The House System is the heartbeat of campus life. Every student and faculty mentor belongs to one of four historic houses: Ashoka (Blue), Tagore (Green), Shivaji (Red), and Raman (Yellow). Through round-the-year inter-house cultural, academic, and athletic battles, students learn loyalty, grit, and collective triumph.',
    highlights: [
      'Four Houses: Ashoka (Integrity), Tagore (Creativity), Shivaji (Courage), Raman (Inquisitiveness)',
      'Inter-House Debates, Model United Nations, Spelling Bees, and Science Quizzes',
      'Cultural showdowns: Western & Classical Music, Choral Singing, Street Plays, and Folk Dance',
      'Inter-House Athletic Championships: Football, Cricket, Basketball, and Track Events',
      'Democratic leadership: Student House Captains, Vice-Captains, and Junior Prefects',
      'Cock House Championship Trophy awarded at the Annual Prize Day to the overall winner'
    ],
    outcomes: [
      'Belonging, camaraderie across age groups, and institutional pride',
      'Constructive competitive spirit and graceful acceptance of both victory and defeat',
      'Early organizational management experience for student prefects and council members'
    ],
    inCharge: 'House Masters, House Mistresses & Student Council',
    frequency: 'Bi-Weekly Competitions & Annual Inter-House Trophies',
    hasSubmenu: true,
    subItems: [
      'Ashoka House (Blue - Integrity)',
      'Tagore House (Green - Creativity)',
      'Shivaji House (Red - Courage)',
      'Raman House (Yellow - Inquisitiveness)'
    ]
  },
  {
    id: 'leadership-programme',
    label: 'Leadership Programme',
    category: 'Civic Responsibility & Governance',
    tagline: 'Inspiring Visionary Leaders for a Complex and Dynamic World',
    bannerImage:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    overview:
      'True leadership is service in action. Our structured Leadership Programme nurtures ethical, empathetic leaders through democratic student council elections, Youth Parliament assemblies, Model United Nations conferences, and impactful community outreach initiatives.',
    highlights: [
      'Formal Student Council elections with manifestos, public debates, and electronic voting',
      'Investiture Ceremony swearing-in Head Boy, Head Girl, Sports Captains, and Prefects',
      'Annual Model United Nations (Demo MUN) debating geopolitical crises and resolutions',
      'Youth Parliament simulations teaching legislative procedures and civic governance',
      'Community outreach: Village literacy drives, orphanage visits, and elderly care initiatives',
      'Guest lectures by civil servants, armed forces officers, and corporate innovators'
    ],
    outcomes: [
      'Articulate public speaking, diplomatic negotiation, and persuasive debate skills',
      'High emotional intelligence, moral courage, and accountability for team performance',
      'Civic awareness and an active commitment to social welfare and nation building'
    ],
    inCharge: 'Student Council Advisory Board & Senior Mentors',
    frequency: 'Monthly Council Sessions & Term Conferences',
    hasSubmenu: false
  },
  {
    id: 'health-and-well-being',
    label: 'Health And Well Being',
    category: 'Holistic Wellness & Mindfulness',
    tagline: 'Nurturing Mind, Body, and Emotional Resilience',
    bannerImage:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1000&q=80',
    overview:
      'A healthy mind thrives in a vibrant body. Our Health & Well-being framework integrates mindfulness, daily yoga, clinical healthcare, adolescent psychological counseling, and balanced nutritional awareness into everyday campus routines.',
    highlights: [
      'Morning mindfulness, Pranayama, and guided meditation to enhance classroom focus',
      '24/7 Fully equipped School Clinic staffed by resident nurses and visiting pediatricians',
      'Comprehensive bi-annual medical checkups: dental, ophthalmic, and BMI growth tracking',
      'Confidential psychological counseling support for stress management and exam anxiety',
      'Nutritional workshops for parents and students promoting wholesome food habits',
      'Safe, hygienic, and eco-friendly campus with pure RO drinking water and sanitization'
    ],
    outcomes: [
      'Emotional self-regulation, resilience against peer pressure, and positive self-image',
      'Sustained physical energy, immune health, and lifelong wellness habits',
      'Open dialogue regarding mental wellness in a compassionate, judgment-free environment'
    ],
    inCharge: 'School Healthcare Department & Counseling Psychologists',
    frequency: 'Daily Yoga/Mindfulness & Continuous Healthcare',
    hasSubmenu: true,
    subItems: [
      'Mindfulness & Daily Yoga',
      'Adolescent Counseling Cell',
      '24/7 Medical Care & Screenings',
      'Nutritional Wellness Workshops'
    ]
  },
  {
    id: 'student-led-programme',
    label: 'Student Led Programme',
    category: 'Autonomy, Clubs & Initiative',
    tagline: 'Student Passion Driving Real-World Campus Initiatives',
    bannerImage:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    overview:
      'We believe students learn best when they are in the driver’s seat. Our Student Led Programmes empower learners to conceptualize, manage, and execute school clubs, editorial publications, cultural fests, and eco-sustainability campaigns with faculty serving solely as mentors.',
    highlights: [
      'Student Editorial Board publishing the annual school magazine and quarterly newsletters',
      'Prakriti Eco-Club organizing plastic-free drives, solar energy audits, and composting',
      'IT & Robotics Guild hosting peer-to-peer coding tutorials and tech exhibitions',
      'Theatre & Performing Arts Society writing, directing, and staging street plays (Nukkad Natak)',
      'Literary & Quizzing Society organizing inter-school knowledge championships',
      'Student charity committee raising funds and relief supplies for disaster-struck regions'
    ],
    outcomes: [
      'Autonomous project management, budget handling, and cross-functional coordination',
      'Hands-on experience in graphic design, publishing, journalism, and event production',
      'Pride of ownership and active participation in school community development'
    ],
    inCharge: 'Student Club Presidents & Faculty Advisors',
    frequency: 'Weekly Club Hours & Term Showcases',
    hasSubmenu: false
  },
  {
    id: 'career-guidance',
    label: 'Career Guidance And Counselling Program',
    category: 'University Pathways & Mentorship',
    tagline: 'Illuminating Future Pathways from High School to Top Global Universities',
    bannerImage:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80',
    overview:
      'Navigating career decisions requires expert insight, psychometric precision, and timely university mentorship. Our dedicated Career Guidance Cell supports students from Grade IX onwards with tailored career roadmaps, college admissions prep, and competitive exam strategies.',
    highlights: [
      'Comprehensive psychometric aptitude, personality, and career interest assessments',
      'One-on-one personalized counseling sessions for subject and stream selection',
      'Annual Global University Fair hosting admissions officers from India, UK, USA, Canada, and Australia',
      'Specialized entrance exam orientation: JEE, NEET, CUET, CLAT, SAT, NDA, and NIFT',
      'Workshops on crafting winning Statements of Purpose (SOP), resumes, and interview skills',
      'Alumni mentor network offering real-world career guidance and internship insights'
    ],
    outcomes: [
      'Crystal clarity on personal strengths, optimal subject streams, and career options',
      'High success rates in national competitive exams and prestigious international admissions',
      'Confidence and competitive advantage during university interviews and scholarship rounds'
    ],
    inCharge: 'Certified Career Counselors & Higher Education Advisory Cell',
    frequency: 'Year-Round Counseling & Monthly University Sessions',
    hasSubmenu: false
  },
  {
    id: 'reading-programme',
    label: 'Reading Programme',
    category: 'Literacy, Imagination & Literature',
    tagline: 'Opening Doors to Wonder, Empathy, and Lifelong Wisdom',
    bannerImage:
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=1000&q=80',
    overview:
      'A child who reads is an adult who thinks. Our flagship Reading Programme immerses students from kindergarten to grade 12 in rich literature, varied genres, and interactive storytelling to cultivate deep comprehension, expressive vocabulary, and critical empathy.',
    highlights: [
      'Drop Everything And Read (D.E.A.R.) — dedicated daily silent reading period across all grades',
      'Air-conditioned, digitally cataloged library with over 20,000 fiction and reference books',
      'Access to global e-book libraries, audiobooks, and peer-reviewed educational journals',
      'Author-of-the-Month reading challenges and vibrant book review presentations',
      'Literary festivals featuring eminent children’s authors, poets, and storytellers',
      'Junior Reader Badges and Star Reader Awards celebrating voracious reading milestones'
    ],
    outcomes: [
      'Expansive vocabulary, nuanced language fluency, and superior writing prowess',
      'Deep capacity for empathy and understanding diverse cultural perspectives',
      'Enhanced attention span and critical analytical reading ability essential for higher studies'
    ],
    inCharge: 'Chief Librarian & English Literature Department',
    frequency: 'Daily Reading Periods & Monthly Literary Circles',
    hasSubmenu: false
  }
];

const ABOUT_US_SECTIONS = [
  {
    id: 'mission-vision',
    label: 'Mission, Vision & Core Values',
    category: 'Institutional Philosophy',
    tagline: 'Inspiring Minds, Elevating Character, and Guiding Purposeful Lives',
    bannerImage:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: false
  },
  {
    id: 'motto-aspiration',
    label: 'Our Motto & Aspiration Span',
    category: 'Ethos & Guiding Light',
    tagline: "'Vidya Dadati Vinayam' — Knowledge Bestows Humility and Strength",
    bannerImage:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: false
  },
  {
    id: 'history',
    label: 'History',
    category: 'Heritage & Milestones',
    tagline: 'A Proud Journey of Academic Eminence, Character Building, and Service',
    bannerImage:
      'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: true,
    subItems: ['Genesis & Founding Charter', 'Campus Expansion Milestones', 'Decades of Academic Distinction']
  },
  {
    id: 'our-school',
    label: 'Our School',
    category: 'Campus Infrastructure',
    tagline: 'A Lush 15-Acre Smart Campus Fostering 360-Degree Growth',
    bannerImage:
      'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: true,
    subItems: ['Smart Digital Classrooms', 'Advanced Science & AI Labs', 'Central Knowledge Library', 'Eco-Friendly Green Campus']
  },
  {
    id: 'leadership-team',
    label: 'Leadership Team',
    category: 'Governance & Vision',
    tagline: 'Seasoned Educationists and Visionaries Guiding Our Institution',
    bannerImage:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: true,
    subItems: ["Chairman's Desk", 'Managing Director', "Principal's Desk", 'Academic Coordinators']
  },
  {
    id: 'faculty-list',
    label: 'Faculty List',
    category: 'Academic Mentors',
    tagline: 'Distinguished Subject Specialists Shaping Tomorrow’s Achievers',
    bannerImage:
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: true,
    subItems: ['Science & Technology', 'Mathematics', 'Languages & Humanities', 'Commerce & Economics', 'Sports & Athletics']
  },
  {
    id: 'school-guidelines',
    label: 'School Guidelines',
    category: 'Code of Conduct & Policies',
    tagline: 'Fostering Discipline, Punctuality, Safety, and Mutual Respect',
    bannerImage:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: false
  },
  {
    id: 'sports-academy',
    label: 'Sports Academy',
    category: 'Athletic Excellence',
    tagline: 'Championing Physical Stamina, Sporting Skill, and Team Glory',
    bannerImage:
      'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80',
    hasSubmenu: false
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
  },
  {
    id: 5,
    title: 'Boys & Girls Hostel Wing',
    category: 'Hostel',
    image: '/images/hostel/hostel-room.jpg',
    caption: 'Air-conditioned dormitory rooms with individual study stations and wardrobes.'
  },
  {
    id: 6,
    title: 'Hygienic Pure Veg Dining Hall',
    category: 'Hostel',
    image: '/images/hostel/hostel-dining.jpg',
    caption: 'Spacious dining mess serving hot, wholesome multi-cuisine meals.'
  },
  {
    id: 7,
    title: 'Quiet Evening Study Hours',
    category: 'Hostel',
    image: '/images/hostel/hostel-study.jpg',
    caption: 'Supervised evening self-study hours fostering discipline and peer learning.'
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

const ACADEMIC_SECTIONS = [
  {
    id: 'curriculum',
    label: 'Curriculum & NEP 2020 Framework',
    category: 'Pedagogy & Standards',
    tagline: 'CBSE Affiliated, Experiential Learning Designed for 21st-Century Minds',
    hasSubmenu: true,
    subItems: [
      'Foundational & Preparatory Stages (Grades 1-8)',
      'Experiential & Project-Based Learning Pedagogy',
      'Holistic 360-Degree Progress Report Cards',
      'Skill Subjects & Digital Literacy Integration'
    ]
  },
  {
    id: 'primary-wing',
    label: 'Primary Wing (Grades I - V)',
    category: 'Early Childhood Education',
    tagline: 'Fostering Curiosity, Joyful Literacy, and Foundational Numeracy',
    hasSubmenu: false
  },
  {
    id: 'middle-wing',
    label: 'Middle Wing (Grades VI - VIII)',
    category: 'Preparatory Stage',
    tagline: 'Hands-On STEM, Algorithmic Thinking, and Bilingual Proficiency',
    hasSubmenu: false
  },
  {
    id: 'senior-wing',
    label: 'Senior Secondary Wing (Grades IX - XII)',
    category: 'Higher Secondary & Career Streams',
    tagline: 'Rigorous Academic Streams in Science, Commerce, and Humanities',
    hasSubmenu: true,
    subItems: [
      'Science Stream (PCM / PCB with Informatics / Biotech)',
      'Commerce Stream with Applied Mathematics & Accountancy',
      'Humanities & Social Sciences with Psychology & Economics',
      'Integrated Preparation for JEE, NEET, CUET & CLAT'
    ]
  },
  {
    id: 'academic-calendar',
    label: 'Academic Calendar & Schedules',
    category: 'Annual Almanac',
    tagline: 'Structured Annual Term Schedule, Holidays, and Parent-Teacher Meets',
    hasSubmenu: false
  },
  {
    id: 'exam-policy',
    label: 'Examination & Grading Policy',
    category: 'Assessment Framework',
    tagline: 'Continuous and Comprehensive Evaluation Following CBSE Guidelines',
    hasSubmenu: false
  },
  {
    id: 'digital-labs',
    label: 'Smart Labs & Digital Classrooms',
    category: 'Modern Infrastructure',
    tagline: 'State-of-the-Art Science, AI & Language Laboratories',
    hasSubmenu: true,
    subItems: [
      'Physics, Chemistry & Biology Research Laboratories',
      'Atal Tinkering STEM & Robotics Innovation Lab',
      'High-Speed Computer & Language Immersion Lab',
      'Interactive Smart Panels (IFPs) in Every Classroom'
    ]
  }
];

const HOSTEL_SECTIONS = [
  {
    id: 'hostel-overview',
    label: 'Hostel Overview & Facilities',
    category: 'Residential Life',
    tagline: 'A Safe, Modern, and Nurturing Home Away from Home',
    hasSubmenu: false
  },
  {
    id: 'separate-wings',
    label: 'Separate Wings for Boys & Girls',
    category: 'Air-Conditioned Accommodation',
    tagline: 'Dedicated Security, CCTV, Resident Wardens, and Well-Ventilated AC Rooms',
    hasSubmenu: false
  },
  {
    id: 'dining-mess',
    label: 'Hygienic Pure Veg Mess',
    category: 'Nutrition & Dining',
    tagline: 'Nutritious, Multi-Cuisine Vegetarian Meals Formulated by Nutritionists',
    hasSubmenu: false
  },
  {
    id: 'medical-clinic',
    label: '24/7 Medical Clinic & Care',
    category: 'Healthcare & Infirmary',
    tagline: 'Round-the-Clock First Aid, Resident Nurses, and Tie-Ups with Top Hospitals',
    hasSubmenu: false
  },
  {
    id: 'admission-procedure',
    label: 'Admission Procedure & Forms',
    category: 'Hostel Enrollment',
    tagline: 'Step-by-Step Admission Guidelines, Verification, and Required Documents',
    hasSubmenu: true,
    subItems: [
      'Principal Written Application',
      'Hostel Fee Deposit & Receipts',
      'Medical Health Certificate',
      'Local Guardian Authority Letters'
    ]
  },
  {
    id: 'rules-regulations',
    label: 'Rules, Regulations & Daily Routine',
    category: 'Disciplinary Code',
    tagline: 'Comprehensive Code of Conduct, Compulsory Study Hours, and Safety Rules',
    hasSubmenu: false
  },
  {
    id: 'visiting-timings',
    label: 'Visiting Hours & Leave Rules',
    category: 'Parent Communication',
    tagline: 'Designated Weekend Visiting Hours, Monthly Outings, and Gate Pass Protocol',
    hasSubmenu: false
  },
  {
    id: 'warden-contacts',
    label: 'Wardens & Contact Directory',
    category: 'Administration & Contacts',
    tagline: 'Direct Phone Extensions for Boys & Girls Hostel Wardens and Clinic',
    hasSubmenu: false
  },
  {
    id: 'photo-tour',
    label: 'Hostel Photo Gallery',
    category: 'Visual Tour',
    tagline: 'High-Definition Photographs of Rooms, Dining Hall, and Study Spaces',
    hasSubmenu: false
  }
];

const ADMISSION_SECTIONS = [
  {
    id: 'admission-form',
    label: 'Online Registration Form',
    category: 'Student Enrollment',
    tagline: 'Seamless Online Admission Form for Academic Session 2026-27',
    hasSubmenu: false
  },
  {
    id: 'check-status',
    label: 'Check Application Status',
    category: 'Application Tracking',
    tagline: 'Track Your Admission Application with Your Application Reference ID',
    hasSubmenu: false
  },
  {
    id: 'fee-structure',
    label: 'Fee Structure & Payment Schedule',
    category: 'Fee Guidelines',
    tagline: 'Transparent Tuition, Activity, and Boarding Fee Schedule',
    hasSubmenu: false
  },
  {
    id: 'eligibility-criteria',
    label: 'Age & Eligibility Criteria',
    category: 'Admission Guidelines',
    tagline: 'Grade-Wise Minimum Age Norms as per CBSE and Government Regulations',
    hasSubmenu: false
  },
  {
    id: 'documents-checklist',
    label: 'Required Documents Checklist',
    category: 'Documentation',
    tagline: 'Birth Certificates, Transfer Certificates (TC), Report Cards, and Photos',
    hasSubmenu: false
  }
];

const CONTACT_SECTIONS = [
  {
    id: 'campus-location',
    label: 'Campus Address & Directions',
    category: 'Location & Map',
    tagline: 'Visit Our Lush 15-Acre Campus in Jhansi, Uttar Pradesh',
    hasSubmenu: false
  },
  {
    id: 'office-hours',
    label: 'Reception & Office Timings',
    category: 'Administrative Timings',
    tagline: 'Office Hours for Parents, Visitors, and Document Verifications',
    hasSubmenu: false
  },
  {
    id: 'key-contacts',
    label: 'Emergency Contacts & Helpdesk',
    category: 'Phone Directory',
    tagline: 'Direct Lines for Principal, Admissions, Accounts, and Transportation',
    hasSubmenu: false
  },
  {
    id: 'hostel-office',
    label: 'Hostel Superintendent Office',
    category: 'Boarding Helpdesk',
    tagline: 'Direct Point of Contact for Hosteller Parents and Wardens',
    hasSubmenu: false
  },
  {
    id: 'feedback-form',
    label: 'Send an Online Enquiry',
    category: 'Interactive Message Form',
    tagline: 'Submit Your Inquiry Directly to the School Administration',
    hasSubmenu: false
  }
];

const NAV_ITEMS = [
  { id: 'HOME', label: 'HOME', hasDropdown: false },
  {
    id: 'ABOUT US',
    label: 'ABOUT US',
    hasDropdown: true,
    dropdownItems: ABOUT_US_SECTIONS
  },
  {
    id: 'ACADEMICS',
    label: 'ACADEMICS',
    hasDropdown: true,
    dropdownItems: ACADEMIC_SECTIONS
  },
  {
    id: 'NEWS & EVENTS',
    label: 'FUTURE READY SKILLS',
    hasDropdown: true,
    dropdownItems: FUTURE_READY_PROGRAMMES
  },
  {
    id: 'ABOUT HOSTEL',
    label: 'ABOUT HOSTEL',
    hasDropdown: true,
    dropdownItems: HOSTEL_SECTIONS
  },
  {
    id: 'ONLINE ADMISSION',
    label: 'ADMISSION',
    hasDropdown: true,
    dropdownItems: ADMISSION_SECTIONS
  },
  {
    id: 'GALLERY',
    label: 'GALLERY',
    hasDropdown: true,
    dropdownItems: [
      { id: 'All', label: 'All Campus Highlights' },
      { id: 'Campus', label: 'Campus & Infrastructure' },
      { id: 'Academics', label: 'Smart Labs & Classrooms' },
      { id: 'Events', label: 'Events & Annual Functions' },
      { id: 'Hostel', label: 'Hostel & Residential Life' }
    ]
  },
  {
    id: 'CONTACT US',
    label: 'CONTACT US',
    hasDropdown: true,
    dropdownItems: CONTACT_SECTIONS
  }
];



export default function App() {
  const [activePage, setActivePage] = useState('HOME');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [currentSlide, setCurrentSlide] = useState(0);

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

  const [chatOpen, setChatOpen] = useState(false);
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(() => {
    try {
      return window.localStorage.getItem('school-ecosystem-theme') || 'default';
    } catch {
      return 'default';
    }
  });
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'bot',
      text: 'Welcome to Demo School! How can we help you with admissions, fees, or ERP login today?'
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  useEffect(() => {
    const root = document.documentElement;
    if (selectedTheme === 'default') {
      root.removeAttribute('data-theme');
    } else {
      root.setAttribute('data-theme', selectedTheme);
    }
    try {
      window.localStorage.setItem('school-ecosystem-theme', selectedTheme);
    } catch {
    
    }
  }, [selectedTheme]);

  
  const [galleryFilter, setGalleryFilter] = useState('All');

  const [facultyDepartment, setFacultyDepartment] = useState('All');

  const [selectedProgrammeId, setSelectedProgrammeId] = useState('sports-programme');

  const [selectedAboutTab, setSelectedAboutTab] = useState('mission-vision');

  const [selectedAcademicTab, setSelectedAcademicTab] = useState('curriculum');
  const [selectedHostelTab, setSelectedHostelTab] = useState('hostel-overview');
  const [selectedAdmissionTab, setSelectedAdmissionTab] = useState('admission-form');
  const [selectedContactTab, setSelectedContactTab] = useState('campus-location');

  // Header Dropdown States
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

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

  // Navigate helper with smooth scroll to top and sub-tab selection
  const navigateTo = (page, subTab = null) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    if (page === 'ABOUT US' && subTab) {
      setSelectedAboutTab(subTab);
    } else if ((page === 'NEWS & EVENTS' || page === 'FUTURE READY SKILLS') && subTab) {
      setSelectedProgrammeId(subTab);
    } else if ((page === 'ABOUT HOSTEL' || page === 'About Hostel') && subTab) {
      setSelectedHostelTab(subTab);
    } else if (page === 'ACADEMICS' && subTab) {
      setSelectedAcademicTab(subTab);
    } else if (page === 'ONLINE ADMISSION' && subTab) {
      setSelectedAdmissionTab(subTab);
    } else if (page === 'GALLERY' && subTab) {
      setGalleryFilter(subTab);
    } else if (page === 'CONTACT US' && subTab) {
      setSelectedContactTab(subTab);
    }
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

            {/* Desktop Nav Links with Dropdown Menus */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                const isDropdownOpen = activeDropdown === item.id;
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasDropdown) setActiveDropdown(item.id);
                    }}
                    onMouseLeave={() => {
                      if (item.hasDropdown) setActiveDropdown(null);
                    }}
                  >
                    <button
                      onClick={() => {
                        navigateTo(item.id);
                        if (item.hasDropdown) {
                          setActiveDropdown(isDropdownOpen ? null : item.id);
                        }
                      }}
                      className={`relative py-2 px-3 rounded-lg text-xs font-bold tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
                        isActive || isDropdownOpen
                          ? 'bg-[#1B365D] text-white shadow-sm'
                          : 'text-slate-200 hover:text-white hover:bg-[#1B365D]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDropdownOpen ? 'rotate-180 text-blue-200' : 'text-slate-300'
                          }`}
                        />
                      )}
                      {isActive && !isDropdownOpen && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#F97316] rounded-full" />
                      )}
                    </button>

                    {/* Floating Dropdown Card matching screenshots */}
                    {item.hasDropdown && isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden divide-y divide-slate-100 animate-in fade-in slide-in-from-top-1 duration-150">
                        {/* Dropdown header */}
                        <div className="bg-[#162C56] px-4 py-2.5 text-white flex items-center justify-between text-xs font-bold shadow-xs">
                          <span className="text-blue-100">{item.label}</span>
                          <ChevronDown className="w-3.5 h-3.5 text-blue-200" />
                        </div>

                        {/* List items */}
                        <div className="py-1 max-h-[70vh] overflow-y-auto divide-y divide-slate-100">
                          {item.dropdownItems.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={(e) => {
                                e.stopPropagation();
                                navigateTo(item.id, sub.id);
                                setActiveDropdown(null);
                              }}
                              className="w-full text-left px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-[#1B365D] flex items-center justify-between transition-colors cursor-pointer group/item"
                            >
                              <span className="truncate">{sub.label}</span>
                              {sub.hasSubmenu ? (
                                <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover/item:text-[#1B365D]" />
                              ) : (
                                <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#1B365D] group-hover/item:translate-x-0.5 transition-all" />
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
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
                <span>Enquiry Form</span>
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

          {/* Mobile Navigation Dropdown with Accordion Menus */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-[#1B3152] border-t border-white/10 px-4 pt-3 pb-6 space-y-1.5 max-h-[80vh] overflow-y-auto">
              {NAV_ITEMS.map((item) => {
                const isActive = activePage === item.id;
                const isExpanded = mobileDropdownOpen === item.id;
                return (
                  <div key={item.id} className="space-y-1">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          if (item.hasDropdown) {
                            setMobileDropdownOpen(isExpanded ? null : item.id);
                          } else {
                            navigateTo(item.id);
                          }
                        }}
                        className={`flex-1 text-left px-3.5 py-2.5 rounded-lg text-xs font-bold tracking-wider flex items-center justify-between ${
                          isActive
                            ? 'bg-[#1B365D] text-white'
                            : 'text-slate-200 hover:bg-[#1B365D] hover:text-white'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-blue-200' : 'text-slate-400'
                            }`}
                          />
                        )}
                        {!item.hasDropdown && isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#F97316]" />
                        )}
                      </button>
                    </div>

                    {/* Mobile Expandable Submenu */}
                    {item.hasDropdown && isExpanded && (
                      <div className="bg-[#142642] rounded-xl p-2 ml-2 space-y-1 border border-white/10 divide-y divide-white/5">
                        <button
                          onClick={() => {
                            navigateTo(item.id);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left px-3.5 py-2 text-xs font-bold text-blue-200 hover:bg-white/10 rounded-lg flex items-center justify-between"
                        >
                          <span>Go to {item.label} Overview</span>
                          <ArrowRight className="w-3.5 h-3.5 text-blue-200" />
                        </button>
                        {item.dropdownItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => {
                              navigateTo(item.id, sub.id);
                              setMobileMenuOpen(false);
                            }}
                            className="w-full text-left px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-lg flex items-center justify-between"
                          >
                            <span className="truncate">{sub.label}</span>
                            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <div className="pt-2">
                <button
                  onClick={() => navigateTo('ONLINE ADMISSION')}
                  className="w-full flex items-center justify-center gap-2 bg-[#F97316] text-white font-bold text-xs py-3 rounded-lg shadow cursor-pointer"
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

              {/* YouTube video preview: only the play button opens YouTube. */}
              <div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl">
                <img
                  src="https://img.youtube.com/vi/GdRVa4piaTg/hqdefault.jpg"
                  alt="YouTube video preview: Test Your IQ Level in 7 Minutes"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-transparent to-black/60" />
                <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-3 p-4 sm:p-6">
                  <div className="flex min-w-0 items-center gap-3 text-white">
                    <div className="grid size-9 shrink-0 place-items-center rounded-full bg-red-600 text-xs font-bold shadow">▶</div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold sm:text-base">Test Your IQ Level in 7 Minutes</p>
                      <p className="truncate text-xs text-white/80">Demo School Cognitive &amp; Aptitude Series</p>
                    </div>
                  </div>
                  <span className="shrink-0 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">YouTube</span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=GdRVa4piaTg&autoplay=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play this video on YouTube"
                  title="Play on YouTube"
                  className="group absolute left-1/2 top-1/2 z-20 grid -translate-x-1/2 -translate-y-1/2 place-items-center"
                >
                  <span className="grid h-16 w-20 place-items-center rounded-2xl bg-red-600 text-white shadow-xl transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8 fill-current" />
                  </span>
                </a>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 p-4 text-white sm:p-6">
                  <span className="text-xs font-medium text-white/90">Click Play to watch this video on YouTube</span>
                  <span className="rounded bg-black/70 px-1.5 py-0.5 text-[11px]">▶</span>
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
            VIEW B: ABOUT US PAGE (Interactive Master-Detail Matching Image)
        ================================================================== */}
        {activePage === 'ABOUT US' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                    Institutional Profile · Demo School, Jhansi
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-0.5">
                    About Us
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Click any section from the menu below to explore our values, history, leadership, faculty, and campus life.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile / Quick Dropdown Selector */}
            <div className="lg:hidden bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase whitespace-nowrap">Select Section:</span>
              <div className="relative flex-1">
                <select
                  value={selectedAboutTab}
                  onChange={(e) => setSelectedAboutTab(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-[#0e4b2d] focus:outline-none focus:ring-2 focus:ring-[#0e4b2d] appearance-none cursor-pointer"
                >
                  {ABOUT_US_SECTIONS.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Interactive Master-Detail Section: Menu List (matching uploaded image) + Dynamic Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Menu List Styled Exactly Like the Image */}
              <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                {/* Menu Header matching green banner in image */}
                <div className="bg-[#0e4b2d] text-white px-5 py-3.5 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm tracking-wide text-emerald-100">
                      About Us
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-emerald-300" />
                </div>

                {/* Vertical List Items */}
                <div className="divide-y divide-slate-100 bg-white">
                  {ABOUT_US_SECTIONS.map((sec) => {
                    const isSelected = selectedAboutTab === sec.id;
                    return (
                      <div key={sec.id} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => setSelectedAboutTab(sec.id)}
                          className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 text-[#0e4b2d] font-bold border-l-4 border-[#0e4b2d] pl-4'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span>{sec.label}</span>
                          {sec.hasSubmenu ? (
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 transition-transform ${
                                isSelected ? 'rotate-180 text-[#0e4b2d]' : ''
                              }`}
                            />
                          ) : (
                            <ChevronRight
                              className={`w-4 h-4 text-slate-300 ${
                                isSelected ? 'text-[#0e4b2d]' : ''
                              }`}
                            />
                          )}
                        </button>

                        {/* Expandable sub-items when active */}
                        {sec.hasSubmenu && isSelected && sec.subItems && (
                          <div className="bg-slate-50/90 px-6 py-2.5 space-y-1.5 border-t border-slate-100">
                            {sec.subItems.map((sub, idx) => (
                              <div
                                key={idx}
                                className="text-xs text-slate-600 flex items-center gap-2 py-0.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4b2d]" />
                                <span>{sub}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Content for Selected About Tab */}
              <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {/* 1. Mission, Vision & Core Values */}
                {selectedAboutTab === 'mission-vision' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                      <img
                        src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
                        alt="Mission and Vision"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="self-start text-[10px] font-extrabold uppercase tracking-wider bg-[#0e4b2d] text-emerald-200 px-3 py-1 rounded-full mb-2">
                          Guiding Philosophy
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          Mission, Vision &amp; Core Values
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-200 mt-1">
                          Inspiring Minds, Elevating Character, and Guiding Purposeful Lives
                        </p>
                      </div>
                    </div>

                    {/* Mission & Vision Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center font-bold">
                          <Sparkles className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-extrabold text-[#1E3A8A]">Our Mission</h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          To provide a nurturing, intellectually stimulating, and values-driven educational environment that inspires every child to achieve academic excellence, discover creative potential, and lead with compassion in an evolving world.
                        </p>
                      </div>

                      <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-[#0e4b2d] text-white flex items-center justify-center font-bold">
                          <Award className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-extrabold text-[#0e4b2d]">Our Vision</h3>
                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                          To be recognized as a premier center of holistic learning, integrating timeless Indian values with cutting-edge STEM pedagogy and digital ecosystems, producing ethical global leaders capable of shaping a brighter tomorrow.
                        </p>
                      </div>
                    </div>

                    {/* 5 Core Values */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>The Five Pillars of Our Core Values</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                          { title: 'Academic Mastery', desc: 'Fostering relentless intellectual curiosity, analytical rigor, and lifelong inquiry.' },
                          { title: 'Uncompromising Integrity', desc: 'Upholding honesty, ethical responsibility, and moral courage in all actions.' },
                          { title: 'Empathy & Inclusivity', desc: 'Embracing diversity, mutual respect, and compassionate peer synergy.' },
                          { title: 'Innovative Pedagogy', desc: 'Encouraging lateral thinking, hands-on experimentation, and digital fluency.' },
                          { title: 'Selfless Service', desc: 'Instilling civic consciousness and patriotic commitment to nation-building.' }
                        ].map((val, idx) => (
                          <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                            <h4 className="font-bold text-slate-900 text-xs sm:text-sm text-[#1E3A8A]">
                              {val.title}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Our Motto & Aspiration Span */}
                {selectedAboutTab === 'motto-aspiration' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                      <img
                        src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
                        alt="Our Motto"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="self-start text-[10px] font-extrabold uppercase tracking-wider bg-[#0e4b2d] text-emerald-200 px-3 py-1 rounded-full mb-2">
                          Institutional Motto
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          Our Motto &amp; Aspiration Span
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-200 mt-1">
                          &lsquo;Vidya Dadati Vinayam&rsquo; — Knowledge Bestows Humility and Strength
                        </p>
                      </div>
                    </div>

                    {/* Motto Explanation Card */}
                    <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
                      <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                        Ancient Wisdom · Modern Relevance
                      </span>
                      <h3 className="text-xl font-extrabold text-amber-950">
                        &ldquo;विद्या ददाति विनयं, विनयाद् याति पात्रताम्&rdquo;
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        Our motto is deeply rooted in the philosophy that true education does not breed vanity; it instills deep humility, character, and mental clarity. Humility breeds worthiness, and worthiness leads to righteous contribution to society.
                      </p>
                    </div>

                    {/* Five Cardinal Horizons */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-[#2563EB]" />
                        <span>The 5 Cardinal Horizons of Student Aspiration</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                          <span className="font-extrabold text-[#1E3A8A]">1. Intellectual Horizon</span>
                          <p className="text-slate-600">Conceptual mastery, scientific inquiry, problem-solving, and analytical acumen.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                          <span className="font-extrabold text-[#1E3A8A]">2. Creative Horizon</span>
                          <p className="text-slate-600">Aesthetic appreciation, lateral thinking, artistic expression, and inventive prototyping.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                          <span className="font-extrabold text-[#1E3A8A]">3. Physical Horizon</span>
                          <p className="text-slate-600">Enduring athletic stamina, fitness, and sporting grit.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                          <span className="font-extrabold text-[#1E3A8A]">4. Emotional Horizon</span>
                          <p className="text-slate-600">Self-regulation, empathy, emotional intelligence, and resilience under pressure.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1 sm:col-span-2">
                          <span className="font-extrabold text-[#1E3A8A]">5. Global Citizen Horizon</span>
                          <p className="text-slate-600">Environmental stewardship, digital ethics, cross-cultural tolerance, and national pride.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. History */}
                {selectedAboutTab === 'history' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                      <img
                        src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
                        alt="School History"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="self-start text-[10px] font-extrabold uppercase tracking-wider bg-[#0e4b2d] text-emerald-200 px-3 py-1 rounded-full mb-2">
                          Heritage &amp; Legacy
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          Institutional History &amp; Milestones
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-200 mt-1">
                          A Proud Journey of Academic Eminence, Character Building, and Community Service
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-[#1E3A8A]" />
                        <span>The Genesis &amp; Evolution</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Founded with the vision to deliver world-class schooling to the region, Demo School has grown from a visionary charter into an esteemed center of academic and cultural distinction. Over the years, our campus has expanded across 15 acres, fostering thousands of alumni who now serve as doctors, engineers, civil servants, entrepreneurs, and armed forces officers across the globe.
                      </p>
                    </div>

                    {/* Timeline Milestones */}
                    <div className="space-y-3 pt-2">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-[#F97316]" />
                        <span>Four Decades of Growth Milestones</span>
                      </h3>
                      <div className="space-y-3">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-4">
                          <span className="px-3 py-1 bg-[#1E3A8A] text-white font-extrabold text-xs rounded-lg flex-shrink-0">Phase 1</span>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">Founding Vision &amp; Inception</h4>
                            <p className="text-xs text-slate-600 mt-0.5">Establishment of the primary academic block with a mission of affordable excellence.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-4">
                          <span className="px-3 py-1 bg-[#2563EB] text-white font-extrabold text-xs rounded-lg flex-shrink-0">Phase 2</span>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">Campus &amp; Residential Expansion</h4>
                            <p className="text-xs text-slate-600 mt-0.5">Construction of senior secondary science wings, athletic sports complex, and air-conditioned hostels.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-4">
                          <span className="px-3 py-1 bg-emerald-600 text-white font-extrabold text-xs rounded-lg flex-shrink-0">Phase 3</span>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">Academic Honors &amp; Board Laurels</h4>
                            <p className="text-xs text-slate-600 mt-0.5">Ranked among the premier institutions in the state with consecutive 100% board pass rates.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-4">
                          <span className="px-3 py-1 bg-[#0e4b2d] text-white font-extrabold text-xs rounded-lg flex-shrink-0">Phase 4</span>
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">Digital Renaissance &amp; STEM Innovation</h4>
                            <p className="text-xs text-slate-600 mt-0.5">Implementation of smart digital classrooms, integrated School ERP system, and Atal Tinkering STEM labs.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Our School */}
                {selectedAboutTab === 'our-school' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      <div className="lg:col-span-7 space-y-4">
                        <span className="inline-block bg-blue-50 text-[#2563EB] text-xs font-bold px-3 py-1 rounded-full">
                          CAMPUS INFRASTRUCTURE
                        </span>
                        <h2 className="text-2xl font-extrabold text-slate-900">
                          Nurturing Excellence Through Modern Education &amp; Smart Technology
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          Demo School provides a holistic, student-centric learning environment where academic rigor meets creativity, ethics, and digital readiness. Powered by our integrated School ERP ecosystem, we ensure complete transparency between teachers, students, and parents.
                        </p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                          <div className="p-3.5 rounded-xl bg-[#F4F7FC] border border-slate-200/60">
                            <p className="text-xl sm:text-2xl font-extrabold text-[#2563EB]">1,500+</p>
                            <p className="text-xs font-semibold text-slate-600 mt-0.5">Active Students</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-[#F4F7FC] border border-slate-200/60">
                            <p className="text-xl sm:text-2xl font-extrabold text-[#1B365D]">85+</p>
                            <p className="text-xs font-semibold text-slate-600 mt-0.5">Expert Faculty</p>
                          </div>
                          <div className="p-3.5 rounded-xl bg-[#F4F7FC] border border-slate-200/60 col-span-2 sm:col-span-1">
                            <p className="text-xl sm:text-2xl font-extrabold text-[#F97316]">100%</p>
                            <p className="text-xs font-semibold text-slate-600 mt-0.5">Smart Classrooms</p>
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-5 flex justify-center">
                        <div className="w-56 h-56 rounded-3xl bg-gradient-to-br from-[#2563EB] via-[#1D4ED8] to-[#DC2626] p-6 flex flex-col items-center justify-center text-white shadow-xl">
                          <GraduationCap className="w-20 h-20 text-white drop-shadow-md" />
                          <span className="mt-3 font-extrabold text-lg tracking-wide">Demo School</span>
                          <span className="text-xs text-blue-100 mt-0.5">Jhansi, Uttar Pradesh</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs sm:text-sm">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                        <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-[#1E3A8A]">
                          <Building2 className="w-4 h-4" /> 15-Acre Eco-Campus
                        </h4>
                        <p className="text-slate-600">Lush green pollution-free campus with solar energy panels, rainwater harvesting, and spacious lawns.</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60">
                        <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-[#1E3A8A]">
                          <Wifi className="w-4 h-4" /> Hi-Tech Digital Infrastructure
                        </h4>
                        <p className="text-slate-600">Gigabit fiber internet, CCTV surveillance, RFID biometric gates, and advanced robotics maker spaces.</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. Leadership Team */}
                {selectedAboutTab === 'leadership-team' && (
                  <div className="p-6 sm:p-8 space-y-8">
                    {/* Board of Governance */}
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                        <div>
                          <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                            Executive Leadership
                          </span>
                          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
                            <Award className="w-6 h-6 text-[#1E3A8A]" />
                            <span>Board of Governance &amp; Executive Leadership</span>
                          </h2>
                        </div>
                        <span className="text-xs font-bold text-[#1E3A8A] bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200 self-start sm:self-auto">
                          Management Council
                        </span>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        {LEADERSHIP_MEMBERS.map((leader) => (
                          <div
                            key={leader.id}
                            className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col md:flex-row gap-6 items-start justify-between"
                          >
                            <img
                              src={leader.image}
                              alt={leader.name}
                              className="w-24 h-24 rounded-2xl object-cover shadow-md border-2 border-slate-100 flex-shrink-0"
                            />
                            <div className="flex-1 space-y-2">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-block bg-blue-50 text-[#1E3A8A] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                  {leader.badge}
                                </span>
                                <span className="text-xs text-slate-400">•</span>
                                <span className="text-xs text-slate-500 font-medium">{leader.department}</span>
                              </div>
                              <h3 className="font-extrabold text-slate-900 text-lg">
                                {leader.name}
                              </h3>
                              <p className="text-xs font-bold text-[#2563EB]">{leader.role}</p>
                              <p className="text-xs font-medium text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-100 leading-relaxed">
                                &ldquo;{leader.message}&rdquo;
                              </p>
                              <p className="text-[11px] text-slate-400 pt-1">
                                <span className="font-bold text-slate-600">Credentials:</span> {leader.qualification}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Academic Coordinators */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                          Institutional Administration
                        </span>
                        <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
                          <Briefcase className="w-5 h-5 text-[#1E3A8A]" />
                          <span>Academic Wing Coordinators &amp; Administration</span>
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {ADMINISTRATIVE_HEADS.map((head) => (
                          <div
                            key={head.id}
                            className="bg-slate-50/70 rounded-2xl p-4 border border-slate-200/80 flex items-center gap-4"
                          >
                            <img
                              src={head.image}
                              alt={head.name}
                              className="w-16 h-16 rounded-full object-cover shadow border-2 border-white flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-extrabold text-slate-900 text-sm">{head.name}</h4>
                              <p className="text-xs font-bold text-[#2563EB]">{head.role}</p>
                              <p className="text-[11px] text-slate-600">{head.wing}</p>
                              <p className="text-[10px] text-slate-400 mt-1">{head.qualification}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Faculty List */}
                {selectedAboutTab === 'faculty-list' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                      <div>
                        <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                          Academic Mentors
                        </span>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2 mt-0.5">
                          <GraduationCap className="w-6 h-6 text-[#1E3A8A]" />
                          <span>Distinguished Faculty Members</span>
                        </h2>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Passionate educators and subject specialists empowering students across disciplines
                        </p>
                      </div>

                      {/* Department Filter Pills */}
                      <div className="flex flex-wrap gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                        {[
                          'All',
                          'Science & Technology',
                          'Mathematics',
                          'Languages & Humanities',
                          'Commerce & Economics',
                          'Sports & Athletics'
                        ].map((dept) => (
                          <button
                            key={dept}
                            type="button"
                            onClick={() => setFacultyDepartment(dept)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                              facultyDepartment === dept
                                ? 'bg-[#1E3A8A] text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                            }`}
                          >
                            {dept === 'All' ? 'All' : dept}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Faculty Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {FACULTY_MEMBERS.filter(
                        (fac) =>
                          facultyDepartment === 'All' || fac.department === facultyDepartment
                      ).map((faculty) => (
                        <div
                          key={faculty.id}
                          className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col justify-between"
                        >
                          <div className="flex items-start gap-4">
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="w-16 h-16 rounded-xl object-cover shadow-sm border border-slate-100 flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <span className="inline-block bg-blue-50 text-[#2563EB] text-[10px] font-bold px-2 py-0.5 rounded-md truncate max-w-full">
                                {faculty.department}
                              </span>
                              <h3 className="font-extrabold text-slate-900 text-sm mt-1 truncate">
                                {faculty.name}
                              </h3>
                              <p className="text-xs font-semibold text-[#1E3A8A]">{faculty.role}</p>
                              <p className="text-[11px] text-slate-500 mt-0.5">{faculty.qualification}</p>
                            </div>
                          </div>

                          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                            <span className="text-[11px] font-medium text-slate-600 flex items-center gap-1">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              {faculty.experience}
                            </span>
                            <a
                              href={`mailto:${faculty.email}`}
                              className="text-[11px] font-bold text-[#2563EB] hover:underline flex items-center gap-1"
                            >
                              <Mail className="w-3 h-3" />
                              <span>Email</span>
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 7. School Guidelines */}
                {selectedAboutTab === 'school-guidelines' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                      <img
                        src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
                        alt="School Guidelines"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="self-start text-[10px] font-extrabold uppercase tracking-wider bg-[#0e4b2d] text-emerald-200 px-3 py-1 rounded-full mb-2">
                          Discipline &amp; Safety
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          School Guidelines &amp; Policies
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-200 mt-1">
                          Fostering Discipline, Punctuality, Safety, and Mutual Respect
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-[#1E3A8A]" />
                        <span>Core Institutional Policies</span>
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                          <h4 className="font-bold text-[#1E3A8A]">Attendance &amp; Punctuality</h4>
                          <p className="text-slate-600 leading-relaxed">Minimum 75% attendance mandatory for CBSE board exam eligibility. Morning gates close strictly at 8:00 AM.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                          <h4 className="font-bold text-[#1E3A8A]">Uniform &amp; Dress Code</h4>
                          <p className="text-slate-600 leading-relaxed">Students must wear clean, ironed school uniform with prescribed tie, belt, ID card, and polished black shoes.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                          <h4 className="font-bold text-[#1E3A8A]">Electronics &amp; Mobiles Policy</h4>
                          <p className="text-slate-600 leading-relaxed">Student mobile phones and unauthorized electronics are strictly prohibited on campus to ensure focused study.</p>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1.5">
                          <h4 className="font-bold text-[#1E3A8A]">Anti-Bullying &amp; Harmony</h4>
                          <p className="text-slate-600 leading-relaxed">Strict zero-tolerance policy against bullying, ragging, or discriminatory behavior with an active student grievance cell.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 8. Sports Academy */}
                {selectedAboutTab === 'sports-academy' && (
                  <div className="p-6 sm:p-8 space-y-6">
                    <div className="relative h-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                      <img
                        src="https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80"
                        alt="Sports Academy"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                        <span className="self-start text-[10px] font-extrabold uppercase tracking-wider bg-[#0e4b2d] text-emerald-200 px-3 py-1 rounded-full mb-2">
                          Athletic Training
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                          Demo School Sports Academy
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-200 mt-1">
                          Championing Physical Stamina, Sporting Skill, and Team Glory
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#2563EB]" />
                        <span>Professional Coaching &amp; Arenas</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        Demo School Sports Academy is dedicated to nurturing athletic champions. We provide professional coaching under NIS certified trainers across multiple sporting disciplines, coupled with sports science, physical conditioning, and tournament exposure.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2 text-xs">
                        {[
                          { sport: 'Cricket Academy', info: 'Turf wickets, automated bowling machines, and net practice arenas.' },
                          { sport: 'Football & Athletics', info: 'Full-size standard football field and 400m 8-lane athletic track.' },
                          { sport: 'Basketball & Tennis', info: 'Floodlit outdoor synthetic courts conforming to international standards.' },
                          { sport: 'Badminton & Table Tennis', info: 'Indoor sports complex with wooden courts and professional lighting.' },
                          { sport: 'Martial Arts Center', info: 'Certified training in Taekwondo and Karate for self-defense.' },
                          { sport: 'Physical Conditioning', info: 'Gymnasium, yoga arena, and dedicated sports physiotherapist.' }
                        ].map((sp, idx) => (
                          <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
                            <h4 className="font-bold text-slate-900 text-sm text-[#1E3A8A]">{sp.sport}</h4>
                            <p className="text-slate-600">{sp.info}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            VIEW C: ACADEMICS PAGE (Master-Detail Dropdown List)
        ================================================================== */}
        {activePage === 'ACADEMICS' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                    Academic Excellence · NEP 2020 Aligned
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-0.5">
                    Academics
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Structured curriculum, experiential STEM labs, and continuous 360-degree evaluation
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile / Quick Dropdown Selector */}
            <div className="lg:hidden bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase whitespace-nowrap">Select Stage:</span>
              <div className="relative flex-1">
                <select
                  value={selectedAcademicTab}
                  onChange={(e) => setSelectedAcademicTab(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-[#0e4b2d] focus:outline-none focus:ring-2 focus:ring-[#0e4b2d] appearance-none cursor-pointer"
                >
                  {ACADEMIC_SECTIONS.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Interactive Master-Detail Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Dropdown Styled Menu List */}
              <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                <div className="bg-[#0e4b2d] text-white px-5 py-3.5 flex items-center justify-between shadow-xs">
                  <span className="font-bold text-sm tracking-wide text-emerald-100">
                    Academics
                  </span>
                  <ChevronDown className="w-4 h-4 text-emerald-300" />
                </div>

                <div className="divide-y divide-slate-100 bg-white">
                  {ACADEMIC_SECTIONS.map((sec) => {
                    const isSelected = selectedAcademicTab === sec.id;
                    return (
                      <div key={sec.id} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => setSelectedAcademicTab(sec.id)}
                          className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 text-[#0e4b2d] font-bold border-l-4 border-[#0e4b2d] pl-4'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span>{sec.label}</span>
                          {sec.hasSubmenu ? (
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 transition-transform ${
                                isSelected ? 'rotate-180 text-[#0e4b2d]' : ''
                              }`}
                            />
                          ) : (
                            <ChevronRight
                              className={`w-4 h-4 text-slate-300 ${
                                isSelected ? 'text-[#0e4b2d]' : ''
                              }`}
                            />
                          )}
                        </button>

                        {sec.hasSubmenu && isSelected && sec.subItems && (
                          <div className="bg-slate-50/90 px-6 py-2.5 space-y-1.5 border-t border-slate-100">
                            {sec.subItems.map((sub, idx) => (
                              <div
                                key={idx}
                                className="text-xs text-slate-600 flex items-center gap-2 py-0.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4b2d]" />
                                <span>{sub}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Content Detail Card */}
              <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                {selectedAcademicTab === 'curriculum' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Pedagogy &amp; Standards
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Curriculum &amp; NEP 2020 Framework
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        CBSE Affiliated, Experiential Learning Designed for 21st-Century Minds
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Demo School follows the centrally formulated CBSE curriculum seamlessly synthesized with the National Education Policy (NEP 2020) 5+3+3+4 pedagogical structure. Our classrooms transition away from passive rote-memorization toward active inquiry, hands-on experimentation, and reflective problem-solving.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2">
                        <h4 className="text-sm font-bold text-[#1E3A8A]">Experiential Learning</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Concepts are grounded in tangible experiments, real-world field studies, and cross-disciplinary projects bridging science, arts, and technology.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                        <h4 className="text-sm font-bold text-emerald-900">360° Holistic Assessment</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Evaluation tracks cognitive aptitude, socio-emotional maturity, self-reflection, and peer collaboration alongside scholastic report cards.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAcademicTab === 'primary-wing' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Foundational &amp; Preparatory Stage
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Primary Wing (Grades I - V)
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Activity-based foundational literacy, numeracy, storytelling, and joyful discovery
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      The primary years establish lifelong curiosity, emotional security, and confidence. In vibrant, print-rich classrooms equipped with smart interactive flat panels, dedicated early educators employ the play-way method to foster phonics mastery, number sense, and creative self-expression.
                    </p>

                    <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                      <h4 className="text-sm font-bold text-slate-800">Key Primary Wing Features:</h4>
                      <ul className="text-xs sm:text-sm text-slate-600 space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Theme-based integrated thematic units connecting Science, Social Studies, and Environmental Care</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Daily Circle Time, guided phonics reading circles, and expressive storytelling sessions</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>Junior Math manipulatives and STEM discovery corners in every section</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                          <span>No burden policy with zero heavy school bags and joyful homework alternatives</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {selectedAcademicTab === 'middle-wing' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        Preparatory Stage
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Middle Wing (Grades VI - VIII)
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Hands-on STEM labs, coding fundamentals, language proficiency, and team projects
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Middle school marks the transition toward structured discipline and abstract thinking. Learners engage in laboratory science explorations, algorithmic reasoning, block-based and Python programming, Sanskrit/French third languages, and inter-house debates that hone public speaking and analytical reasoning.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 space-y-1.5">
                        <span className="text-xs font-bold text-[#F97316]">STEM &amp; Innovation</span>
                        <h4 className="font-bold text-slate-900">Robotics &amp; Coding</h4>
                        <p className="text-xs text-slate-600">
                          Hands-on microcontroller programming, sensor circuits, and logic game design.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl border border-slate-200 space-y-1.5">
                        <span className="text-xs font-bold text-[#2563EB]">Languages &amp; Arts</span>
                        <h4 className="font-bold text-slate-900">Multilingual Fluency</h4>
                        <p className="text-xs text-slate-600">
                          English, Hindi, Sanskrit, and French foreign language options with audio-lingual labs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAcademicTab === 'senior-wing' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                        Secondary &amp; Senior Secondary
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Senior Secondary Wing (Grades IX - XII)
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Specialized Science, Commerce &amp; Humanities Streams with Integrated Competitive Prep
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Our Senior Secondary curriculum combines rigorous CBSE board excellence with targeted entrance exam readiness. Specialized faculty mentors guide scholars through conceptual depth, numerical problem solving, and analytical case studies.
                    </p>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm">1. Science Stream (PCM / PCB)</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Physics, Chemistry, Mathematics / Biology, with Computer Science, Informatics Practices, or Physical Education. Integrated preparation for JEE Main/Advanced and NEET.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm">2. Commerce Stream</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          Accountancy, Business Studies, Economics, Mathematics / Applied Mathematics, with Entrepreneurship. Focused mentorship for CA Foundation, CUET, and IPMAT.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                        <h4 className="font-bold text-slate-900 text-sm">3. Humanities &amp; Social Sciences</h4>
                        <p className="text-xs text-slate-600 mt-1">
                          History, Political Science, Psychology, Sociology, and Economics. Comprehensive support for CLAT (Law), Civil Services foundation, and top university admissions.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAcademicTab === 'academic-calendar' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Session 2026-27
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Academic Calendar &amp; Term Planner
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Overview of terms, examinations, breaks, and campus celebrations
                      </p>
                    </div>

                    <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                      <div className="bg-slate-50 p-4 font-bold text-slate-800 flex justify-between">
                        <span>Event / Milestone</span>
                        <span>Schedule Dates</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700">
                        <span>Term I Commencement (Grades I to XII)</span>
                        <span className="font-semibold text-[#1E3A8A]">April 2, 2026</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700 bg-slate-50/50">
                        <span>Summer Vacation (Students)</span>
                        <span className="font-semibold text-[#1E3A8A]">May 20 – June 30, 2026</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700">
                        <span>Periodic Assessment - I</span>
                        <span className="font-semibold text-[#1E3A8A]">July 15 – July 25, 2026</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700 bg-slate-50/50">
                        <span>Half-Yearly / Mid-Term Examinations</span>
                        <span className="font-semibold text-[#1E3A8A]">September 14 – September 26, 2026</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700">
                        <span>Term II Commencement</span>
                        <span className="font-semibold text-[#1E3A8A]">October 5, 2026</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700 bg-slate-50/50">
                        <span>Annual Sports Day &amp; Cultural Fest</span>
                        <span className="font-semibold text-[#1E3A8A]">November 20 – November 22, 2026</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700">
                        <span>Pre-Board Examinations (Grades X &amp; XII)</span>
                        <span className="font-semibold text-[#1E3A8A]">December 10 – December 22, 2026</span>
                      </div>
                      <div className="p-4 flex justify-between items-center text-slate-700 bg-slate-50/50">
                        <span>Annual Board &amp; Final Examinations</span>
                        <span className="font-semibold text-[#1E3A8A]">February – March 2027</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAcademicTab === 'exam-policy' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                        CBSE Assessment Standards
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Examination &amp; Grading Policy
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Continuous &amp; Comprehensive Evaluation Ensuring Consistent Progress
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Evaluation is treated as an empowering diagnostic tool rather than a source of stress. We maintain a balanced assessment pattern combining pen-paper periodic tests, subject enrichment projects, notebook presentation, and experiential viva voce.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                        <span className="text-xs font-bold text-blue-600">80% Scholastic Component</span>
                        <h4 className="font-bold text-slate-900 text-sm">Board &amp; Term Tests</h4>
                        <p className="text-xs text-slate-600">
                          Periodic assessments, mid-term examinations, and final end-term question papers aligned with CBSE blueprints.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                        <span className="text-xs font-bold text-emerald-600">20% Internal Assessment</span>
                        <h4 className="font-bold text-slate-900 text-sm">Continuous Portfolio</h4>
                        <p className="text-xs text-slate-600">
                          Periodic test average (5 marks), diverse subject assessment (5 marks), portfolio &amp; notebook neatness (5 marks), and practical lab activities (5 marks).
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAcademicTab === 'digital-labs' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-cyan-700 bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                        Infrastructure &amp; Innovation
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Smart Labs &amp; Digital Classrooms
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        High-tech spaces bridging textbook theoretical concepts with live experimentation
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#1E3A8A] flex items-center justify-center font-bold text-xs">
                          AI
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">Robotics &amp; AI Lab</h4>
                        <p className="text-xs text-slate-600">
                          Equipped with 3D printers, sensor breakout boards, Arduino microcontrollers, and computer vision kits for prototyping.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs">
                          SC
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">Composite Science Labs</h4>
                        <p className="text-xs text-slate-600">
                          Spacious Physics, Chemistry, and Biology laboratories compliant with national safety standards and modern apparatus.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs">
                          IT
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">Smart Interactive Panels</h4>
                        <p className="text-xs text-slate-600">
                          75-inch 4K touchscreen Interactive Flat Panels (IFPs) installed across all classrooms with 3D simulations and cloud lesson tools.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl border border-slate-200 space-y-2">
                        <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xs">
                          LIB
                        </div>
                        <h4 className="font-bold text-slate-900 text-sm">Digital Knowledge Library</h4>
                        <p className="text-xs text-slate-600">
                          High-speed internet terminals offering access to digital archives, encyclopedias, research publications, and e-books.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
                {['All', 'Campus', 'Academics', 'Events', 'Hostel'].map((cat) => (
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
            VIEW E: NEWS & EVENTS PAGE (With Future Ready Skills List & Content)
        ================================================================== */}
        {activePage === 'NEWS & EVENTS' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                    Future Ready Skills &amp; Campus Life
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-0.5">
                    News, Events &amp; Programmes
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Click any skill or programme from the menu to explore curriculum highlights, activities, and student outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile / Quick Dropdown Selector */}
            <div className="lg:hidden bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase whitespace-nowrap">Select Programme:</span>
              <div className="relative flex-1">
                <select
                  value={selectedProgrammeId}
                  onChange={(e) => setSelectedProgrammeId(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-[#0e4b2d] focus:outline-none focus:ring-2 focus:ring-[#0e4b2d] appearance-none cursor-pointer"
                >
                  {FUTURE_READY_PROGRAMMES.map((prog) => (
                    <option key={prog.id} value={prog.id}>
                      {prog.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Interactive Master-Detail Section: Menu List (matching uploaded image) + Dynamic Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Menu List Styled Exactly Like the Image */}
              <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                {/* Menu Header matching green banner in image */}
                <div className="bg-[#0e4b2d] text-white px-5 py-3.5 flex items-center justify-between shadow-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm tracking-wide text-emerald-100">
                      Future Ready Skills
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-emerald-300" />
                </div>

                {/* Vertical List Items */}
                <div className="divide-y divide-slate-100 bg-white">
                  {FUTURE_READY_PROGRAMMES.map((prog) => {
                    const isSelected = selectedProgrammeId === prog.id;
                    return (
                      <div key={prog.id} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => setSelectedProgrammeId(prog.id)}
                          className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 text-[#0e4b2d] font-bold border-l-4 border-[#0e4b2d] pl-4'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span>{prog.label}</span>
                          {prog.hasSubmenu ? (
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 transition-transform ${
                                isSelected ? 'rotate-180 text-[#0e4b2d]' : ''
                              }`}
                            />
                          ) : (
                            <ChevronRight
                              className={`w-4 h-4 text-slate-300 ${
                                isSelected ? 'text-[#0e4b2d]' : ''
                              }`}
                            />
                          )}
                        </button>

                        {/* Expandable sub-items if active */}
                        {prog.hasSubmenu && isSelected && prog.subItems && (
                          <div className="bg-slate-50/90 px-6 py-2.5 space-y-1.5 border-t border-slate-100">
                            {prog.subItems.map((sub, idx) => (
                              <div
                                key={idx}
                                className="text-xs text-slate-600 flex items-center gap-2 py-0.5"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#0e4b2d]" />
                                <span>{sub}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Content Card */}
              <div className="lg:col-span-8 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {(() => {
                  const prog =
                    FUTURE_READY_PROGRAMMES.find((p) => p.id === selectedProgrammeId) ||
                    FUTURE_READY_PROGRAMMES[0];
                  return (
                    <div className="p-6 sm:p-8 space-y-6">
                      {/* Cover Photo Banner */}
                      <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                        <img
                          src={prog.bannerImage}
                          alt={prog.label}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 text-white">
                          <span className="self-start text-[10px] font-extrabold uppercase tracking-wider bg-[#0e4b2d] text-emerald-200 px-3 py-1 rounded-full mb-2 shadow">
                            {prog.category}
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight text-white">
                            {prog.label}
                          </h2>
                          <p className="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">
                            {prog.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Overview */}
                      <div className="space-y-2">
                        <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                          <BookOpen className="w-5 h-5 text-[#2563EB]" />
                          <span>Programme Overview</span>
                        </h3>
                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                          {prog.overview}
                        </p>
                      </div>

                      {/* Key Highlights */}
                      <div className="space-y-3">
                        <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span>Curriculum &amp; Activity Highlights</span>
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {prog.highlights.map((item, idx) => (
                            <div
                              key={idx}
                              className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-2.5 text-xs sm:text-sm"
                            >
                              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                                ✓
                              </span>
                              <span className="text-slate-700">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Learning Outcomes */}
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-50/70 to-indigo-50/50 border border-blue-100 space-y-3">
                        <h3 className="text-sm font-extrabold text-[#1E3A8A] flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#F97316]" />
                          <span>Key Student Outcomes &amp; Skills Acquired</span>
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                          {prog.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#2563EB] font-bold">•</span>
                              <span>{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Program Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                        <div>
                          <span className="font-bold text-slate-700">In-Charge / Faculty:</span>{' '}
                          <span>{prog.inCharge}</span>
                        </div>
                        <div>
                          <span className="font-bold text-slate-700">Schedule:</span>{' '}
                          <span>{prog.frequency}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Upcoming School Events & Celebrations */}
            <div className="space-y-4 pt-6 border-t border-slate-200/80">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                    Recent Events &amp; School News
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Academic milestones, national celebrations, and student recognitions
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
          </div>
        )}

        {/* ==================================================================
            VIEW F: CONTACT US PAGE (Master-Detail Dropdown List)
        ================================================================== */}
        {activePage === 'CONTACT US' && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
            {/* Page Title Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-sm flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                    Reach Out · We Are Here To Help
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight mt-0.5">
                    Contact Us
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Connect with Demo School administration, admissions cell, hostel office, and transport desk
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile / Quick Dropdown Selector */}
            <div className="lg:hidden bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase whitespace-nowrap">Contact Topic:</span>
              <div className="relative flex-1">
                <select
                  value={selectedContactTab}
                  onChange={(e) => setSelectedContactTab(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-[#0e4b2d] focus:outline-none focus:ring-2 focus:ring-[#0e4b2d] appearance-none cursor-pointer"
                >
                  {CONTACT_SECTIONS.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Interactive Master-Detail Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Dropdown Menu List */}
              <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                <div className="bg-[#0e4b2d] text-white px-5 py-3.5 flex items-center justify-between shadow-xs">
                  <span className="font-bold text-sm tracking-wide text-emerald-100">
                    Contact Directory
                  </span>
                  <ChevronDown className="w-4 h-4 text-emerald-300" />
                </div>

                <div className="divide-y divide-slate-100 bg-white">
                  {CONTACT_SECTIONS.map((sec) => {
                    const isSelected = selectedContactTab === sec.id;
                    return (
                      <div key={sec.id} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => setSelectedContactTab(sec.id)}
                          className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 text-[#0e4b2d] font-bold border-l-4 border-[#0e4b2d] pl-4'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span>{sec.label}</span>
                          <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#0e4b2d]' : 'text-slate-300'}`} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Content Detail Card */}
              <div className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                {(selectedContactTab === 'campus-location' || selectedContactTab === 'office-hours' || selectedContactTab === 'key-contacts' || selectedContactTab === 'hostel-office') && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Campus Office &amp; Helplines
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        {CONTACT_SECTIONS.find(c => c.id === selectedContactTab)?.label || 'Get in Touch'}
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        {CONTACT_SECTIONS.find(c => c.id === selectedContactTab)?.tagline}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-2 text-[#2563EB]">
                          <MapPin className="w-5 h-5" />
                          <h4 className="font-bold text-slate-900 text-sm">Campus Address</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Demo School, Main Campus Road, Jhansi, Uttar Pradesh - 284001
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-2 text-[#F97316]">
                          <Clock className="w-5 h-5" />
                          <h4 className="font-bold text-slate-900 text-sm">Office Hours</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Monday – Saturday: 8:00 AM – 3:30 PM<br />
                          Sunday &amp; Gazetted Holidays: Closed
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-2 text-emerald-600">
                          <Phone className="w-5 h-5" />
                          <h4 className="font-bold text-slate-900 text-sm">Phone Directory</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Reception: +91 98765 43210<br />
                          Admissions: +91 98765 43211<br />
                          Accounts: +91 98765 43212
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                        <div className="flex items-center gap-2 text-purple-600">
                          <Building2 className="w-5 h-5" />
                          <h4 className="font-bold text-slate-900 text-sm">Hostel Superintendent</h4>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Boys Warden: +91 98765 43215<br />
                          Girls Warden: +91 98765 43216<br />
                          24/7 Clinic: +91 98765 43217
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Need to send a direct written enquiry?</span>
                      <button
                        onClick={() => setSelectedContactTab('feedback-form')}
                        className="bg-[#1E3A8A] text-white text-xs font-bold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#172554]"
                      >
                        Open Message Form
                      </button>
                    </div>
                  </div>
                )}

                {selectedContactTab === 'feedback-form' && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Online Enquiry
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Send Us a Message
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Our administrative office will review your inquiry and respond within 24 business hours
                      </p>
                    </div>

                    {contactSubmitted ? (
                      <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                        <p className="font-extrabold text-emerald-900 text-base">Message Sent Successfully!</p>
                        <p className="text-xs text-emerald-700">
                          Thank you for contacting Demo School. Our admissions coordinator will get in touch shortly.
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
                          className="mt-3 inline-block bg-[#1E3A8A] text-white text-xs font-bold px-5 py-2.5 rounded-lg cursor-pointer"
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
                          required
                          rows="4"
                          placeholder="Your Message / Query in Detail *"
                          value={contactForm.message}
                          onChange={(e) =>
                            setContactForm({ ...contactForm, message: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-[#2563EB]"
                        />
                        <button
                          type="submit"
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1E3A8A] hover:bg-[#172554] text-white font-bold text-sm px-8 py-3 rounded-lg shadow cursor-pointer transition-all"
                        >
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </button>
                      </form>
                    )}
                  </div>
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

            {/* Mobile / Quick Dropdown Selector */}
            <div className="lg:hidden bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase whitespace-nowrap">Admission Topic:</span>
              <div className="relative flex-1">
                <select
                  value={selectedAdmissionTab}
                  onChange={(e) => setSelectedAdmissionTab(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-[#0e4b2d] focus:outline-none focus:ring-2 focus:ring-[#0e4b2d] appearance-none cursor-pointer"
                >
                  {ADMISSION_SECTIONS.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Interactive Master-Detail Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Dropdown Menu List */}
              <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                <div className="bg-[#0e4b2d] text-white px-5 py-3.5 flex items-center justify-between shadow-xs">
                  <span className="font-bold text-sm tracking-wide text-emerald-100">
                    Admission
                  </span>
                  <ChevronDown className="w-4 h-4 text-emerald-300" />
                </div>

                <div className="divide-y divide-slate-100 bg-white">
                  {ADMISSION_SECTIONS.map((sec) => {
                    const isSelected = selectedAdmissionTab === sec.id;
                    return (
                      <div key={sec.id} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => setSelectedAdmissionTab(sec.id)}
                          className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 text-[#0e4b2d] font-bold border-l-4 border-[#0e4b2d] pl-4'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span>{sec.label}</span>
                          <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#0e4b2d]' : 'text-slate-300'}`} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Content Detail Card */}
              <div className="lg:col-span-8 space-y-6">
                {selectedAdmissionTab === 'admission-form' && (
                  <>
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
                  </>
                )}

                {selectedAdmissionTab === 'check-status' && (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                    <div>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                        Application Tracking
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Check Admission Form Status
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Track the real-time processing and document verification of your registration
                      </p>
                    </div>

                    <form onSubmit={handleStatusLookup} className="space-y-4 max-w-lg">
                      <label className="block text-xs font-bold text-slate-700 uppercase">
                        Application Reference ID *
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          required
                          value={statusSearchId}
                          onChange={(e) => setStatusSearchId(e.target.value)}
                          placeholder="DS-2026-XXXX"
                          className="flex-grow px-4 py-2.5 rounded-lg border border-slate-200 text-sm uppercase font-mono focus:outline-none focus:border-[#2563EB]"
                        />
                        <button
                          type="submit"
                          className="bg-[#1E3A8A] text-white text-xs font-bold px-6 py-2.5 rounded-lg cursor-pointer hover:bg-[#172554] transition-all"
                        >
                          Check Status
                        </button>
                      </div>
                    </form>

                    {statusResult && (
                      <div
                        className={`p-5 rounded-xl border text-sm ${
                          statusResult.found
                            ? 'bg-blue-50/80 border-blue-200 text-slate-800'
                            : 'bg-amber-50 border-amber-200 text-amber-900'
                        }`}
                      >
                        {statusResult.found ? (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span className="font-extrabold text-[#1E3A8A] text-base">{statusResult.data.id}</span>
                              <span className="font-bold text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full text-xs">
                                {statusResult.data.status}
                              </span>
                            </div>
                            <p><span className="font-semibold text-slate-600">Student:</span> {statusResult.data.studentName}</p>
                            <p><span className="font-semibold text-slate-600">Class Applying:</span> {statusResult.data.classApplying}</p>
                            <p><span className="font-semibold text-slate-600">Submission Date:</span> {statusResult.data.date}</p>
                          </div>
                        ) : (
                          <p className="font-semibold">{statusResult.message}</p>
                        )}
                      </div>
                    )}

                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-bold text-slate-500 uppercase mb-3">Recently Submitted Applications:</h4>
                      <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs">
                        {submittedApplications.map((app) => (
                          <div key={app.id} className="p-3.5 flex items-center justify-between bg-slate-50/60">
                            <div>
                              <p className="font-bold text-slate-900">{app.studentName} ({app.classApplying})</p>
                              <p className="text-slate-500 text-[11px]">ID: {app.id} · Submitted: {app.date}</p>
                            </div>
                            <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                              {app.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {selectedAdmissionTab === 'fee-structure' && (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                    <div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                        Academic Year 2026-27
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Fee Structure &amp; Payment Schedule
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Transparent, inclusive tuition fees payable quarterly via school ERP portal
                      </p>
                    </div>

                    <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                      <div className="bg-slate-50 p-4 font-bold text-slate-800 grid grid-cols-4 gap-2">
                        <span className="col-span-2">Class / Grade Level</span>
                        <span className="text-right">Quarterly Fee</span>
                        <span className="text-right">Annual Total</span>
                      </div>
                      <div className="p-4 grid grid-cols-4 gap-2 items-center text-slate-700">
                        <span className="col-span-2 font-semibold">Primary Wing (Grades I – V)</span>
                        <span className="text-right font-bold text-[#1E3A8A]">₹18,500</span>
                        <span className="text-right font-bold text-slate-900">₹74,000</span>
                      </div>
                      <div className="p-4 grid grid-cols-4 gap-2 items-center text-slate-700 bg-slate-50/50">
                        <span className="col-span-2 font-semibold">Middle Wing (Grades VI – VIII)</span>
                        <span className="text-right font-bold text-[#1E3A8A]">₹22,000</span>
                        <span className="text-right font-bold text-slate-900">₹88,000</span>
                      </div>
                      <div className="p-4 grid grid-cols-4 gap-2 items-center text-slate-700">
                        <span className="col-span-2 font-semibold">Secondary Wing (Grades IX – X)</span>
                        <span className="text-right font-bold text-[#1E3A8A]">₹26,500</span>
                        <span className="text-right font-bold text-slate-900">₹1,06,000</span>
                      </div>
                      <div className="p-4 grid grid-cols-4 gap-2 items-center text-slate-700 bg-slate-50/50">
                        <span className="col-span-2 font-semibold">Senior Secondary (XI – XII Science / Commerce)</span>
                        <span className="text-right font-bold text-[#1E3A8A]">₹31,000</span>
                        <span className="text-right font-bold text-slate-900">₹1,24,000</span>
                      </div>
                      <div className="p-4 grid grid-cols-4 gap-2 items-center text-slate-700">
                        <span className="col-span-2 font-semibold">Hostel &amp; Boarding (Optional, All Grades)</span>
                        <span className="text-right font-bold text-[#F97316]">₹35,000</span>
                        <span className="text-right font-bold text-slate-900">₹1,40,000</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500">
                      * Fees include composite tuition, smart labs, library, internal sports, and IT portal access. One-time admission fee of ₹15,000 applicable for new enrollments.
                    </p>
                  </div>
                )}

                {selectedAdmissionTab === 'eligibility-criteria' && (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                    <div>
                      <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                        Guidelines &amp; Age Norms
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Age &amp; Eligibility Criteria
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        CBSE and Uttar Pradesh state education department admission age rules (as on March 31, 2026)
                      </p>
                    </div>

                    <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden text-xs sm:text-sm">
                      <div className="bg-slate-50 p-4 font-bold text-slate-800 grid grid-cols-3 gap-2">
                        <span>Class Applied For</span>
                        <span>Minimum Age (as of March 31)</span>
                        <span>Prerequisite Eligibility</span>
                      </div>
                      <div className="p-4 grid grid-cols-3 gap-2 items-center text-slate-700">
                        <span className="font-semibold">Nursery / LKG</span>
                        <span>3 Years Complete</span>
                        <span className="text-xs text-slate-500">Informal interaction</span>
                      </div>
                      <div className="p-4 grid grid-cols-3 gap-2 items-center text-slate-700 bg-slate-50/50">
                        <span className="font-semibold">Class 1</span>
                        <span>6 Years Complete</span>
                        <span className="text-xs text-slate-500">UKG Pass certificate</span>
                      </div>
                      <div className="p-4 grid grid-cols-3 gap-2 items-center text-slate-700">
                        <span className="font-semibold">Classes 2 to 8</span>
                        <span>7 to 13 Years as per grade</span>
                        <span className="text-xs text-slate-500">Previous Class Report Card &amp; TC</span>
                      </div>
                      <div className="p-4 grid grid-cols-3 gap-2 items-center text-slate-700 bg-slate-50/50">
                        <span className="font-semibold">Class 9</span>
                        <span>14 Years Complete</span>
                        <span className="text-xs text-slate-500">Class 8 Pass &amp; Diagnostic Test</span>
                      </div>
                      <div className="p-4 grid grid-cols-3 gap-2 items-center text-slate-700">
                        <span className="font-semibold">Class 11 (Science / Commerce)</span>
                        <span>16 Years Complete</span>
                        <span className="text-xs text-slate-500">Grade 10 Board Pass marksheet</span>
                      </div>
                    </div>
                  </div>
                )}

                {selectedAdmissionTab === 'documents-checklist' && (
                  <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200 space-y-6">
                    <div>
                      <span className="text-xs font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        Mandatory Checklist
                      </span>
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mt-2">
                        Required Documents Checklist
                      </h2>
                      <p className="text-sm text-slate-600 mt-1">
                        Please keep clear scanned photocopies ready at the time of admission verification
                      </p>
                    </div>

                    <div className="space-y-3">
                      {[
                        { title: 'Birth Certificate', desc: 'Original & self-attested photocopy issued by Municipal Corporation / Nagar Nigam.' },
                        { title: 'Transfer Certificate (TC)', desc: 'Original TC counter-signed by CBSE / State Education Board officer for Class 2 onwards.' },
                        { title: 'Previous Academic Report Card', desc: 'Photocopy of the annual marksheet/grade card of the last qualifying examination.' },
                        { title: 'Student Passport Photographs', desc: '6 recent passport-size colored photographs of the child in plain background.' },
                        { title: 'Parents Identification Proof', desc: 'Aadhaar Card, Voter ID, or Passport copies of father and mother / guardian.' },
                        { title: 'Proof of Residence', desc: 'Electricity bill, water bill, rent agreement, or Aadhaar Card showing current residential address.' },
                        { title: 'Medical Fitness Certificate', desc: 'Fitness record with blood group and immunization details signed by a registered MBBS doctor.' }
                      ].map((item, idx) => (
                        <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                            <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================================================================
            VIEW H: ABOUT HOSTEL PAGE (Complete Hostel Guide & Regulations)
        ================================================================== */}
        {(activePage === 'ABOUT HOSTEL' || activePage === 'About Hostel') && (
          <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-8">
            {/* Top Page Header Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#1E3A8A] text-white flex items-center justify-center shadow-md flex-shrink-0">
                  <Building2 className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                    Residential Community Life · DPS Bareilly
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] tracking-tight mt-0.5">
                    About Hostel
                  </h1>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                    (Separate Hostel for Boys and Girls) — A Comfortable Home Away from Home
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  <Bed className="w-3.5 h-3.5" /> AC Rooms
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <HeartPulse className="w-3.5 h-3.5" /> 24/7 Clinic
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                  <Utensils className="w-3.5 h-3.5" /> Pure Veg Mess
                </span>
              </div>
            </div>

            {/* Mobile / Quick Dropdown Selector */}
            <div className="lg:hidden bg-white p-3.5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase whitespace-nowrap">Select Hostel Topic:</span>
              <div className="relative flex-1">
                <select
                  value={selectedHostelTab}
                  onChange={(e) => setSelectedHostelTab(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-[#0e4b2d] focus:outline-none focus:ring-2 focus:ring-[#0e4b2d] appearance-none cursor-pointer"
                >
                  <option value="all-guide">★ Complete Guide (All Sections)</option>
                  {HOSTEL_SECTIONS.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3 top-2.5 pointer-events-none" />
              </div>
            </div>

            {/* Interactive Master-Detail Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Dropdown Menu List */}
              <div className="lg:col-span-4 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden sticky top-24">
                <div className="bg-[#0e4b2d] text-white px-5 py-3.5 flex items-center justify-between shadow-xs">
                  <span className="font-bold text-sm tracking-wide text-emerald-100">
                    About Hostel
                  </span>
                  <ChevronDown className="w-4 h-4 text-emerald-300" />
                </div>

                <div className="divide-y divide-slate-100 bg-white">
                  <button
                    type="button"
                    onClick={() => setSelectedHostelTab('all-guide')}
                    className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      selectedHostelTab === 'all-guide'
                        ? 'bg-emerald-50 text-[#0e4b2d] font-bold border-l-4 border-[#0e4b2d] pl-4'
                        : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span>★ Complete Guide (All Sections)</span>
                    <ChevronRight className={`w-4 h-4 ${selectedHostelTab === 'all-guide' ? 'text-[#0e4b2d]' : 'text-slate-300'}`} />
                  </button>

                  {HOSTEL_SECTIONS.map((sec) => {
                    const isSelected = selectedHostelTab === sec.id;
                    return (
                      <div key={sec.id} className="transition-colors">
                        <button
                          type="button"
                          onClick={() => setSelectedHostelTab(sec.id)}
                          className={`w-full text-left px-5 py-3.5 text-xs sm:text-sm font-semibold flex items-center justify-between transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-emerald-50 text-[#0e4b2d] font-bold border-l-4 border-[#0e4b2d] pl-4'
                              : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                          }`}
                        >
                          <span>{sec.label}</span>
                          <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#0e4b2d]' : 'text-slate-300'}`} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Dynamic Content Detail Card */}
              <div className="lg:col-span-8 space-y-8">
                {(selectedHostelTab === 'all-guide' || selectedHostelTab === 'hostel-overview') && (
                  <>
            {/* Overview / Introduction Section */}
            <div className="bg-gradient-to-br from-white via-white to-blue-50/40 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F97316]" />
                <span>Home Away From Home</span>
              </h2>
              <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  The boarding houses provide a comfortable home away from home. Here the student can unwind or study or chat about the latest trends. The emphasis is here on collective enjoyment. It has all the facilities that help the children live and grow as in their home.
                </p>
                <p>
                  It also recognizes the uniqueness of each individual and enables its members to synergize in a manner that enriches residential community life. The Hostel is designed to provide every facility for study, leisure and enjoyment, which can add so much to the school days and later life.
                </p>
              </div>
            </div>


                  </>
                )}

                {(selectedHostelTab === 'all-guide' || selectedHostelTab === 'photo-tour') && (
                  <>
            {/* Hostel Photo Gallery Showcase */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#2563EB]" />
                    <span>Hostel Campus &amp; Life Gallery</span>
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Click any photo to view in high definition
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-bold text-[#1E3A8A] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                  Campus Facilities
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1. Dormitory Room */}
                <div
                  onClick={() =>
                    setLightboxItem({
                      image: '/images/hostel/hostel-room.jpg',
                      title: 'Air-Conditioned Dormitory Room',
                      caption: 'Four-student sharing AC room with modern bunk beds, study stations, and individual wardrobes.'
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src="/images/hostel/hostel-room.jpg"
                      alt="Air-Conditioned Dormitory Room"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#1E3A8A]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow">
                      <Bed className="w-3.5 h-3.5" />
                      <span>Hostel Dormitory</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#2563EB] transition-colors">
                        Comfortable AC Accommodation
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Air-conditioned rooms in separate wings for boys &amp; girls with 4-sharing layout, study tables, and personal wardrobes.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-[#2563EB] mt-3 inline-flex items-center gap-1 group-hover:underline">
                      Click to expand photo &rarr;
                    </span>
                  </div>
                </div>

                {/* 2. Dining Hall & Mess */}
                <div
                  onClick={() =>
                    setLightboxItem({
                      image: '/images/hostel/hostel-dining.jpg',
                      title: 'Spacious & Hygienic Dining Hall',
                      caption: 'Well-ventilated mess serving wholesome, nutritious vegetarian meals prepared under hygienic supervision.'
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src="/images/hostel/hostel-dining.jpg"
                      alt="Hostel Dining Hall and Mess"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#1E3A8A]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow">
                      <Utensils className="w-3.5 h-3.5" />
                      <span>Dining &amp; Mess</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#2563EB] transition-colors">
                        Spacious Vegetarian Dining Hall
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Hygienic food prepared by trained chefs with a diverse vegetarian menu planned by the student-warden committee.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-[#2563EB] mt-3 inline-flex items-center gap-1 group-hover:underline">
                      Click to expand photo &rarr;
                    </span>
                  </div>
                </div>

                {/* 3. Study & Leisure */}
                <div
                  onClick={() =>
                    setLightboxItem({
                      image: '/images/hostel/hostel-study.jpg',
                      title: 'Supervised Study & Residential Life',
                      caption: 'Disciplined self-study hours and residential activities supervised by resident floor teachers and wardens.'
                    })
                  }
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all cursor-pointer flex flex-col"
                >
                  <div className="relative h-60 overflow-hidden bg-slate-100">
                    <img
                      src="/images/hostel/hostel-study.jpg"
                      alt="Hostel Study and Living Area"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 bg-[#1E3A8A]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full backdrop-blur-xs flex items-center gap-1.5 shadow">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Study &amp; Leisure</span>
                    </div>
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base group-hover:text-[#2563EB] transition-colors">
                        Study Hours &amp; Recreation
                      </h3>
                      <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                        Supervised study hours (9:00 PM – 11:00 PM), group discussions, and peer synergy fostering holistic personality development.
                      </p>
                    </div>
                    <span className="text-[11px] font-bold text-[#2563EB] mt-3 inline-flex items-center gap-1 group-hover:underline">
                      Click to expand photo &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>


                  </>
                )}

                {(selectedHostelTab === 'all-guide' || selectedHostelTab === 'hostel-overview' || selectedHostelTab === 'separate-wings' || selectedHostelTab === 'dining-mess' || selectedHostelTab === 'medical-clinic') && (
                  <>
            {/* Key Hostel Facilities Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-[#2563EB]" />
                  <span>World-Class Living Facilities</span>
                </h2>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Boys &amp; Girls Wings
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* 1. AC Rooms & TV */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
                    <Bed className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Air-Conditioned Rooms &amp; TV
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    There are air-conditioned rooms in separate wings for boys &amp; girls. Each room is shared by four students depending on the size of the room and class. A High Definition TV is provided for both boys and girls separately.
                  </p>
                </div>

                {/* 2. Computer Labs */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                    <Wifi className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Hi-Tech Computer Labs
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Computer labs are equipped with high-speed internet connection with the latest configuration, printers, and scanners for academic study and research support.
                  </p>
                </div>

                {/* 3. Resident Staff & Care */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Resident Staff &amp; Welfare
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Each wing of the Hostel has resident staff that looks after the students&apos; welfare and ensures that everything runs smoothly, providing constant guidance and mentorship.
                  </p>
                </div>

                {/* 4. Security & Campus Shops */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    World-Class Security &amp; Amenities
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Security is world-class, with fire sprinklers and fire alarms at regular intervals. Students have convenient on-campus access to a book shop, tailor shop, and canteen.
                  </p>
                </div>

                {/* 5. Hygienic Dining & Mess */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 text-orange-700 flex items-center justify-center">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    Hygienic Vegetarian Mess
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    A dedicated, trained team of cooks, supporting staff, and Assistant Wardens ensure hygienic food with variety at proper times. Vegetarian menu is decided by the Hostel Committee comprising Superintendent, Wardens, and student representatives.
                  </p>
                </div>

                {/* 6. 24/7 Medical Clinic */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    24/7 School Clinic &amp; Medical Care
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Functions 24/7 providing first-aid and immediate medical attention while maintaining detailed health records. For emergencies, the school promptly transports the child to the hospital under School Doctor/Nurse supervision and notifies parents.
                  </p>
                </div>
              </div>
            </div>


                  </>
                )}

                {(selectedHostelTab === 'all-guide' || selectedHostelTab === 'admission-procedure') && (
                  <>
            {/* Admission Procedure & Documentation */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  Enrolment Guidelines
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-[#1E3A8A]" />
                  <span>Hostel Admission Procedure</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  Parents seeking hostel accommodation in the school must submit a written application to the Principal. If the principal grants admission, the parents must deposit the hostel fee with the hotel accounts clerk. After obtaining the hostel fee, parents must report to the hostel superintendent to complete hostel admission formalities. They are to submit the requisite details indicated in the succeeding paragraph. After all the formalities have been completed, the hostel warden is informed accordingly, and the child is allotted a room etc. The Hostel Superintendent /Warden maintains a personal file of each child.
                </p>
              </div>

              {/* 4 Steps Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white font-extrabold text-xs flex items-center justify-center mb-2.5">
                    1
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Written Application</h4>
                  <p className="text-xs text-slate-600">
                    Parents submit a written application for hostel accommodation directly to the Principal.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white font-extrabold text-xs flex items-center justify-center mb-2.5">
                    2
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Fee Deposit</h4>
                  <p className="text-xs text-slate-600">
                    Upon approval by the Principal, deposit the prescribed hostel fee with the accounts clerk.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white font-extrabold text-xs flex items-center justify-center mb-2.5">
                    3
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Superintendent Formalities</h4>
                  <p className="text-xs text-slate-600">
                    Report to the Hostel Superintendent with the fee receipt and submit all mandatory document forms.
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80">
                  <div className="w-7 h-7 rounded-full bg-[#1E3A8A] text-white font-extrabold text-xs flex items-center justify-center mb-2.5">
                    4
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Room Allotment</h4>
                  <p className="text-xs text-slate-600">
                    Hostel Warden is formally notified, child is allotted a room, and personal file is created.
                  </p>
                </div>
              </div>

              {/* Documentation Formalities Checklist */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <h3 className="font-extrabold text-slate-900 text-base mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#2563EB]" />
                  <span>Mandatory Documentation Formalities Before Joining:</span>
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Before a student joins the Hostel, the following documentation formalities must be completed on forms supplied by the hostel superintendent:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Certificate from the local Guardian permitting the child to stay with them during sickness.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      The Performa duly completed must be handed over to the Hostel Superintendent and placed in the student&apos;s personal file.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      A certificate certifies that no cash / costly belongings are in the student&apos;s possession.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      A list of articles of clothing and other items to be deposited with the student, a copy to be handed over to the Superintendent/Warden.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      A Health Certificate regarding medical history must be duly checked and signed by the school infirmary in charge, parents and the hostel warden concerned.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      Indemnifying the school against any damage, sickness, accident or death caused in the normal functioning of usual activities.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 md:col-span-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">
                      An authority letter from the parent indicates two names and addresses (with two photographs, ID proof, address proof, telephone numbers and e-mail ID) who would act as the local Guardian. Only those persons will be allowed to become local guardians employed and living in a family environment.
                    </span>
                  </div>
                </div>

                {/* Warning note regarding Local Guardians */}
                <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-amber-900 font-medium">
                    <span className="font-bold">Important Notice:</span> In the case at any point of time, if it is observed that Local Guardians are non-cooperative/inactive, the admission of the boarders will be cancelled, and no fee refund will be given.
                  </p>
                </div>
              </div>
            </div>


                  </>
                )}

                {(selectedHostelTab === 'all-guide' || selectedHostelTab === 'rules-regulations') && (
                  <>
            {/* Rules and Regulations Section */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  Discipline &amp; Code of Conduct
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-[#1E3A8A]" />
                  <span>Rules and Regulations</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  All boarders and parents are required to strictly observe the following rules to maintain high standards of community living and academic excellence.
                </p>
              </div>

              {/* Categorized Rules Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Category 1: Daily Routine & Academics */}
                <div className="rounded-xl p-5 bg-slate-50 border border-slate-200/80 space-y-3">
                  <h3 className="font-extrabold text-[#1E3A8A] text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Clock className="w-4 h-4 text-[#F97316]" />
                    <span>Daily Routine, Academics &amp; Attendance</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Hostellers will follow the daily routine of the Hostel and school unless exempted on medical grounds or recommended by the Hostel Warden.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>No student will be allowed to enter the Hostel during school hours.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Compulsory Study Hours:</strong> 9.00 pm to 11.00 pm in the respective rooms. On examination days, study timings may be extended for self-study with prior permission of the respective Warden. All room lights must be switched off at 11.30 pm. Complete silence must be maintained.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Hostellers will remain in their rooms after the night roll-call for self-study under supervision by floor Wardens/Teachers.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Hostel Attendance:</strong> Taken thrice daily — Morning / Afternoon / Night.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Results of school tests and examinations will be sent to the parents through the Hostel Wardens within ten days after every exam.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Meal Timings:</strong> Strictly as per the School and Hostel schedule.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Birthday Celebrations:</strong> Held after dinner in the dining hall between 9.00 pm and 9.30 pm.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Physical Activity:</strong> Compulsory for all hostellers unless exempted by school infirmary. Evening sports uniform is mandatory for sports &amp; games.</span>
                    </li>
                  </ul>
                </div>

                {/* Category 2: Cash, Gadgets & Belongings */}
                <div className="rounded-xl p-5 bg-slate-50 border border-slate-200/80 space-y-3">
                  <h3 className="font-extrabold text-[#1E3A8A] text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Wallet className="w-4 h-4 text-[#F97316]" />
                    <span>Cash, Electronic Gadgets &amp; Belongings</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Hostellers cannot keep more than <strong>Rs.250/- in cash</strong> or any valuables. No hostel staff is liable for the loss of money possessed without permission.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Mobile Phone Ban:</strong> Use of Mobile phones is strictly prohibited in the school/Hostel. If found, it will be confiscated, and a <strong>fine of Rs.5,000/-</strong> will be imposed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Electrical Appliances Ban:</strong> Heaters, kettles, irons or other such appliances are strictly prohibited. Violators face permanent confiscation and a <strong>fine of Rs.500/-</strong>.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Parents are requested to maintain at least <strong>Rs.10,000/-</strong> in the school account as pocket money for personal needs. Students can withdraw whenever needed.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Hostellers will not be allowed to keep or take medicines/tonics without the express knowledge of the Hostel Warden / Medical Officer.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Cupboards must be arranged neatly. The Hostel Warden conducts surprise checks. Any extra items beyond the hostel kit will be confiscated.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Any hosteller falling sick must report to the hostel clinic. Emergency cases will be escorted immediately to the School Clinic by the Hostel Warden.</span>
                    </li>
                  </ul>
                </div>

                {/* Category 3: Outings, Leaves & Curfews */}
                <div className="rounded-xl p-5 bg-slate-50 border border-slate-200/80 space-y-3">
                  <h3 className="font-extrabold text-[#1E3A8A] text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Calendar className="w-4 h-4 text-[#F97316]" />
                    <span>Outings, Leaves &amp; Reporting Timings</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Outing Schedule:</strong> Only one outing permitted per month (2nd Saturday or last Saturday/Sunday of the month).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Students visit Local Guardians through a Gate Pass issued by the Hostel Warden. <strong>AUTHORITY LETTERS WILL NOT BE ACCEPTED.</strong> Parents or Local Guardians must collect their wards personally.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Sunday 6:00 PM Curfew:</strong> Entry after monthly outings must be before 6.00 pm on Sunday. No student will be allowed to enter the Hostel after 6.00 pm, even when returning from term breaks. If transport reaches after 6.00 pm, the ward must stay at the Local Guardian&apos;s place and be dropped to school the next morning before school begins.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Late Reporting Penalty:</strong> All students must report on the scheduled date. Defaulters will be fined <strong>Rs.1,000/- per day</strong> or face cancellation of admission. Emergency delays must be informed in writing well in advance to the Principal/Academic Coordinator/Hostel Warden.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Leave for functions or events during the term is only entertained if pertaining to parents or siblings, with prior written permission from the Principal.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>In case of illness leave, a doctor&apos;s medical certificate is required for prior permission. When returning, the student must submit a Fitness Certificate / Covid negative report.</span>
                    </li>
                  </ul>
                </div>

                {/* Category 4: Visitors, Guardians & General Discipline */}
                <div className="rounded-xl p-5 bg-slate-50 border border-slate-200/80 space-y-3">
                  <h3 className="font-extrabold text-[#1E3A8A] text-sm flex items-center gap-2 border-b border-slate-200 pb-2">
                    <Users className="w-4 h-4 text-[#F97316]" />
                    <span>Visitors, Guardian Rules &amp; Discipline</span>
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Room Entry Prohibition:</strong> Visitors and Parents are NOT allowed to visit Hostel Rooms. They will meet their wards at the school&apos;s Reception area in the hostel warden&apos;s presence.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Calling Hours:</strong> Parents and Local Guardians can contact their wards between <strong>6.00 pm to 8.00 pm</strong> on designated call days. Parents are requested not to force the Warden to talk except on scheduled call days.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Only individuals living in a family environment with their own residence can act as Local Guardians. No existing student can be a Local Guardian to a hosteller of DPS Bareilly.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Parents must leave an active phone number and emergency address with the Warden for immediate contact.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Parents/Guardians are not allowed to meet their ward for one or two days without prior information.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span>Students will be punished for scribbling/graffiti, using foul language, unruly behaviour, or vandalism. Damage charges for hostel property will be borne equally by all room occupants or the detected offender.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Zero Tolerance:</strong> Serious offences such as cheating, stealing, bullying, physical violence, or property damage will be dealt with severely and lead to suspension or expulsion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#2563EB] font-bold">•</span>
                      <span><strong>Withdrawal Norms:</strong> No student is allowed to leave during the session. Converting from hosteller to day-scholar requires 2 months prior application with TC issued. Upon withdrawal, existing and preceding quarter fees are payable and non-refundable.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


                  </>
                )}

                {(selectedHostelTab === 'all-guide' || selectedHostelTab === 'visiting-timings' || selectedHostelTab === 'warden-contacts') && (
                  <>
            {/* Visiting Hours Table */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                <Clock className="w-5 h-5 text-[#2563EB]" />
                <h3 className="text-lg font-extrabold text-slate-900">
                  Parent &amp; Guardian Visiting Hours
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#1E3A8A] text-white">
                      <th className="py-3 px-4 font-bold rounded-tl-xl">Day(s)</th>
                      <th className="py-3 px-4 font-bold">Morning Timings</th>
                      <th className="py-3 px-4 font-bold rounded-tr-xl">Evening Timings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 border border-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-800">
                        Weekend Holidays
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-medium">
                        10.00 am - 12.00 pm
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-medium">
                        4.00 pm - 6.00 pm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500 italic">
                Meetings take place exclusively at the school Reception area in the presence of the Hostel Warden.
              </p>
            </div>

            {/* Important Hostel Contact Directory */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-100 space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-[#F97316] uppercase tracking-wider">
                  Official Communication
                </span>
                <h3 className="text-lg font-extrabold text-slate-900 flex items-center gap-2 mt-1">
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                  <span>Hostel Contact &amp; Permission Directory</span>
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  (Note: Other than scheduled meeting time, parents/local guardians must obtain prior permission by sending an e-mail from any one of the following at least a day in advance.)
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[#1E3A8A] text-white">
                      <th className="py-3 px-4 font-bold rounded-tl-xl">DESIGNATION</th>
                      <th className="py-3 px-4 font-bold">E-MAIL ADDRESS</th>
                      <th className="py-3 px-4 font-bold">CONTACT NO.</th>
                      <th className="py-3 px-4 font-bold rounded-tr-xl">TIME TO CONTACT</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 border border-slate-200">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Boys Hostel In-charge
                      </td>
                      <td className="py-3.5 px-4 text-[#2563EB] font-medium">
                        <a href="mailto:boyshostel@dpsbareilly.com" className="hover:underline">
                          boyshostel@dpsbareilly.com
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold font-mono">
                        <a href="tel:+917055446660" className="hover:underline">
                          +91-7055446660
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        9:00 am – 8:00 pm
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Girls Hostel In-charge
                      </td>
                      <td className="py-3.5 px-4 text-[#2563EB] font-medium">
                        <a href="mailto:girlshostel@dpsbareilly.com" className="hover:underline">
                          girlshostel@dpsbareilly.com
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold font-mono">
                        <a href="tel:+917055446661" className="hover:underline">
                          +91-7055446661
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        9:00 am – 8:00 pm
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Front Desk Officer
                      </td>
                      <td className="py-3.5 px-4 text-[#2563EB] font-medium">
                        <a href="mailto:contact@dpsbareilly.com" className="hover:underline">
                          contact@dpsbareilly.com
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold font-mono">
                        <a href="tel:+917055446662" className="hover:underline">
                          +91-7055446662
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        9:00 am – 4:00 pm
                      </td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        Principal
                      </td>
                      <td className="py-3.5 px-4 text-[#2563EB] font-medium">
                        <a href="mailto:principal@dpsbareilly.com" className="hover:underline">
                          principal@dpsbareilly.com
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-700 font-semibold font-mono">
                        <a href="tel:+919956292762" className="hover:underline">
                          +91-9956292762
                        </a>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600">
                        Office Hours
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

                  </>
                )}

              </div>
            </div>
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
                  onClick={() => navigateTo('ABOUT HOSTEL')}
                  className="text-left hover:text-white transition-colors cursor-pointer"
                >
                  About Hostel
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
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
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

        {themePickerOpen && (
          <div className="w-56 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl" role="dialog" aria-label="Choose website color">
            <p className="mb-2 px-1 text-xs font-extrabold uppercase tracking-wide text-slate-500">Website colors</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: 'default', label: 'Royal blue', color: '#2563eb' },
                { id: 'gray', label: 'Gray', color: '#64748b' },
                { id: 'black', label: 'Black', color: '#18181b' },
                { id: 'light-green', label: 'Light green', color: '#10b981' },
                { id: 'orange', label: 'Orange', color: '#f97316' },
                { id: 'purple', label: 'Purple', color: '#8b5cf6' },
                { id: 'teal', label: 'Teal', color: '#14b8a6' },
              ].map((theme) => (
                <button
                  key={theme.id}
                  type="button"
                  onClick={() => setSelectedTheme(theme.id)}
                  aria-pressed={selectedTheme === theme.id}
                  className={`flex items-center gap-2 rounded-xl border px-2 py-2 text-left text-[11px] font-semibold text-slate-700 transition-colors hover:bg-slate-50 ${selectedTheme === theme.id ? 'border-slate-400 bg-slate-50 ring-1 ring-slate-300' : 'border-slate-200'}`}
                >
                  <span className="h-4 w-4 shrink-0 rounded-full border border-black/10" style={{ backgroundColor: theme.color }} />
                  {theme.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => setThemePickerOpen((open) => !open)}
          aria-label="Choose website color"
          aria-expanded={themePickerOpen}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/80 bg-white text-slate-700 shadow-xl transition-transform hover:scale-105 hover:bg-slate-50 cursor-pointer"
        >
          <Palette className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={() => setChatOpen(!chatOpen)}
          aria-label={chatOpen ? 'Close Support Chat' : 'Open Support Chat'}
          className="grid h-14 w-14 place-items-center rounded-full bg-[#14532D] text-white shadow-xl transition-transform hover:scale-105 hover:bg-[#166534] cursor-pointer"
        >
          {chatOpen ? <X className="h-6 w-6" /> : (
            <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
              <path d="M16.02 3.2A12.62 12.62 0 0 0 5.14 22.2L3.4 28.55l6.5-1.7a12.64 12.64 0 1 0 6.12-23.65Zm0 22.94c-1.85 0-3.66-.5-5.25-1.45l-.38-.22-3.86 1.01 1.03-3.76-.25-.39a10.27 10.27 0 1 1 8.71 4.81Zm5.64-7.7c-.31-.15-1.82-.9-2.1-1-.28-.1-.49-.15-.7.16-.2.31-.8 1-.98 1.2-.18.2-.36.23-.67.08-.31-.16-1.3-.48-2.47-1.52-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.13-.63.14-.14.31-.36.46-.54.15-.18.2-.31.3-.52.1-.2.05-.38-.03-.54-.08-.15-.7-1.68-.96-2.3-.25-.6-.51-.52-.7-.53h-.6c-.2 0-.54.08-.82.39-.28.31-1.07 1.05-1.07 2.57 0 1.51 1.1 2.98 1.25 3.18.15.2 2.17 3.31 5.25 4.64.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.82-.75 2.08-1.48.26-.72.26-1.34.18-1.47-.08-.13-.28-.2-.59-.36Z" />
            </svg>
          )}
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
