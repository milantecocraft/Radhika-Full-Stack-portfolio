/**
 * Single source of truth - content sourced from Radhika's CV and the live
 * project sites. Update here; every section renders from this file.
 */

export const site = {
  name: "Radhika Gondaliya",
  role: "Full Stack Developer",
  tagline:
    "I build scalable, high-performance web applications with React, Next.js, and Node - from architecture to launch.",
  location: "India · Working globally (remote)",
  email: "radhikagondaliya2106@gmail.com",
  availability: true,
  availabilityNote: "Open to new projects & roles",
  // Get a free key at https://web3forms.com (register with the email above).
  web3formsKey: "eb03c1b8-adcb-4802-b3f3-21dfa7f3c8fe", // equired for the contact form
  socials: {
    linkedin: "https://www.linkedin.com/in/radhika-g-33b172249/",
    github: "https://github.com/radhikagondaliya/", // add GitHub profile
  },
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroStats = [
  { value: "7+", label: "Years experience" },
  { value: "25+", label: "Website & Apps shipped end-to-end" },
  { value: "9", label: "Industry domains" },
];

// Terminal "dev profile" typed in the hero.
export const terminalLines = [
  { prompt: "~ $", cmd: "whoami" },
  { out: "radhika - full-stack developer" },
  { prompt: "~ $", cmd: "cat stack.json" },
  { out: '{ "frontend": ["React", "Next.js", "TypeScript"],' },
  { out: '  "backend": ["Node.js", "NestJS", "GraphQL"],' },
  { out: '  "db": ["MongoDB", "MySQL"], "years": 7 }' },
  { prompt: "~ $", cmd: "npm run ship-it 🚀" },
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  problem: string;
  role: string;
  stack: string[];
  outcome: string;
  cover: string;
  liveUrl: string;
  overview: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "tropicalsky",
    name: "Tropical Sky",
    category: "Travel & Tourism · Booking Platform",
    problem:
      "An award-winning luxury tour operator needed a fast, content-rich site covering hundreds of destinations, offers, and tailor-made itineraries.",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "REST APIs"],
    outcome: "A high-performance travel platform serving bespoke holidays across every continent.",
    cover: "/projects/tropicalsky.jpg",
    liveUrl: "https://www.tropicalsky.co.uk/",
    overview:
      "Tropical Sky is an award-winning UK tour operator (Feefo Platinum Trusted Service) selling tailor-made luxury holidays worldwide - from the Caribbean and Indian Ocean to Australia and the polar regions. I worked across the stack on the destination browsing, offers, and enquiry experience for a site with a huge content footprint.",
    highlights: [
      "Destination and offer pages spanning 10+ world regions and sister brands.",
      "Performance-focused rendering for content-heavy, SEO-critical pages.",
      "Enquiry and lead flows connecting travellers to specialist agents.",
    ],
  },
  {
    slug: "practiceperfect",
    name: "Practice Perfect",
    category: "HealthTech · Clinical Training",
    problem:
      "Clinicians preparing for NHS consultations needed realistic practice - but real patients aren't a rehearsal space.",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "AI APIs", "MongoDB"],
    outcome: "AI-powered patient simulations that sharpen real consultation skills, mapped to NHS assessment frameworks.",
    cover: "/projects/practiceperfect.jpg",
    liveUrl: "https://www.practiceperfect.co.uk/",
    overview:
      "Practice Perfect lets clinicians rehearse consultations with realistic, AI-powered patients who think, speak, and respond naturally - every case grounded in authentic patient identities reflecting the diversity of the NHS population, and structured around NHS training frameworks (data gathering, clinical management, relating to others). I engineered the simulation platform end to end.",
    highlights: [
      "Real-time AI patient dialogue for consultation practice.",
      "Case library mapped to NHS assessment domains (SCA series).",
      "Instant, personalised feedback on questioning, empathy, and structure.",
    ],
  },
  {
    slug: "aikat",
    name: "aiKat",
    category: "AI · Marketing SaaS",
    problem:
      "Social platforms reward volume -  but producing 30 on-brand videos for a campaign took marketing teams days of specialist work.",
    role: "Full Stack Developer",
    stack: ["Next.js", "TypeScript", "Node.js", "AI APIs"],
    outcome: "An AI workflow that turns one brief into 30 social-ready videos in ~30 minutes.",
    cover: "/projects/aikat.jpg",
    liveUrl: "https://www.aikat.ai/",
    overview:
      "aiKat is an AI-powered video creation platform for digital marketers - a guided workflow that handles scripts, storyboards, and final output, generating dozens of brand-consistent video variations optimised for Instagram, TikTok, Facebook, and YouTube Shorts. I engineered the product experience wrapping a complex AI pipeline in a simple, unified flow.",
    highlights: [
      "Guided creation workflow connecting script → storyboard → render.",
      "Brand-consistency controls across dozens of variations per campaign.",
      "Pipeline UX that saves teams ~80 hours of production per week.",
    ],
  },
  {
    slug: "vidboard",
    name: "Vidboard.ai",
    category: "AI · Video SaaS",
    problem:
      "Producing studio-quality video normally means cameras, presenters, and editors - slow and expensive for teams that need video at scale.",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "AI APIs"],
    outcome: "Documents, text, or URLs become finished videos with 100+ AI avatars in 100+ languages.",
    cover: "/projects/vidboard.jpg",
    liveUrl: "https://www.vidboard.ai/",
    overview:
      "Vidboard.ai turns a document, plain text, or a URL into a polished, presenter-led video - with 100+ AI avatars and 500+ voices across 100+ languages. I built product features across the creation flow, from input parsing to avatar/voice selection and render management.",
    highlights: [
      "Multi-input creation: document, text, and URL to video.",
      "Avatar, voice, and language selection across a huge catalogue.",
      "Render pipeline UX with clear progress and outputs.",
    ],
  },
  {
    slug: "starsofboston",
    name: "STARS of Boston",
    category: "Real Estate · Short-Term Rentals",
    problem:
      "Medical travellers, corporate guests, and families needed furnished, flexible stays in Boston without hotel prices - and an easy way to find and book them.",
    role: "Full Stack Developer",
    stack: ["React", "Node.js", "MongoDB", "REST APIs"],
    outcome: "A rental platform for move-in-ready furnished stays across Greater Boston.",
    cover: "/projects/starsofboston.jpg",
    liveUrl: "https://www.starsofboston.com/",
    overview:
      "STARS of Boston is a woman-owned short-term rental company offering fully furnished, move-in-ready homes across Boston, Brookline, Cambridge, and Brighton - from private rooms to multi-bedroom houses, for stays from nights to months. I built the listing, browsing, and enquiry experience.",
    highlights: [
      "Property listings with rich amenity and neighbourhood detail.",
      "Flexible-stay search across room types and durations.",
      "Enquiry and booking flows tuned for medical and corporate travellers.",
    ],
  },
  {
    slug: "londonfashionweek",
    name: "London Fashion Week",
    category: "Fashion · Events Platform",
    problem:
      "A biannual global fashion event needed a digital home for hundreds of designers, schedules, and press - under intense traffic spikes.",
    role: "Full Stack Developer",
    stack: ["React", "Next.js", "Node.js", "CMS"],
    outcome: "The digital stage for British fashion's flagship event.",
    cover: "/projects/londonfashionweek.jpg",
    liveUrl: "https://londonfashionweek.co.uk/",
    overview:
      "London Fashion Week's site showcases hundreds of emerging and established designers, their collections, and the event schedule for buyers, press, and fashion lovers worldwide. I worked on designer showcases, schedule features, and performance for high-traffic event moments.",
    highlights: [
      "Designer directory and collection showcases at scale.",
      "Event schedule and programming for a global audience.",
      "Performance hardening for launch-day traffic spikes.",
    ],
  },
];

export const experience = [
  {
    period: "Feb 2019 - Present",
    role: "Lead Mobile App & Web Developer",
    company: "Self-Employed · Remote",
    points: [
      "Delivered 10+ end-to-end full-stack web applications for global clients.",
      "Developed scalable React/Next.js frontends and integrated REST/GraphQL APIs.",
      "Designed technical architecture and storage strategies, improving app performance by 25%.",
      "Resolved high-priority software issues, maintaining high client satisfaction.",
    ],
  },
  {
    period: "June 2015 - May 2019",
    role: "Mobile App Developer",
    company: "Tecocraft Ltd.",
    points: [
      "Converted legacy apps into modern React Native / React.js codebases.",
      "Built real-time notifications, Stripe/Braintree payments, and user dashboards.",
      "Spearheaded responsive design across web and mobile with Bootstrap, Tailwind, and SASS.",
      "Collaborated with cross-border teams in Agile environments.",
    ],
  },
];

// Additional engagements from the CV's project highlights.
export const engagements = [
  {
    period: "Dec 2023 - June 2025",
    name: "Plaved",
    tag: "SaaS",
    blurb: "All-in-one construction project management - documentation and imagery for planning.",
  },
  {
    period: "Oct 2022 - June 2023",
    name: "Bit.com",
    tag: "Crypto",
    blurb: "Global cryptocurrency exchange and trading platform.",
  },
  {
    period: "Oct 2021 - Aug 2022",
    name: "UScreen",
    tag: "Video SaaS",
    blurb: "Video membership platform for creators to monetise libraries, live streams, and communities.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "Vue.js", "Astro.js", "TypeScript", "Redux / RTK", "Redux-Saga", "RxJS", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "NestJS", "AdonisJS", "Firebase", "REST", "GraphQL"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "MSSQL", "NoSQL"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git / GitHub / GitLab", "Bitbucket", "Docker", "Postman", "Swagger"],
  },
  {
    title: "Project Management",
    skills: ["Jira", "Trello", "Asana", "Monday.com", "ClickUp", "Agile / Scrum"],
  },
];

export const marqueeTech = [
  "React", "Next.js", "TypeScript", "Node.js", "NestJS", "GraphQL", "MongoDB",
  "MySQL", "Redux", "RxJS", "Tailwind CSS", "Docker", "Firebase", "Vue.js",
];

export const domains = [
  "Travel & Tourism", "Real Estate", "Fashion & Lifestyle", "Blockchain Entertainment",
  "Food Delivery", "Education", "Healthcare", "Dating & Social", "Sports & Betting",
];

export const about = {
  heading: "Seven years turning complex requirements into fast, reliable products.",
  paragraphs: [
    "I'm a full-stack developer with 7+ years of experience building scalable web applications with React.js, Node.js, Next.js, and the modern JavaScript ecosystem. My sweet spot is front-end architecture - state management with Redux and RxJS, clean component systems, and REST/GraphQL integrations that hold up under real load.",
    "I've led cross-functional teams and delivered high-impact projects across travel, real estate, AI SaaS, fashion, and more. I care about performance budgets, readable code, and shipping - my architecture and storage decisions have cut app load times by 25%.",
    "Clients keep working with me because I communicate clearly, solve problems before they escalate, and treat their product like my own.",
  ],
  education: {
    degree: "B.Tech, Computer Science",
    school: "Uka Tarsadia University",
    year: "2014",
    gpa: "CGPA 8.65 / 10",
  },
  softSkills: [
    "Excellent written & verbal communication",
    "Proactive problem-solving",
    "Cross-functional collaboration",
    "Adaptability under pressure",
    "Client-focused, high EQ",
  ],
};

export const contact = {
  heading: "Let's build something that ships.",
  body: "Have a product to build, rescue, or scale? I'm open to freelance projects and full-time roles. Tell me what you're working on.",
};
