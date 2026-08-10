import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowUpRight, Sparkles, Globe, Database, Code, FileSpreadsheet,
  FileText, Mail, Menu, X, ChevronDown, Award, Star, Terminal,
  ExternalLink, CheckCircle2, Download, Send, BarChart3, TrendingUp
} from 'lucide-react';

// Custom SVG Github Icon
const Github = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// Custom SVG Linkedin Icon
const Linkedin = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// Circular Rotating Stamp Badge
const CircularBadge = () => (
  <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center pointer-events-auto">
    <motion.div
      className="absolute inset-0 w-full h-full animate-spin-slow"
      style={{ transformOrigin: 'center center' }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-900 fill-current">
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="none"
        />
        <text className="text-[10.5px] font-bold tracking-[0.18em] uppercase">
          <textPath href="#circlePath" startOffset="0%">
            • BCA GRADUATE • DATA ANALYST • PORTFOLIO
          </textPath>
        </text>
      </svg>
    </motion.div>
    <a
      href="#contact"
      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff5528] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 relative z-10 group"
      aria-label="Contact Vidya"
    >
      <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
    </a>
  </div>
);

// Navigation Header Component
const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['About', 'Skills', 'Projects', 'Certificates', 'Contact'];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#ff5528] z-50 origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#f6f5f2]/95 backdrop-blur-md border-b border-zinc-200/80 py-3.5 shadow-sm text-zinc-900'
            : 'bg-transparent py-5 text-zinc-900'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-8 h-8 rounded-full bg-[#ff5528] text-white flex items-center justify-center font-bold text-sm font-syne group-hover:scale-105 transition-transform">
              V
            </span>
            <span className="font-syne font-bold text-xl tracking-tight text-zinc-900">
              Vidya<span className="text-[#ff5528]">.</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 font-sans-body text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-zinc-600 hover:text-zinc-900 transition-colors relative py-1 group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff5528] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-zinc-900 text-white hover:bg-[#ff5528] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm"
            >
              Get In Touch
            </a>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="md:hidden p-2 text-zinc-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#f6f5f2] border-b border-zinc-200 px-6 py-6"
            >
              <div className="flex flex-col gap-4 font-sans-body font-medium">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMobileMenu(false)}
                    className="text-zinc-800 hover:text-[#ff5528] text-base py-1"
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setMobileMenu(false)}
                  className="mt-2 inline-block text-center px-5 py-3 rounded-full bg-[#ff5528] text-white font-medium text-sm"
                >
                  Get In Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

// Hero Component
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yTranslate = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [0, -30]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Vidya_Meharwade.pdf';
    link.download = 'Vidya_Meharwade_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      ref={containerRef}
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-[#f6f5f2] text-zinc-900 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div
          style={{ y: textParallax }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <span className="w-6 h-[1.5px] bg-[#ff5528]" />
          <span className="font-sans-body text-xs sm:text-sm font-bold tracking-widest text-[#ff5528] uppercase">
            BCA Graduate | Aspiring Data Analyst
          </span>
          <span className="w-6 h-[1.5px] bg-[#ff5528]" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center font-syne text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] text-zinc-900 mb-4"
        >
          I'm <span className="text-[#ff5528]">Vidya Meharwade</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center font-sans-body text-zinc-600 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Turning data into insights, one query at a time 📊 Passionate about data analysis and eager to learn new technologies ✨
        </motion.p>

        <div className="relative max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center mt-4">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left bg-white/80 backdrop-blur-sm border border-zinc-200 p-5 rounded-2xl shadow-sm"
          >
            <div className="text-[#ff5528] font-serif-editorial text-4xl font-bold leading-none mb-1">
              “
            </div>
            <p className="font-sans-body text-xs text-zinc-600 leading-relaxed">
              Seeking data analysis opportunities to apply SQL, Python, and database management.
            </p>
          </motion.div>

          <motion.div
            style={{ y: yTranslate }}
            className="md:col-span-6 order-1 md:order-2 flex flex-col items-center justify-center relative"
          >
            <div className="relative w-56 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 rounded-t-full overflow-hidden border-4 border-white shadow-2xl bg-zinc-200">
              <motion.img
                style={{ scale: imageScale }}
                src="/images/profile.jpeg"
                alt="Vidya Meharwade"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            </div>

            <div className="absolute -bottom-6 flex items-center justify-center gap-3 z-20 w-full px-4">
              <button
                onClick={handleDownloadCV}
                className="px-5 py-3 rounded-full bg-[#ff5528] text-white font-sans-body font-semibold text-xs uppercase tracking-wider hover:bg-zinc-900 transition-colors duration-300 shadow-xl flex items-center gap-2 group"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                Download CV
              </button>
              
              <a
                href="#projects"
                className="px-5 py-3 rounded-full bg-zinc-900 text-white font-sans-body font-semibold text-xs uppercase tracking-wider hover:bg-[#ff5528] transition-colors duration-300 shadow-lg flex items-center gap-1.5"
              >
                Projects <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3 order-3 flex flex-col items-center md:items-end gap-4 mt-4 md:mt-0"
          >
            <CircularBadge />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Continuous Marquee Banner
const MarqueeBanner = () => {
  const items = [
    'DATA ANALYTICS',
    'PYTHON & SQL',
    'EXCEL & POWERPOINT',
    'EDUNOVA SYSTEM',
    'HTML & CSS',
    'REACT & JAVASCRIPT',
    'CYBERSECURITY'
  ];

  return (
    <div className="bg-zinc-950 text-white py-4 overflow-hidden border-y border-zinc-800 relative z-20">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...items, ...items, ...items].map((item, index) => (
          <span key={index} className="flex items-center gap-6 mx-4 font-syne font-bold text-xs sm:text-sm tracking-widest uppercase">
            <span>{item}</span>
            <span className="text-[#ff5528] text-sm sm:text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

// About Me Component with Scroll Parallax & Image Zoom Effects
const About = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.08, 1]);
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={sectionRef} id="about" className="py-20 sm:py-28 bg-[#ebe8e1] text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="md:col-span-5 flex justify-center">
            <motion.div
              style={{ scale: imgScale, y: imgY }}
              className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-t-full overflow-hidden border-4 border-white shadow-xl bg-zinc-300"
            >
              <img
                src="/images/girl.jpeg"
                alt="Vidya working"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#ff5528]" />
              <span className="font-sans-body text-xs font-bold tracking-widest text-[#ff5528] uppercase">
                About Me
              </span>
            </div>

            <h2 className="font-syne text-3xl sm:text-5xl font-extrabold text-zinc-900 leading-tight">
              PASSIONATE ABOUT DATA ANALYSIS & TECH 📊✨
            </h2>

            <div className="space-y-4 text-zinc-700 font-sans-body text-sm sm:text-base leading-relaxed">
              <p>
                Hello! 👋 I'm <strong className="text-zinc-900">Vidya Meharwade</strong>, a BCA graduate with a passion for data analysis. I'm constantly learning and exploring new technologies to enhance my skills.
              </p>
              <p>
                My journey in tech 🚀 has equipped me with a strong foundation in web development, programming, and database management. I'm actively seeking internship opportunities in data analysis where I can apply my knowledge and grow.
              </p>
              <p>
                Beyond academics 📊, I enjoy solving problems, contributing to projects, and staying updated with the latest industry trends. Let's build something amazing together! ✨
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {[
                { label: 'Degree', val: 'BCA Graduate' },
                { label: 'Focus', val: 'Data Analyst' },
                { label: 'Certifications', val: '3 Earned' },
                { label: 'Projects', val: '3 Built' }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4, scale: 1.04 }}
                  className="bg-white/80 border border-zinc-300 p-3.5 rounded-xl text-center shadow-25"
                >
                  <div className="font-syne font-bold text-sm sm:text-base text-zinc-900">{item.val}</div>
                  <div className="font-sans-body text-[10px] text-zinc-500 font-semibold uppercase tracking-wider">{item.label}</div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component with Scroll Reveal & Lateral Parallax
const Skills = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const headerParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const technical = [
    { name: 'HTML', level: 'Intermediate', emoji: '🌐' },
    { name: 'CSS', level: 'Intermediate', emoji: '🎨' },
    { name: 'JavaScript', level: 'Intermediate', emoji: '⚡' },
    { name: 'Python', level: 'Intermediate', emoji: '🐍' },
    { name: 'SQL', level: 'Basic', emoji: '🗄️' },
    { name: 'React', level: 'Learning', emoji: '⚛️' },
    { name: 'MongoDB', level: 'Learning', emoji: '🍃' },
    { name: 'React Native', level: 'Learning', emoji: '📱' },
    { name: 'Node.js', level: 'Learning', emoji: '🟢' },
    { name: 'Server.js', level: 'Learning', emoji: '🖥️' },
  ];

  const office = [
    { name: 'Excel', level: 'Intermediate', emoji: '📊' },
    { name: 'Word', level: 'Intermediate', emoji: '📝' },
    { name: 'PowerPoint', level: 'Intermediate', emoji: '📈' },
  ];

  const ai = ['Claude 🤖', 'Stitch ✨', 'NotebookLM 📓', 'Numerous 🔢', 'Grok ⚡'];

  return (
    <section ref={sectionRef} id="skills" className="py-20 sm:py-28 bg-[#f6f5f2] text-zinc-900 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        <motion.div style={{ y: headerParallax }} className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#ff5528]" />
            <span className="font-sans-body text-xs font-bold tracking-widest text-[#ff5528] uppercase">
              Skills & Expertise
            </span>
            <span className="w-5 h-[1.5px] bg-[#ff5528]" />
          </div>
          <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
            Technologies I Work With 💪✨
          </h2>
        </motion.div>

        <div className="mb-14">
          <h3 className="font-syne text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <span>💻 Technical Skills</span>
          </h3>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
            }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5"
          >
            {technical.map((s) => (
              <motion.div
                key={s.name}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 }
                }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white border border-zinc-200/90 p-4 rounded-xl shadow-25 flex items-center justify-between group hover:border-[#ff5528] transition-all cursor-default"
              >
                <div>
                  <div className="font-syne font-bold text-zinc-900 text-sm group-hover:text-[#ff5528] transition-colors">
                    {s.name}
                  </div>
                  <div className="font-sans-body text-xs text-zinc-500">{s.level}</div>
                </div>
                <span className="text-xl">{s.emoji}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-14">
          <h3 className="font-syne text-xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            <span>🛠️ Other Tools</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 max-w-2xl">
            {office.map((s) => (
              <motion.div
                key={s.name}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-white border border-zinc-200/90 p-4 rounded-xl shadow-25 flex items-center justify-between group hover:border-[#ff5528] transition-all cursor-default"
              >
                <div>
                  <div className="font-syne font-bold text-zinc-900 text-sm group-hover:text-[#ff5528] transition-colors">
                    {s.name}
                  </div>
                  <div className="font-sans-body text-xs text-zinc-500">{s.level}</div>
                </div>
                <span className="text-xl">{s.emoji}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-syne text-xl font-bold text-zinc-900 mb-2 flex items-center gap-2">
            <span>🤖 AI Tools Explored</span>
          </h3>
          <p className="font-sans-body text-xs text-zinc-500 mb-4">Exploring the world of AI ✨</p>
          <div className="flex flex-wrap gap-2.5">
            {ai.map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-zinc-800 font-sans-body text-xs font-semibold shadow-25 hover:border-[#ff5528] hover:text-[#ff5528] transition-colors cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// Projects Component with Scroll-Driven Depth & Tilt
const Projects = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const cardsY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'Personal portfolio to showcase my skills, projects and certificates as a Data Analyst.',
      image: '/images/project1.png',
      tech: 'React, Tailwind CSS, Framer Motion',
      date: '2025'
    },
    {
      id: 2,
      title: 'EduNova - Institute Academic & Management System',
      description: 'Academic management system for institutes to manage students, faculty, and academics efficiently.',
      image: '/images/project2.jpeg',
      tech: 'React Native, Node.js, MongoDB, Expo',
      date: '2025'
    },
    {
      id: 3,
      title: 'Data Analytics & Sales Insights Dashboard',
      description: 'Exploratory data analysis dashboard for dataset cleaning, trends identification, statistical reporting, and visual insights.',
      image: '/images/cert2.jpeg',
      tech: 'Python, SQL, Pandas, Excel Data Viz',
      date: '2025'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 sm:py-28 bg-[#111113] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#ff5528]" />
              <span className="font-sans-body text-xs font-bold tracking-widest text-[#ff5528] uppercase">
                My Projects
              </span>
            </div>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Things I've Built 🚀💻
            </h2>
          </div>
        </div>

        <motion.div style={{ y: cardsY }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col justify-between shadow-xl group cursor-pointer"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-zinc-950">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-syne text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-[#ff5528] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-zinc-400 font-sans-body text-xs sm:text-sm leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-sans-body text-zinc-400 border-t border-zinc-800/80 pt-4">
                <span className="bg-zinc-800 px-2.5 py-1 rounded-full text-zinc-300 font-medium text-[11px]">
                  ⚙️ {p.tech}
                </span>
                <span>📅 {p.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

// Certificates Component
const Certificates = () => {
  const certs = [
    {
      id: 1,
      title: 'Introduction to JavaScript',
      description: 'Completed JS fundamentals with theoretical and practical understanding.',
      image: '/images/cert1.jpeg',
      issuer: 'SoloLearn',
      date: 'March 2025'
    },
    {
      id: 2,
      title: 'Introduction to Data Science',
      description: 'Data analytics, AI/ML fundamentals and career paths in Data Analytics.',
      image: '/images/cert2.jpeg',
      issuer: 'Cisco Networking Academy',
      date: 'March 2026'
    },
    {
      id: 3,
      title: 'Cybersecurity Fundamentals',
      description: 'Completed Cybersecurity course through Skill India Digital Hub.',
      image: '/images/cert3.jpeg',
      issuer: 'Tech Mahindra - Skill India',
      date: 'Sep 2025'
    }
  ];

  return (
    <section id="certificates" className="py-20 sm:py-28 bg-[#18181b] text-white border-t border-zinc-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#ff5528]" />
            <span className="font-sans-body text-xs font-bold tracking-widest text-[#ff5528] uppercase">
              Certificates
            </span>
            <span className="w-5 h-[1.5px] bg-[#ff5528]" />
          </div>
          <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            My Learning Achievements 🏆📜
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certs.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden flex flex-col justify-between shadow-lg group cursor-pointer"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-zinc-950">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-syne text-lg font-bold text-white mb-2 group-hover:text-[#ff5528] transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-zinc-400 font-sans-body text-xs leading-relaxed mb-4">
                    {c.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex justify-between items-center text-xs text-zinc-400 border-t border-zinc-800/80 pt-4">
                <span>🏢 {c.issuer}</span>
                <span>📅 {c.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! 🎉');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#f6f5f2] text-zinc-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#ff5528]" />
              <span className="font-sans-body text-xs font-bold tracking-widest text-[#ff5528] uppercase">
                Contact
              </span>
              <span className="w-5 h-[1.5px] bg-[#ff5528]" />
            </div>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-zinc-900 tracking-tight">
              Get In Touch 💬✨
            </h2>
            <p className="font-sans-body text-zinc-600 text-sm mt-3">
              Let's connect and discuss data analytics & software opportunities!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            
            <div className="space-y-4">
              <h3 className="font-syne text-xl font-bold text-zinc-900 mb-4">
                Contact Information
              </h3>

              <a
                href="mailto:vidyameharwade873@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 hover:border-[#ff5528] transition-colors shadow-25 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#ff5528]/10 text-[#ff5528] flex items-center justify-center group-hover:bg-[#ff5528] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Email</div>
                  <div className="text-sm font-semibold text-zinc-900">vidyameharwade873@gmail.com</div>
                </div>
              </a>

              <a
                href="https://github.com/vidyameharwade23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 hover:border-[#ff5528] transition-colors shadow-25 group"
              >
                <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover:bg-[#ff5528] transition-colors">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">GitHub</div>
                  <div className="text-sm font-semibold text-zinc-900">github.com/vidyameharwade23</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/vidya-meharwade-440290383"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-zinc-200 hover:border-[#ff5528] transition-colors shadow-25 group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center group-hover:bg-[#ff5528] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">LinkedIn</div>
                  <div className="text-sm font-semibold text-zinc-900">LinkedIn Profile</div>
                </div>
              </a>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-7 sm:p-8 rounded-2xl border border-zinc-200 shadow-xl space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#ff5528] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#ff5528] focus:bg-white transition-colors"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  required
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 text-sm focus:outline-none focus:border-[#ff5528] focus:bg-white transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-zinc-950 text-white font-sans-body font-bold text-xs uppercase tracking-widest hover:bg-[#ff5528] transition-colors duration-300 shadow-lg flex items-center justify-center gap-2"
              >
                Send Message 📨 <Send className="w-4 h-4" />
              </button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-zinc-950 text-white py-10 border-t border-zinc-800">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
      <p className="text-zinc-400 text-xs font-sans-body text-center">
        Made with ❤️ © 2026 <span className="text-[#ff5528] font-medium">Vidya Meharwade</span>
      </p>

      <div className="flex items-center gap-5 text-zinc-400">
        <a
          href="https://github.com/vidyameharwade23"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/vidya-meharwade-440290383"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href="mailto:vidyameharwade873@gmail.com"
          className="hover:text-white transition-colors"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </footer>
);

// Main App Component
export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f5f2] selection:bg-[#ff5528] selection:text-white relative">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden md:block"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 85, 40, 0.04), transparent 80%)`
        }}
      />

      <Navigation />
      <Hero />
      <MarqueeBanner />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}