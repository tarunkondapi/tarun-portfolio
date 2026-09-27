import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Mail, Phone, MapPin, Download, ExternalLink,
  Code2, BrainCircuit, Database, BriefcaseBusiness, GraduationCap,
  Award, Menu, X, ChevronDown
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Kondapi Venkata Sai Naga Tarun",
  shortName: "Tarun",
  email: "tarunkondapi2005@gmail.com",
  phone: "6301986102",
  location: "Ongole, Andhra Pradesh",
  github: "https://github.com/tarunkondapi",
};

const projects = [
  {
    title: "AI Internship Recommendation System",
    description:
      "An AI-powered internship recommendation system that suggests suitable opportunities based on users' skills, interests, and academic background.",
    tags: ["React", "Flask", "Machine Learning", "Python"],
    icon: BrainCircuit,
    accent: "purple",
  },
  {
    title: "Civic Wall & Civic Scope",
    description:
      "A citizen engagement platform for reporting, discussing, and tracking local civic issues, developed through user research, problem analysis, prototyping, and testing.",
    tags: ["Design Thinking", "Research", "Prototyping", "Testing"],
    icon: Code2,
    accent: "blue",
  },
  {
    title: "EMI Calculator",
    description:
      "A Flask-based web application that calculates monthly EMI, total interest, and total repayment from loan details with a responsive user interface.",
    tags: ["Python", "Flask", "Web Development"],
    icon: Database,
    accent: "cyan",
  },
];

const skills = [
  ["Python", "Java", "C", "SQL", "JavaScript"],
  ["React.js", "Node.js", "Flask", "HTML5", "CSS3"],
  ["Pandas", "NumPy", "Matplotlib", "Machine Learning"],
  ["GitHub", "VS Code", "Google Colab", "Jupyter Notebook", "Android Studio"],
  ["ServiceNow Workflows", "Catalog Item Creation", "Knowledge Management", "Basic Scripting"],
];

const certifications = [
  "Introduction to Large Language Models (LLMs) — IIT Madras",
  "Responsive Web Design — FreeCodeCamp",
  "Generative AI — Google Cloud (L4G)",
  "Introduction to Machine Learning — IIT Kharagpur",
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="grid-bg" />
      <nav className="nav">
        <button className="brand" onClick={() => go("home")}>
          <span className="brand-mark">T</span>
          <span>Tarun<span className="dot">.</span></span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["about", "skills", "projects", "experience", "education", "contact"].map((id) => (
            <button key={id} onClick={() => go(id)}>
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> AI/ML Developer · Software Developer</div>
            <h1>
              Building <span className="gradient-text">intelligent</span>
              <br />solutions that matter.
            </h1>
            <p className="hero-text">
              I'm <strong>Tarun</strong>, an Artificial Intelligence and Machine Learning student
              who enjoys turning ideas into practical applications with AI, machine learning,
              software development, and human-centered design.
            </p>
            <div className="hero-actions">
              <button className="primary" onClick={() => go("projects")}>
                Explore Projects <ArrowUpRight size={18} />
              </button>
              <a className="secondary" href="/resume.pdf" download>
                <Download size={17} /> Download Resume
              </a>
            </div>
            <div className="social-row">
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={19} /> GitHub</a>
              <a href={`mailto:${profile.email}`}><Mail size={19} /> Email</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="profile-card">
              <div className="card-top">
                <span className="status"><span /> Available for opportunities</span>
                <span className="code-icon">&lt;/&gt;</span>
              </div>
              <div className="terminal">
                <div><span className="pink">const</span> developer = {"{"}</div>
                <div className="indent"><span className="blue">name:</span> <span className="green">'Tarun'</span>,</div>
                <div className="indent"><span className="blue">focus:</span> <span className="green">'AI & ML'</span>,</div>
                <div className="indent"><span className="blue">stack:</span> [<span className="green">'Python'</span>,</div>
                <div className="indent2"><span className="green">'React'</span>, <span className="green">'Flask'</span>],</div>
                <div className="indent"><span className="blue">mindset:</span> <span className="green">'Build & Learn'</span></div>
                <div>{"}"}</div>
              </div>
              <div className="card-bottom">
                <span><BrainCircuit size={17}/> Machine Learning</span>
                <span><Code2 size={17}/> Full Stack</span>
              </div>
            </div>
          </div>
          <button className="scroll-hint" onClick={() => go("about")}><ChevronDown /></button>
        </section>

        <section id="about" className="section">
          <div className="section-label">01 · ABOUT</div>
          <div className="two-col">
            <div>
              <h2>Curious mind.<br /><span className="gradient-text">Practical builder.</span></h2>
            </div>
            <div className="about-copy">
              <p>
                I am pursuing a B.Tech in Artificial Intelligence and Machine Learning at
                Vasireddy Venkatadri Institute of Technology. I enjoy blending technology
                with human-centered thinking to create useful digital experiences.
              </p>
              <p>
                My hands-on work spans machine learning, data analysis, web applications,
                design thinking, and ServiceNow workflow development. I am interested in
                real-world projects where I can learn quickly and contribute meaningfully.
              </p>
              <div className="mini-stats">
                <div><strong>8.15</strong><span>CGPA / 10</span></div>
                <div><strong>3+</strong><span>Projects</span></div>
                <div><strong>4</strong><span>Certifications</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-label">02 · SKILLS</div>
          <div className="section-heading">
            <h2>My technical toolkit</h2>
            <p>Technologies and platforms from my academic and project experience.</p>
          </div>
          <div className="skill-groups">
            <SkillGroup title="Programming" items={skills[0]} />
            <SkillGroup title="Web & Frameworks" items={skills[1]} />
            <SkillGroup title="Data & AI" items={skills[2]} />
            <SkillGroup title="Tools & Platforms" items={skills[3]} />
            <SkillGroup title="ServiceNow" items={skills[4]} />
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-label">03 · PROJECTS</div>
          <div className="section-heading">
            <h2>Things I've built</h2>
            <p>Selected projects from my academic and development work.</p>
          </div>
          <div className="projects-grid">
            {projects.map((p, i) => {
              const Icon = p.icon;
              return (
                <article className={`project-card ${p.accent}`} key={p.title}>
                  <div className="project-number">0{i + 1}</div>
                  <div className="project-icon"><Icon size={25} /></div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                  <div className="project-link">Project details <ArrowUpRight size={17}/></div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-label">04 · EXPERIENCE</div>
          <div className="timeline">
            <div className="timeline-line" />
            <article className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">NOV 2025 — FEB 2026</div>
              <div className="timeline-card">
                <div className="timeline-icon"><BriefcaseBusiness /></div>
                <div>
                  <h3>ServiceNow Developer Intern</h3>
                  <h4>Druthion Technology Services</h4>
                  <ul>
                    <li>Worked on the Asset Renewal process by configuring workflows and automating asset lifecycle management in ServiceNow.</li>
                    <li>Contributed to the HR Onboarding module by developing and customizing onboarding workflows for new employees.</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-label">05 · EDUCATION & CERTIFICATIONS</div>
          <div className="education-grid">
            <div>
              <h2>Education</h2>
              <div className="edu-card">
                <GraduationCap />
                <div>
                  <span>2023 — Present</span>
                  <h3>B.Tech in Artificial Intelligence & Machine Learning</h3>
                  <p>Vasireddy Venkatadri Institute of Technology · Guntur</p>
                  <strong>CGPA: 8.15 / 10.0</strong>
                </div>
              </div>
              <div className="edu-card compact">
                <GraduationCap />
                <div><span>2021 — 2023</span><h3>Board of Intermediate</h3><p>S K V S Junior Kalasala · Vijayawada</p><strong>95.5%</strong></div>
              </div>
              <div className="edu-card compact">
                <GraduationCap />
                <div><span>2020 — 2021</span><h3>SSC</h3><p>ZPHS · Karavadi</p><strong>100%</strong></div>
              </div>
            </div>

            <div>
              <h2>Certifications</h2>
              <div className="cert-list">
                {certifications.map((c, i) => (
                  <div className="cert-card" key={c}>
                    <div className="cert-icon"><Award size={19}/></div>
                    <div><span>0{i + 1}</span><p>{c}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div className="section-label">06 · CONTACT</div>
            <h2>Let's build something<br /><span className="gradient-text">useful together.</span></h2>
            <p>I'm open to internship and entry-level opportunities in AI/ML, ServiceNow, and software development.</p>
            <div className="contact-actions">
              <a className="primary" href={`mailto:${profile.email}`}>Start a conversation <ArrowUpRight size={18}/></a>
              <a className="secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a>
            </div>
            <div className="contact-details">
              <span><Mail size={17}/> {profile.email}</span>
              <span><Phone size={17}/> {profile.phone}</span>
              <span><MapPin size={17}/> {profile.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Tarun Kondapi</span>
        <span>Built with React & CSS</span>
      </footer>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="skill-group">
      <h3>{title}</h3>
      <div className="skill-chips">{items.map(item => <span key={item}>{item}</span>)}</div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
