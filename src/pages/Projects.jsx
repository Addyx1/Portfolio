import { useState } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Backend', 'AI'];

    const projects = [
        {
            id: 1,
            title: 'Video Streaming Backend Service',
            category: 'Backend',
            desc: 'Architected a modular backend service for a video-streaming platform utilizing MVC architecture. Enabled core functionalities through REST APIs including video management and authentication using JWT. Engineered centralized error handling and MongoDB data models.',
            tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript'],
            github: 'https://github.com/Addyx1',
            demo: '#',
            color: 'var(--accent-primary)',
            date: "Jun '25 - Nov '25"
        },
        {
            id: 2,
            title: 'AI Code Explainer',
            category: 'AI',
            desc: 'Developed an AI-powered code explainer that analyzes source code using the Grok API. Built a responsive web interface supporting file uploads and theme switching to simplify complex logic into clear, human-readable formatting.',
            tech: ['React', 'Node.js', 'Grok API', 'CSS3', 'HTML5'],
            github: 'https://github.com/Addyx1',
            demo: '#',
            color: 'var(--accent-secondary)',
            date: "Apr '25 - May '25"
        },
        {
            id: 3,
            title: 'AI Math Solver',
            category: 'AI',
            desc: 'Engineered an intelligent AI Math Solver capable of breaking down complex mathematical problems and rendering step-by-step logical solutions dynamically.',
            tech: ['React', 'Python', 'Machine Learning', 'Node.js'],
            github: 'https://github.com/Addyx1',
            demo: '#',
            color: '#10b981',
            date: "Recent"
        }
    ];

    const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);

    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">Featured Projects</h2>
                <p>Some things I've built to solve real-world problems.</p>
            </div>

            <div className="tabs-container">
                {categories.map(tab => (
                    <button
                        key={tab}
                        className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <div key={project.id} className="project-card glass" style={{ animationDelay: `${index * 0.15}s` }}>
                        <div className="project-header">
                            <Code2 size={40} style={{ color: project.color }} />
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noreferrer" className="icon-link"><Github size={20} /></a>
                            </div>
                        </div>

                        <h3 className="project-title">{project.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)', marginBottom: '10px', fontWeight: '500' }}>{project.date}</p>
                        <p className="project-desc">{project.desc}</p>

                        <div className="project-tech">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-tag" style={{ borderColor: project.color }}>{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
