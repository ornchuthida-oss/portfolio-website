export const profile = {
  name: 'Thida Onchu',
  initials: 'TO',
  title: 'IT Student | Aspiring Web Developer',
  school: 'Passerelles numériques Cambodia (PNC)',
  generation: '2027',
  className: 'WEP B',
  major: 'Web Programming',
  shortBio:
    'I am an IT student at Passerelles numériques Cambodia, passionate about building clean, responsive websites and learning modern web technologies.',
  longBio:
    'I am a dedicated IT student at Passerelles numériques Cambodia (PNC), currently in the WEP B cohort of Generation 2027, majoring in Web Programming. I discovered my passion for technology during high school and chose to pursue web development because I love the idea of creating things people can interact with directly in their browser.',
  background:
    'Originally from Cambodia, I completed my high school education from 2019 to 2026. During those years I developed a strong interest in computers and the internet, which led me to apply to PNC — a school that trains young people in IT and helps them build professional careers.',
  interests:
    'I am passionate about front-end development, clean user interfaces, and responsive design. I enjoy turning ideas into real, working websites and I am currently exploring JavaScript interactivity and basic back-end concepts.',
  goal: 'My career goal is to become a professional Web Developer who builds accessible, user-friendly websites and applications — and eventually to help other young Cambodians learn technology.',
  photo: '/assets/images/image.png',
};

export const contact = {
  email: 'thida.onchu@example.com',
  phone: '+855 12 345 678',
  telegram: '@thida_onchu',
  github: 'https://github.com/thidaonchu',
  linkedin: 'https://linkedin.com/in/thidaonchu',
};

export const socials = [
  { label: 'GitHub', href: 'https://github.com/thidaonchu', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/thidaonchu', icon: 'linkedin' },
  { label: 'Telegram', href: '#', icon: 'telegram' },
  { label: 'Email', href: 'mailto:thida.onchu@example.com', icon: 'mail' },
];

export const education = [
  {
    period: '2026 — 2027',
    title: 'Passerelles numériques Cambodia (PNC)',
    subtitle: 'Web Programming · Generation 2027 · Class WEP B',
    description:
      'Intensive IT training focused on web development — HTML, CSS, JavaScript, Python, databases, and software engineering practices. Building real projects every term.',
    status: 'current',
  },
  {
    period: '2019 — 2026',
    title: 'High School Education',
    subtitle: 'General Education · Cambodia',
    description:
      'Completed high school with a focus on science and mathematics. Developed a strong foundation in logical thinking and a growing interest in technology.',
    status: 'completed',
  },
];

export const learning = [
  { title: 'HTML & CSS', body: 'Structuring and styling modern, responsive web pages.' },
  { title: 'JavaScript', body: 'Adding interactivity and logic to web applications.' },
  { title: 'Python', body: 'Programming fundamentals and simple back-end scripting.' },
  { title: 'Databases', body: 'SQL queries and basic database design.' },
  { title: 'Git & GitHub', body: 'Version control and collaborating on code.' },
  { title: 'UI/UX Basics', body: 'Designing interfaces that are clear and easy to use.' },
];

export const skills = [
  { name: 'HTML', level: 90, category: 'Frontend' },
  { name: 'CSS', level: 85, category: 'Frontend' },
  { name: 'JavaScript', level: 70, category: 'Frontend' },
  { name: 'Responsive Web Design', level: 80, category: 'Design' },
  { name: 'UI/UX Basics', level: 65, category: 'Design' },
  { name: 'Python', level: 60, category: 'Programming' },
  { name: 'SQL / Database Basics', level: 55, category: 'Backend' },
  { name: 'Git & GitHub', level: 70, category: 'Tools' },
];

export const projects = [
  {
    name: 'Student Dashboard',
    description:
      'A web-based dashboard for students to track assignments, deadlines, and grades in one clean interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.pexels.com/photos/12969403/pexels-photo-12969403.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    name: 'Room Booking System',
    description:
      'A room reservation system that lets users check availability and book rooms with a simple form.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    image:
      'https://images.pexels.com/photos/1785619/pexels-photo-1785619.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    name: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio built with HTML, CSS, and JavaScript to showcase my projects and skills.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    image:
      'https://images.pexels.com/photos/7325498/pexels-photo-7325498.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
  {
    name: 'Student Score Management System',
    description:
      'A system for teachers to enter and manage student scores, with automatic grade calculation.',
    tech: ['Python', 'SQLite', 'Tkinter'],
    image:
      'https://images.pexels.com/photos/106344/pexels-photo-106344.jpeg?auto=compress&cs=tinysrgb&h=600&w=900',
  },
];

export const stats = [
  { value: '4+', label: 'Projects built' },
  { value: '8', label: 'Skills learned' },
  { value: '2027', label: 'Graduation year' },
  { value: '1', label: 'Goal: Web Developer' },
];

export const navLinks = [
  { label: 'Home', page: 'home' as const },
  { label: 'About', page: 'about' as const },
  { label: 'Education', page: 'education' as const },
  { label: 'Skills & Projects', page: 'skills' as const },
  { label: 'Contact', page: 'contact' as const },
];
