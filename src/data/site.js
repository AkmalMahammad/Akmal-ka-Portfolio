// ──────────────────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit this file to update text, links, projects, skills, anime, travel, etc.
//  Image slots point at /images/... in the public folder — drop your own files
//  there with the matching names to replace the placeholders.
// ──────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Akmal Mahammad',
  nameJP: 'أكمل', // katakana accent
  role: 'Full Stack Webdeveloper',
  location: 'Andhra Pradesh, India',
  tagline:
    "I'm working on how to build fast, smooth websites that handle huge traffic without needing expensive server upgrades.",
  // longer intro shown in the About section
  bio: [
    "I'm a frontend developer and tech enthusiast based in Andhra Pradesh, working on high-performance web engineering. I've completed my initial training phase and I'm now building advanced web applications, focusing on React architectures and serverless backends."
,
    'Before moving into web development, I earned my B.E. with Honours in Computer Science at VIT-AP UNIVERSITY, where I built my foundation in software engineering, databases, and algorithms. I care about turning complex code into seamless websites that actually work for users.',
  ],
  // Profile photo — drop your image at public/images/profile.jpg (or update the path)
  photo: '/images/profile.jpg',
  // Resume (opens in a new tab from the hero)
  resumeUrl: 'https://drive.google.com/file/d/1N4krlEQ9RaUBlXP5QviDr7SOirzMT8PA/view?usp=drive_link',
}

export const social = {
  email: 'akmalmahammadoneplus@gmail.com',
  phone: '+91 9392270395',
  github: 'https://github.com/account',
  linkedin: 'https://www.linkedin.com/in/meghavathu-dharma-nayak-314132345?utm_source=share_via&utm_content=profile&utm_medium=member_android',
}

export const quickFacts = [
  { label: 'Based in', value: 'Andhra Pradesh, India', jp: '東京' },
  { label: 'Scholarship', value: 'PMSS Govt of India', jp: '文部科学省' },
  { label: 'Focus', value: 'Frontend Architecture · Full-Stack Development', jp: '研究' },
  { label: 'Currently', value: "Freelancer at Andhra Pradesh", jp: '修士' },
]

export const skills = [
  {
    category: 'Web Development & AI',
    items: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'TensorFlow', 'Keras', 'MLflow'],
  },
  {
    category: 'Languages',
    items: ['Python', 'C / C++', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Data & Analysis',
    items: ['NumPy', 'Pandas', 'Scikit-Learn', 'Matplotlib', 'Seaborn'],
  },
  {
    category: 'Core CS',
    items: ['Data Structures', 'Algorithms', 'Operating Systems', 'OOP', 'DBMS'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git', 'GitHub', 'FastAPI', 'LangChain', 'Streamlit', 'Prefect'],
  },
]

// `link` = source code (GitHub), `demo` = video walkthrough (Loom).
export const projects = [
  {
    title: 'ExamPrep',
    subtitle: 'Study platform',
    description:
      'Tracking and adaptive learning for every student.',
    tech: ['html', 'Java', 'React', 'AI'],
    link: '-',
    demo: '-',
    accent: 'purple',
  },
  {
    title: 'ResearchMate',
    subtitle: 'Academic research',
    description:
      'A research copilot for searching papers and patents',
    tech: ['Java', 'FastAPI', 'JavaScript', 'Three.js'],
    link: '-',
    demo: '-',
    accent: 'cyan',
  },
]

export const education = [
  {
    school: 'Institute of Science Andhra Pradesh',
    note: 'formerly Andhra Pradesh Institute of Technology',
    degree: "Master's Program — Computer Science",
    period: '2026 – Present',
    detail:
      'MEXT (Monbukagakusho) Scholar. Completed the research-student phase and advanced into the Master\'s program. Research in computer vision and NLP.',
    current: true,
  },
  {
    school: 'Sant Longowal Institute of Engineering & Technology (SLIET)',
    degree: 'B.E. (Honours), Computer Science & Engineering',
    period: 'Jul 2021 – Jun 2025',
    detail: 'CGPA 8.91/10 · Honours track 8.75/10 · Robotics Club Convenor leading 20+ students.',
    current: false,
  },
]

export const coursework = [
  'Data Structures & Algorithms',
  'Web Development',
  'Artificial Intelligence',
  'DBMS',
  'Computer Networks',
  'Operating Systems',
  'Data Analytics',
  'Internet of Things',
  'Optimization',
  'Cryptography & Network Security',
]

// ── Personality ───────────────────────────────────────────────────────────

export const anime = [
  {
    title: 'Death Note',
    jp: 'مذكرة الموت',
    note: 'The grand adventure. Freedom, nakama, and never giving up on the dream.',
  },
  {
    title: 'Attack on Titan',
    jp: 'هجوم العمالقة',
    note: 'Plot, payoff, and the most ruthless storytelling in anime.',
  },
  {
    title: 'Your Name',
    jp: 'اسمك',
    note: 'Hard work beats talent — the show that started it all for me.',
  },
]

export const hobbies = [
  { name: 'Reading Sacred Books', emoji: '📖' },
  { name: 'Home Workouts', emoji: '🏠🤸' },
  { name: 'Meditation', emoji: '🧘' },
  { name: 'Walking', emoji: '🚶' },
]

// Drop your own photos at public/images/travel/<file> to replace the placeholders.
export const travel = [
  {
    place: 'Hyderabad',
    region: 'Telangana, India',
    jp: '雪山',
    note: 'A high-altitude Himalayan crossing — snow fields, waterfalls, and ridgelines. Easily my favourite trek.',
    image: '/images/travel/rupin-pass.jpg',
  },
  {
    place: 'Andhra Pradesh',
    region: 'India',
    jp: 'أندرا براديش',
    note: 'Home base. Endless neighbourhoods to wander, from neon Shibuya to quiet shrine backstreets.',
    image: '/images/travel/tokyo.jpg',
  },
  {
    place: 'Chennai',
    region: 'Tamil Nadu, India',
    jp: '川越',
    note: '"Little Edo" — old warehouse streets and that timeless retro style. Loved every corner of it.',
    image: '/images/travel/kawagoe.jpg',
  },
]

// Section labels with decorative Japanese accents
export const sections = [
  { id: 'home', label: 'Home', jp: 'ホーム' },
  { id: 'about', label: 'About', jp: 'عني' },
  { id: 'skills', label: 'Skills', jp: 'スキル' },
  { id: 'work', label: 'Work', jp: 'عمل' },
  { id: 'education', label: 'Education', jp: '学歴' },
  { id: 'beyond', label: 'Beyond Code', jp: 'خارج نطاق البرمجة' },
  { id: 'contact', label: 'Contact', jp: '連絡' },
]
