import React, { useState, useEffect } from 'react';
import { 
  Cpu, 
  Wifi, 
  Server, 
  Github, 
  ExternalLink, 
  Terminal, 
  Code2, 
  ChevronRight,
  Mail
} from 'lucide-react';

// --- YOUR PROJECTS (Fill these in!) ---
const PROJECTS = [
  {
    id: 1,
    title: 'Your Arduino Project',
    category: 'Arduino',
    description: 'Describe your actual Arduino project here. What sensors did you use? What does it do?',
    tags: ['C++', 'Sensors', 'Hardware'],
    color: 'from-teal-400 to-emerald-500',
    icon: <Cpu className="w-6 h-6 text-emerald-400" />
  },
  {
    id: 2,
    title: 'Your ESP32 Project',
    category: 'ESP32',
    description: 'Describe your actual ESP32 project here. Did you use WiFi? WebSockets? Bluetooth?',
    tags: ['IoT', 'WiFi', 'C++'],
    color: 'from-cyan-400 to-blue-500',
    icon: <Wifi className="w-6 h-6 text-blue-400" />
  },
  {
    id: 3,
    title: 'Your Raspberry Pi Project',
    category: 'Raspberry Pi',
    description: 'Describe your actual Raspberry Pi project here. Is it a server, a robot, or a retro console?',
    tags: ['Linux', 'Python', 'Networking'],
    color: 'from-rose-400 to-red-500',
    icon: <Server className="w-6 h-6 text-rose-400" />
  }
];

const SKILLS = [
  "Arduino", "ESP32", "Raspberry Pi", "C++", "Python", 
  "Soldering", "Circuit Design", "Add your skills here!"
];

export default function App() {
  const [filter, setFilter] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30">
      
      {/* --- NAVIGATION (Glassmorphism) --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-tight">
            <Terminal className="w-6 h-6 text-cyan-400" />
            <span>Bex<span className="text-cyan-400">.dev</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          </div>
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium transition-all hover:border-cyan-400/50">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative pt-40 pb-20 overflow-hidden" id="about">
        {/* Background glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] -z-10" />

        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            System Online
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
            Bridging the gap between <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Software</span> & <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Hardware</span>.
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            I build embedded systems, IoT devices, and full-stack applications. 
            From soldering custom PCBs to writing high-performance C++ and React code.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              View Projects <ChevronRight className="w-5 h-5" />
            </a>
            <a href="https://github.com/bex-creator" target="_blank" rel="noreferrer" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Github className="w-5 h-5" /> GitHub Profile
            </a>
          </div>
        </div>
      </header>

      {/* --- PROJECTS SECTION --- */}
      <section className="py-24 bg-slate-900/50" id="projects">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Builds</h2>
              <p className="text-slate-400 max-w-xl">A selection of my recent hardware and embedded software projects.</p>
            </div>
            
            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {['All', 'Arduino', 'ESP32', 'Raspberry Pi'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === cat 
                      ? 'bg-slate-800 text-white border border-slate-600 shadow-sm' 
                      : 'bg-transparent text-slate-400 border border-slate-800 hover:border-slate-600 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                {/* Top color gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 bg-slate-800 rounded-xl">
                      {project.icon}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {project.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800/50">
                    <button className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <Code2 className="w-4 h-4" /> Source
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" /> Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SKILLS SECTION --- */}
      <section className="py-24 relative overflow-hidden" id="skills">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Technical Arsenal</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {SKILLS.map((skill, index) => (
              <div 
                key={index} 
                className="px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-300 font-medium hover:border-cyan-500/50 hover:bg-slate-800 hover:text-white transition-all cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER / CONTACT --- */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10" id="contact">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20">
            <Mail className="w-8 h-8 text-cyan-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Let's build something.</h2>
          <p className="text-slate-400 max-w-md mb-8">
            Currently open for collaborations, learning new things, or just a chat about microcontrollers.
          </p>
          <a href="mailto:bexlebeau30@students.cumberlandschools.org" className="px-6 sm:px-8 py-4 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-all mb-16 text-sm sm:text-base break-all sm:break-normal max-w-full">
            bexlebeau30@students.cumberlandschools.org
          </a>

          <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/50 text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Bex Lebeau. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="https://github.com/bex-creator" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
