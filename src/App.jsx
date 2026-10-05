import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import {
  Brain,
  Database,
  BarChart3,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Code2,
  Bot,
  Menu,
  X,
} from "lucide-react";

import { SpotlightCard } from "./components/SpotlightCard";
import { DecryptedText } from "./components/DecryptedText";
import { MagneticButton } from "./components/MagneticButton";
import { InteractiveParticles } from "./components/InteractiveParticles";
import { InteractiveDataPipeline } from "./components/InteractiveDataPipeline";
import { RevealOnScroll } from "./components/RevealOnScroll";
import { Preloader } from "./components/Preloader";

const GithubIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className = "h-4 w-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.72a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
  </svg>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [skillCategory, setSkillCategory] = useState("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Responsive Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.85,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.2,
    });

    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (target && target.hash && target.hash.startsWith("#")) {
        const elem = document.querySelector(target.hash);
        if (elem) {
          e.preventDefault();
          setMobileMenuOpen(false);
          lenis.scrollTo(elem, { offset: -70, duration: 1.1 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const experiences = [
    {
      role: "Process Associate – Data Annotation (Remote)",
      company: "Han Digital",
      period: "July 2026 – Sept 2026",
      desc: [
        "Annotated, validated, and reviewed data to support the continuous development and improvement of AI and Machine Learning models.",
        "Ensured high-quality, accurate, and guideline-compliant annotations while maintaining productivity, consistency, and quality standards across project deliverables.",
      ],
      tags: ["AI Data Pipelines", "Quality Assurance", "Guideline Annotation"],
    },
    {
      role: "Data Annotator (Remote)",
      company: "Innodata",
      period: "Nov 2025 – Mar 2026",
      desc: [
        "Annotated and validated large-scale datasets (10,000+ records) to support AI and machine learning model training.",
        "Performed data quality checks, validation, and consistency reviews to ensure compliance with annotation standards.",
        "Identified and resolved data inconsistencies, improving overall dataset accuracy and model performance.",
        "Collaborated with distributed teams to meet delivery timelines and accuracy benchmarks in a remote environment.",
      ],
      tags: ["10,000+ Datasets", "Data QA", "NLP Model Support", "Distributed Collaboration"],
    },
    {
      role: "Junior Data Scientist / Data Science Intern",
      company: "Soften Technologies Pvt. Ltd.",
      period: "Mar 2025 – Aug 2025",
      desc: [
        "Conducted data cleaning, preprocessing, and exploratory data analysis (EDA) on real-world datasets using Python, Pandas, NumPy, and SQL.",
        "Performed statistical analysis and trend analysis to support reporting and data-driven decision making.",
        "Assisted in building, testing, and evaluating machine learning models, improving prediction reliability.",
        "Managed database operations including data imports, exports, backups, and validation to maintain data integrity.",
        "Created charts, dashboards, and analytical reports to support stakeholder reporting and decision-making.",
      ],
      tags: ["Python", "SQL", "Pandas", "EDA", "Statistical Modeling", "Dashboards"],
    },
    {
      role: "Consultant (Contract)",
      company: "RM plc",
      period: "May 2025 – Jul 2025",
      desc: [
        "Supported structured data preparation, validation, and reporting tasks during a short-term consulting engagement.",
        "Assisted cross-functional teams with data handling, documentation, and analysis requirements.",
        "Strengthened collaboration, stakeholder communication, and time-management skills in a fast-paced environment.",
      ],
      tags: ["Data Governance", "Stakeholder Reporting", "Data Audits"],
    },
  ];

  const projects = [
    {
      title: "Emotional Support Chatbot Using Deep Learning",
      period: "Mar 2025 – Jun 2025",
      category: "Deep Learning & NLP",
      desc: "Developed an empathetic conversational AI simulating humanlike dialogues, mood tracking, and mindfulness recommendations.",
      bullets: [
        "Implemented deep learning models (RNN-based) for intent detection and response generation.",
        "Performed data preprocessing, model testing, and evaluation, improving conversational accuracy.",
        "Designed personalized conversational prompts demonstrating applied AI problem-solving.",
      ],
      tech: ["Python", "RNN", "NLP", "Intent Detection", "Deep Learning"],
      icon: Bot,
    },
    {
      title: "Private Line: IMDb–YouTube Clone Using MERN",
      period: "May 2023 – May 2024",
      category: "Full Stack Development",
      desc: "An entertainment streaming and review platform collaborating across the frontend and backend architectures.",
      bullets: [
        "Collaborated with a cross-functional team to develop full-stack modules using React, Node.js, Express, and MongoDB.",
        "Contributed to database schemas, REST APIs, user authentication, and responsive testing.",
      ],
      tech: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
      icon: Code2,
    },
  ];

  const skillGroups = [
    {
      category: "ml",
      title: "Machine Learning & Generative AI",
      skills: ["Machine Learning", "Deep Learning", "NLP", "Generative AI", "Model Testing & Eval", "Prompt Engineering", "Claude API / OpenAI API (basic)"],
      icon: Brain,
    },
    {
      category: "analytics",
      title: "Data Science & Visualization",
      skills: ["Data Visualization", "Power BI", "Tableau", "Scikit-learn", "Statistical Analysis", "Model Evaluation", "EDA"],
      icon: BarChart3,
    },
    {
      category: "tools",
      title: "Programming & Core Libraries",
      skills: ["Python", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      icon: Terminal,
    },
    {
      category: "db",
      title: "Databases & QA Operations",
      skills: ["Database Testing", "Data Validation", "Data Backups", "Imports & Exports", "Guideline Compliance", "Reporting"],
      icon: Database,
    },
  ];

  const certifications = [
    {
      name: "Generative AI Mastermind",
      org: "Outskill (Virtual)",
      date: "Sep 2025",
      desc: "Advanced prompting, custom GPTs, AI agents, diffusion models, and no-code AI product building.",
    },
    {
      name: "Introduction to Data Analytics",
      org: "Meta (Online)",
      date: "Feb 2026",
      desc: "Core data analytics concepts, the OSEMN framework, data quality assessment, and identifying data gaps.",
    },
    {
      name: "Foundations: Data, Data Everywhere",
      org: "Google (Virtual)",
      date: "Feb 2026",
      desc: "Analytical thinking, data ecosystems, spreadsheets, query languages, and visualization tools.",
    },
    {
      name: "Introduction To Data Analytics",
      org: "IBM (Virtual)",
      date: "Feb 2026",
      desc: "Analytics lifecycle, data structures, wrangling, collection pipelines, and visualizing data.",
    },
    {
      name: "Excel Basics for Data Analysis",
      org: "IBM (Online)",
      date: "Feb 2026",
      desc: "Data cleaning, sorting, formulas, lookups, and pivot tables for extracting insights.",
    },
    {
      name: "Data Science with Python & Machine Learning",
      org: "Soften Technologies (Virtual)",
      date: "Sep 2024 – Feb 2025",
      desc: "Python based data analysis, machine learning algorithms, and visualization with NumPy, Matplotlib, and Seaborn.",
    },
  ];

  const filteredSkills =
    skillCategory === "all"
      ? skillGroups
      : skillGroups.filter((g) => g.category === skillCategory);

  return (
    <div className="relative min-h-screen bg-[#090a0d] text-zinc-100 selection:bg-teal-400 selection:text-black">
      {/* High-Tech Preloader */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Top Smooth Scroll Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-300 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Lightweight Ambient Dust Particles */}
      <InteractiveParticles />

      {/* Ambient background glow */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-[700px] h-[450px] bg-gradient-to-b from-teal-500/10 via-amber-500/5 to-transparent blur-[120px] z-0 will-change-transform" />

      {/* Responsive Floating Header */}
      <header className="fixed top-4 inset-x-0 z-40 flex justify-center px-4 sm:px-6">
        <nav className="w-full max-w-4xl flex items-center justify-between sm:justify-center gap-3 sm:gap-6 rounded-full border border-zinc-800/80 bg-zinc-950/85 px-4 sm:px-6 py-2.5 backdrop-blur-md shadow-xl">
          {/* Mobile brand indicator */}
          <span className="sm:hidden text-xs font-mono font-bold text-teal-400 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
            Albee C John
          </span>

          {/* Desktop Nav Links */}
          <div className="hidden sm:flex items-center gap-4 md:gap-6 text-xs font-medium text-zinc-300">
            <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
            <a href="#simulator" className="hover:text-teal-400 transition-colors">Simulator</a>
            <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-teal-400 transition-colors">Skills</a>
            <a href="#certifications" className="hover:text-teal-400 transition-colors">Credentials</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="rounded-full bg-teal-400/10 border border-teal-400/30 px-3.5 py-1 text-xs font-semibold text-teal-400 hover:bg-teal-400 hover:text-zinc-950 transition-all duration-200"
            >
              Contact
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-16 inset-x-4 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 shadow-2xl backdrop-blur-xl sm:hidden flex flex-col gap-3 text-center text-sm font-medium"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-300 hover:text-teal-400">About</a>
              <a href="#simulator" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-300 hover:text-teal-400">Simulator</a>
              <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-300 hover:text-teal-400">Experience</a>
              <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-300 hover:text-teal-400">Projects</a>
              <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-300 hover:text-teal-400">Skills</a>
              <a href="#certifications" onClick={() => setMobileMenuOpen(false)} className="py-1 text-zinc-300 hover:text-teal-400">Credentials</a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Container with Full Device Width Optimization (Maximized Margin) */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-28 sm:pt-36 pb-24">
        
        {/* Hero Section */}
        <section id="about" className="pt-4 sm:pt-8 pb-14 sm:pb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs font-mono text-teal-400 mb-5 sm:mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Data Analyst • AI Pipelines • Model Validation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.12] max-w-3xl"
          >
            Engineering clean data into{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-amber-200 bg-clip-text text-transparent">
              intelligent AI solutions.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal"
          >
            Hi, I’m <strong className="text-white font-semibold">Albee C John</strong> — a detail-oriented Data Analyst with hands-on experience in AI data pipelines, machine learning model evaluation, and guideline-driven annotation for large-scale datasets (10,000+ records). Proficient in Python, SQL, and Power BI.
          </motion.p>

          {/* Magnetic / Touch CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-7 sm:mt-8 flex flex-wrap gap-3 items-center"
          >
            <MagneticButton
              onClick={() => {
                const el = document.getElementById("projects");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-zinc-100 text-zinc-950 font-semibold px-5 py-2.5 text-xs sm:text-sm hover:bg-white shadow-md active:scale-95"
            >
              View Projects
            </MagneticButton>

            <MagneticButton
              onClick={() => window.open("mailto:albeejohnwwe@gmail.com")}
              className="border border-zinc-700/80 bg-zinc-900/60 text-zinc-200 font-semibold px-5 py-2.5 text-xs sm:text-sm hover:bg-zinc-800 hover:border-zinc-600"
            >
              <Mail className="mr-2 h-4 w-4 text-teal-400" />
              Get in Touch
            </MagneticButton>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/AlbeeJohn"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
                title="GitHub"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/albee-john-079325200/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Quick Metrics Strip */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 sm:mt-14"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 pt-6 sm:pt-8 border-t border-zinc-800/80">
              <SpotlightCard className="p-3.5 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">10,000+</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Records Annotated</div>
              </SpotlightCard>
              <SpotlightCard className="p-3.5 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold font-mono text-teal-400">4+</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Industry Roles</div>
              </SpotlightCard>
              <SpotlightCard className="p-3.5 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold font-mono text-white">6+</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Certifications</div>
              </SpotlightCard>
              <SpotlightCard className="p-3.5 sm:p-4">
                <div className="text-xl sm:text-2xl font-bold font-mono text-amber-300">B.Tech</div>
                <div className="text-[11px] sm:text-xs text-zinc-400 mt-0.5">Computer Science</div>
              </SpotlightCard>
            </div>
          </motion.div>
        </section>

        {/* Section: Interactive Pipeline Simulator */}
        <section id="simulator" className="py-10 sm:py-14">
          <RevealOnScroll direction="up">
            <InteractiveDataPipeline />
          </RevealOnScroll>
        </section>

        {/* Section: Work Experience */}
        <section id="experience" className="py-10 sm:py-14">
          <RevealOnScroll direction="up">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-mono text-teal-400">// TRACK RECORD</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
                Work Experience
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Industry impact spanning AI annotation, statistical data engineering, and analytics.
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-3.5 sm:space-y-4">
            {experiences.map((exp, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 0.05}>
                <SpotlightCard className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-white">{exp.role}</h3>
                      <div className="text-xs sm:text-sm font-semibold text-teal-400">{exp.company}</div>
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-zinc-400 rounded-md bg-zinc-900 px-2.5 py-1 border border-zinc-800 w-fit">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-zinc-300">
                    {exp.desc.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <span className="text-teal-400 mt-0.5">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {exp.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="rounded-md bg-zinc-900/80 px-2 py-0.5 text-[11px] sm:text-xs font-mono text-zinc-400 border border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </SpotlightCard>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* Section: Projects */}
        <section id="projects" className="py-10 sm:py-14">
          <RevealOnScroll direction="up">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-mono text-teal-400">// IMPLEMENTATIONS</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
                Featured Projects
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Deep Learning, Conversational NLP, and Full Stack applications.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {projects.map((proj, idx) => {
              const Icon = proj.icon;
              return (
                <RevealOnScroll key={idx} direction={idx % 2 === 0 ? "right" : "left"} delay={0.06}>
                  <SpotlightCard className="p-4 sm:p-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 sm:p-2 rounded-lg bg-teal-500/10 text-teal-400 border border-teal-500/20">
                            <Icon className="h-4 w-4" />
                          </div>
                          <span className="text-xs font-mono text-teal-400">{proj.category}</span>
                        </div>
                        <span className="text-xs font-mono text-zinc-500">{proj.period}</span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-white mb-2">{proj.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-400 mb-4">{proj.desc}</p>

                      <ul className="space-y-1.5 text-xs text-zinc-300 mb-6">
                        {proj.bullets.map((b, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <span className="text-teal-400 mt-0.5">✓</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="rounded-md bg-zinc-900 px-2 py-0.5 text-[11px] sm:text-xs font-mono text-zinc-300 border border-zinc-800"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </section>

        {/* Section: Technical Skills */}
        <section id="skills" className="py-10 sm:py-14">
          <RevealOnScroll direction="up">
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono text-teal-400">// EXPERTISE</span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
                  Technical Stack
                </h2>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Filter across AI pipelines, data analytics, and database technologies.
                </p>
              </div>

              {/* Filter buttons */}
              <div className="flex flex-wrap gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-800 self-start md:self-auto">
                {[
                  { id: "all", label: "All" },
                  { id: "ml", label: "ML & AI" },
                  { id: "analytics", label: "Analytics" },
                  { id: "tools", label: "Tools" },
                  { id: "db", label: "Databases" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setSkillCategory(tab.id)}
                    className={`px-2.5 sm:px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      skillCategory === tab.id
                        ? "bg-teal-400 text-zinc-950 font-semibold shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
            {filteredSkills.map((group, idx) => {
              const Icon = group.icon;
              return (
                <RevealOnScroll key={idx} direction="up" delay={idx * 0.04}>
                  <SpotlightCard className="p-4 sm:p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="h-4 w-4 text-teal-400" />
                      <h3 className="text-xs sm:text-sm font-bold text-white">{group.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="rounded-lg border border-zinc-800 bg-zinc-900/60 px-2 sm:px-2.5 py-1 text-xs text-zinc-300 font-medium hover:border-teal-400/40 hover:text-teal-300 transition-colors"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </SpotlightCard>
                </RevealOnScroll>
              );
            })}
          </div>
        </section>

        {/* Section: Certifications & Education */}
        <section id="certifications" className="py-10 sm:py-14">
          <RevealOnScroll direction="up">
            <div className="mb-6 sm:mb-8">
              <span className="text-xs font-mono text-teal-400">// CREDENTIALS</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1">
                Certifications & Education
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Verified domain specializations from Meta, Google, IBM, Outskill, and academic background.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-3.5">
            {certifications.map((cert, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={idx * 0.04}>
                <SpotlightCard className="p-4 sm:p-5 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-amber-300 mb-2">
                      <span className="flex items-center gap-1 truncate pr-1">
                        <Award className="h-3 w-3 text-teal-400 flex-shrink-0" />
                        <span className="truncate">{cert.org}</span>
                      </span>
                      <span className="text-zinc-500 flex-shrink-0">{cert.date}</span>
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">{cert.name}</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{cert.desc}</p>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>
            ))}
          </div>

          {/* Education Strip */}
          <RevealOnScroll direction="up" delay={0.1}>
            <SpotlightCard className="mt-4 p-4 sm:p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono text-teal-400 flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4" /> Academic Degree
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    B.Tech in Computer Science & Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    St. Thomas College of Engineering and Technology | 2020 – 2024
                  </p>
                  <p className="text-[11px] sm:text-xs text-zinc-500 mt-1">
                    Senior Secondary (XII) — Kerala State Board (2019) • IEEE Student Member
                  </p>
                </div>
                <div className="text-xs font-mono text-zinc-400 md:text-right border-t md:border-t-0 border-zinc-800 pt-3 md:pt-0">
                  <div className="text-teal-400 font-semibold">Languages:</div>
                  <div>English (Fluent)</div>
                  <div>Malayalam (Native) • Hindi</div>
                </div>
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="py-12 sm:py-16 text-center">
          <RevealOnScroll direction="up">
            <SpotlightCard className="p-6 sm:p-10 md:p-14 relative overflow-hidden">
              <span className="text-xs font-mono text-teal-400 uppercase tracking-widest">// Get In Touch</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2">
                Let’s build intelligent data solutions together.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl mx-auto mt-3">
                Open to opportunities in Data Analytics, AI Pipeline Engineering, and Machine Learning Model Evaluation.
              </p>

              <div className="mt-7 sm:mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
                <MagneticButton
                  onClick={() => window.open("mailto:albeejohnwwe@gmail.com")}
                  className="bg-teal-400 text-zinc-950 px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-teal-300 shadow-md shadow-teal-500/20"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  albeejohnwwe@gmail.com
                </MagneticButton>

                <MagneticButton
                  onClick={() => window.open("tel:+918943785705")}
                  className="bg-zinc-900 border border-zinc-800 text-white px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-zinc-800"
                >
                  <Phone className="mr-2 h-4 w-4 text-teal-400" />
                  +91 8943785705
                </MagneticButton>

                <MagneticButton
                  onClick={() => window.open("https://www.linkedin.com/in/albee-john-079325200/", "_blank")}
                  className="bg-zinc-900 border border-zinc-800 text-white px-4 sm:px-5 py-2.5 text-xs font-bold uppercase tracking-wider hover:bg-zinc-800"
                >
                  <LinkedinIcon className="mr-2 h-4 w-4 text-teal-400" />
                  LinkedIn
                </MagneticButton>
              </div>

              <div className="mt-7 sm:mt-8 text-[11px] sm:text-xs text-zinc-500 font-mono">
                Valakom P.O., Kottarakkara, Kollam, Kerala, India 691532
              </div>
            </SpotlightCard>
          </RevealOnScroll>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-zinc-500 border-t border-zinc-900 pt-8">
          <p>© 2026 Albee C John</p>
        </footer>

      </main>
    </div>
  );
}
