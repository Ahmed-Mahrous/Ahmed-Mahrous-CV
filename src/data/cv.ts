export const profile = {
  name: "Ahmed Mahrous",
  title: "Flutter Developer",
  headline: "Flutter Developer & Scrum Master @ Epic Systems · Part-time @ Rafiqi",
  location: "Cairo, Egypt",
  email: "ahmedmahrous768@gmail.com",
  phone: "01063321062",
  phoneHref: "tel:+201063321062",
  phoneDisplay: "01063321062",
  linkedin: "https://www.linkedin.com/in/ahmedmahrous3255",
  github: "https://github.com/Ahmed-Mahrous",
  companySite: "https://www.epicsyst.com/",
  photo: "/ahmed-mahrous.png",
  pdf: "/Ahmed-Mahrous-Flutter-Developer.pdf",
  summary:
    "Flutter developer and Scrum Master with production experience across Android and iOS. Currently a software engineer at Epic Systems, where I also serve as Scrum Master, and a part-time engineer at Rafiqi on a gamified learning platform for primary-school students. Builds with Bloc, clean architecture, Firebase, and REST APIs, and uses vibe coding in Cursor and Claude to move from idea to working software quickly without dropping code quality.",
};

export type Experience = {
  role: string;
  company: string;
  type: string;
  location: string;
  start: string;
  end: string;
  current: boolean;
  bullets: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Flutter Developer",
    company: "Epic Systems",
    type: "Full-time",
    location: "Zamalek, Cairo, Egypt",
    start: "Dec 2024",
    end: "Present",
    current: true,
    bullets: [
      "Build and maintain production Flutter apps for Android and iOS across Epic’s product line and client work.",
      "Own live-location features on TrackN for outdoor technical staff: GPS, maps, geofencing, and manager visibility.",
      "Ship Cashy (POS / cash-flow), CRMNT (sales CRM and call logging), QudraaTech, Espressolab EG, Adlifiy digital signage, and the Family Doctor pair (patient + doctor) for the IML project.",
      "Integrate REST APIs, local storage, and push notifications; debug and release in Agile sprints with design and backend.",
    ],
    stack: [
      "Flutter",
      "Dart",
      "Bloc / Cubit",
      "Dio",
      "GPS / Geolocator",
      "SQLite",
      "REST APIs",
      "Git",
    ],
  },
  {
    role: "Scrum Master",
    company: "Epic Systems",
    type: "Full-time",
    location: "Zamalek, Cairo, Egypt",
    start: "16 Jul 2026",
    end: "Present",
    current: true,
    bullets: [
      "Serve as Scrum Master for the Epic Systems product team from 16 July 2026, alongside Flutter development.",
      "Facilitate sprint planning, daily stand-ups, reviews, and retrospectives, and keep delivery aligned with sprint goals.",
      "Remove impediments, protect focus time, and coordinate Flutter, design, and backend so work reaches production on cadence.",
      "Coach the team on Scrum practices, backlog refinement, and continuous improvement.",
    ],
    stack: ["Scrum", "Agile", "Sprint planning", "Facilitation", "Jira"],
  },
  {
    role: "Flutter Developer",
    company: "Rafiqi",
    type: "Part-time",
    location: "Egypt · Remote",
    start: "Aug 2026",
    end: "Present",
    current: true,
    bullets: [
      "Part-time from 23 August 2026 on Rafiqi, a gamified learning product for primary-school students.",
      "Build the two Flutter apps in the Rafiqi suite: the student learning app and the teacher companion for lessons, progress, and classroom follow-up.",
      "Turn curriculum into games, quizzes, streaks, and rewards so kids stay in the lesson instead of bouncing off a textbook screen.",
    ],
    stack: ["Flutter", "Dart", "Bloc", "Gamification", "REST APIs"],
  },
  {
    role: "Flutter Developer Intern",
    company: "Slash Hub",
    type: "Internship",
    location: "Cairo, Egypt",
    start: "Oct 2024",
    end: "Present",
    current: true,
    bullets: [
      "Work on Slash Main and Slash Seller — Flutter e-commerce for Android, iOS, and web.",
      "Integrate REST APIs, apply Clean Architecture and Bloc / Cubit, and join Agile ceremonies.",
      "Debug, test, and keep shopper and seller flows stable across devices.",
    ],
    stack: [
      "Flutter",
      "Bloc / Cubit",
      "Clean Architecture",
      "MVVM",
      "REST APIs",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Freelance",
    type: "Freelance",
    location: "Egypt · Remote",
    start: "2024",
    end: "2024",
    current: false,
    bullets: [
      "Built a multi-vendor Flutter app for dogs so each dog’s friends can connect — a social marketplace where pets (and their people) find each other.",
      "Used Bloc for state and Firebase as the backend: auth, profiles, listings, and realtime connections between dogs.",
    ],
    stack: ["Flutter", "Bloc", "Firebase"],
  },
  {
    role: "Graphic Designer",
    company: "Freelance",
    type: "Freelance",
    location: "Egypt · Remote",
    start: "Sep 2020",
    end: "Oct 2021",
    current: false,
    bullets: [
      "Designed logos, banners, and visual systems for digital products.",
      "Carried that craft into later Flutter work — icons, storefront imagery, and UI that is not a default Material template.",
    ],
    stack: ["Branding", "UI / UX", "Visual design"],
  },
];

export type Project = {
  slug: string;
  name: string;
  arabicName?: string;
  company: string;
  category: "epic" | "rafiqi" | "freelance";
  featured: boolean;
  year: string;
  summary: string;
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "quick-cart",
    name: "QuickCart",
    company: "Personal",
    category: "freelance",
    featured: true,
    year: "2024",
    summary:
      "Self-directed e-commerce Flutter app built to practice production patterns — architecture, auth, maps, and a designed storefront rather than a tutorial clone.",
    highlights: [
      "Clean Architecture with Cubit, Dio, and SOLID structure.",
      "Firebase Auth plus Google sign-in.",
      "Geolocator and geocoding, localization, and custom branding from my design work.",
    ],
    stack: [
      "Flutter",
      "Bloc / Cubit",
      "Firebase Auth",
      "Dio",
      "Geolocator",
      "Localization",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/Ahmed-Mahrous/quick_cart" },
    ],
  },
  {
    slug: "dog-connect",
    name: "Multi-vendor app for dogs",
    company: "Freelance",
    category: "freelance",
    featured: true,
    year: "2024",
    summary:
      "Multi-vendor Flutter app where dogs (and their people) connect. Vendors list services and products; each dog can make friends and keep those connections in one place.",
    highlights: [
      "Social graph so a dog’s friends can find and connect with other dogs.",
      "Multi-vendor catalog for pet services and products.",
      "Bloc for app state and Firebase as the backend (auth, data, realtime).",
    ],
    stack: ["Flutter", "Bloc", "Firebase Auth", "Cloud Firestore", "Realtime"],
  },
  {
    slug: "cashy",
    name: "Cashy",
    company: "Epic Systems",
    category: "epic",
    featured: true,
    year: "2024 – Present",
    summary:
      "Financial and POS Flutter client from Epic Systems: invoices, payments, inventory, and cash-flow on phone or desktop-connected workflows.",
    highlights: [
      "Mobile checkout and inventory so staff can sell on the floor.",
      "Invoices, payments, and cash-flow views synced to the backend.",
      "Offline-tolerant tickets with later sync.",
    ],
    stack: ["Flutter", "Dio", "SQLite", "REST APIs"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.epicsystems.cashy",
      },
      {
        label: "Product page",
        href: "https://epicsyst.com/cashy-details.php",
      },
    ],
  },
  {
    slug: "trackn",
    name: "TrackN",
    company: "Epic Systems",
    category: "epic",
    featured: true,
    year: "2024 – Present",
    summary:
      "Live-location product for outdoor technical staff. Managers see where the team is, allocate work, and respond when someone needs help.",
    highlights: [
      "Real-time GPS so coordinators know where technicians are without a phone call.",
      "Maps, geofencing, and field attendance.",
      "Offline-tolerant location updates with background sync.",
    ],
    stack: [
      "Flutter",
      "Geolocator",
      "Maps",
      "Geofencing",
      "Dio",
      "SQLite",
      "Live location",
    ],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.epicsyst.trackn",
      },
      {
        label: "Product page",
        href: "https://epicsyst.com/track-details.php",
      },
    ],
  },
  {
    slug: "crmnt",
    name: "CRMNT",
    company: "Epic Systems",
    category: "epic",
    featured: true,
    year: "2025 – Present",
    summary:
      "Mobile CRM for sales and field teams: leads, call logging, dashboards, and follow-ups so a conversation does not disappear after the phone hangs up.",
    highlights: [
      "Sync call metadata (number, time, direction, duration) into the company CRM.",
      "Lead tracking, contacts, and sales dashboards with live KPIs.",
      "Background sync, dual-SIM line pick, and push alerts for operational updates.",
    ],
    stack: ["Flutter", "REST APIs", "Call log sync", "Push notifications"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.epicsyst.crmnt_cs",
      },
    ],
  },
  {
    slug: "family-doctor-patients",
    name: "Family Doctor — Patients",
    company: "IML project · Epic Systems",
    category: "epic",
    featured: true,
    year: "2025 – Present",
    summary:
      "Patient app for the IML Family Doctor project. Patients book visits, follow their family doctor, and keep medical touchpoints on the phone.",
    highlights: [
      "Book and manage appointments with the family doctor.",
      "Visit history, prescriptions, and follow-up reminders.",
      "Secure auth and API-backed medical records the patient is allowed to see.",
    ],
    stack: ["Flutter", "Bloc", "REST APIs", "Firebase"],
  },
  {
    slug: "family-doctor-doctors",
    name: "Family Doctor — Doctors",
    company: "IML project · Epic Systems",
    category: "epic",
    featured: true,
    year: "2025 – Present",
    summary:
      "Doctor app for the same IML Family Doctor project. Clinicians see the day’s list, patient context, and visit notes without opening a desktop EMR first.",
    highlights: [
      "Schedule, patient list, and visit documentation.",
      "Paired with the patient app so both sides share the same appointment and record flow.",
      "Notifications for new bookings and cancellations.",
    ],
    stack: ["Flutter", "Bloc", "REST APIs", "Push notifications"],
  },
  {
    slug: "qudraatech",
    name: "QudraaTech",
    company: "Qudraat · Epic Systems",
    category: "epic",
    featured: true,
    year: "2025 – Present",
    summary:
      "Kid-friendly quiz app that helps parents and educators spot a child’s interest across marketing, robotics, programming, and design.",
    highlights: [
      "Short quiz with no prior tech knowledge required.",
      "Instant suggestion of the best-fit field plus learning recommendations.",
      "Simple UI aimed at children, parents, and teachers.",
    ],
    stack: ["Flutter", "Quizzes", "REST APIs"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.EpicSystems.qudrat",
      },
      { label: "Qudraat", href: "https://qudraat.com" },
    ],
  },
  {
    slug: "espressolab-eg",
    name: "Espressolab EG",
    company: "Espressolab · Epic Systems",
    category: "epic",
    featured: true,
    year: "2025 – Present",
    summary:
      "Flutter work for Espressolab Egypt: store-facing mobile flows for Egyptian branches — ordering, offers, and in-café experience.",
    highlights: [
      "Egypt-branch mobile experience on Flutter.",
      "Menus, offers, and store workflows wired to backend APIs.",
      "Release-ready UI for café staff and guests.",
    ],
    stack: ["Flutter", "REST APIs", "Bloc"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.epicsystems.espressolab",
      },
    ],
  },
  {
    slug: "adlifiy",
    name: "Adlifiy",
    company: "Epic Systems",
    category: "epic",
    featured: true,
    year: "2025 – Present",
    summary:
      "Digital signage app: playlists, menus, and ads on venue screens, managed from a Flutter player and content flow.",
    highlights: [
      "Screen player for looping media, menus, and promotions.",
      "Remote content updates so a café or shop does not need a USB stick.",
      "Scheduling and playlist control for multiple displays.",
    ],
    stack: ["Flutter", "Digital signage", "Media playback", "REST APIs"],
  },
  {
    slug: "rafiqi-student",
    name: "Rafiqi Student",
    arabicName: "رفيقي",
    company: "Rafiqi",
    category: "rafiqi",
    featured: true,
    year: "2026 – Present",
    summary:
      "Gamified learning app for primary-school students: lessons become games, quizzes, and streaks instead of a static homework PDF.",
    highlights: [
      "Age-appropriate lessons with points, levels, and rewards.",
      "Quizzes and practice loops that keep kids in the session.",
      "Progress the teacher app can see.",
    ],
    stack: ["Flutter", "Bloc", "Gamification", "REST APIs"],
  },
  {
    slug: "rafiqi-teacher",
    name: "Rafiqi Teacher",
    arabicName: "رفيقي",
    company: "Rafiqi",
    category: "rafiqi",
    featured: true,
    year: "2026 – Present",
    summary:
      "Companion Flutter app for teachers: assign lessons, watch class progress, and follow up on the same gamified curriculum the students play.",
    highlights: [
      "Classroom and student progress views.",
      "Assign activities and review quiz results.",
      "Paired with Rafiqi Student so both apps share the same learning graph.",
    ],
    stack: ["Flutter", "Bloc", "REST APIs", "Classroom analytics"],
  },
];

export const skillGroups = [
  {
    title: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "Android",
      "iOS",
      "Flutter Web",
      "Responsive UI",
      "Custom widgets",
    ],
  },
  {
    title: "Architecture & state",
    items: [
      "Clean Architecture",
      "MVVM",
      "SOLID",
      "OOP",
      "Bloc",
      "Cubit",
      "Provider",
      "GetX",
    ],
  },
  {
    title: "Data & backend",
    items: [
      "REST APIs",
      "Dio",
      "Firebase",
      "Cloud Firestore",
      "Firebase Auth",
      "SQLite",
      "Hive",
      "Shared Preferences",
    ],
  },
  {
    title: "Location, CRM & media",
    items: [
      "Geolocator",
      "Maps",
      "Geofencing",
      "Live location",
      "Push notifications",
      "Digital signage",
      "Call-log sync",
    ],
  },
  {
    title: "AI-assisted development",
    items: [
      "Vibe coding",
      "Cursor",
      "Claude",
      "Agentic workflows",
      "AI code review",
    ],
  },
  {
    title: "Quality & delivery",
    items: [
      "Git & GitHub",
      "Agile / Scrum",
      "Scrum Master",
      "Sprint planning",
      "Debugging",
      "Error handling",
      "Localization (AR / EN)",
    ],
  },
  {
    title: "Other",
    items: ["Python", "C++", "UI / UX", "Graphic design", "Gamification"],
  },
];

export const education = [
  {
    school: "Suez University",
    degree: "B.Sc. Computers and Information",
    years: "2018 – 2022",
    detail: "Grade B+ · GPA 3.4",
  },
];

export const courses = [
  {
    name: "Complete Flutter & Dart Development Course",
    issuer: "Udemy",
  },
  {
    name: "Flutter Advanced Course — Bloc and MVVM",
    issuer: "Udemy",
  },
  {
    name: "Clean Architecture with MVVM in Flutter",
    issuer: "Udemy",
  },
  {
    name: "Master SOLID Principles",
    issuer: "Udemy",
  },
  {
    name: "Master Git & GitHub: Essential Skills for Developers",
    issuer: "Udemy",
  },
  {
    name: "C++",
    issuer: "Udemy",
  },
  {
    name: "Android Development Basics with Java",
    issuer: "1 Million Arab Coders",
  },
  {
    name: "Frontend Development Track",
    issuer: "1 Million Arab Coders",
  },
  {
    name: "Visual Elements of User Interface Design",
    issuer: "CalArts / Coursera",
  },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional working" },
];
