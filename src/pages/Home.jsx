import { Terminal, Code2, Rocket, FileText, Star, GitMerge, Award } from 'lucide-react';
import './Home.css';
import About from './About';
import Projects from './Projects';
import Certificates from './Certificates';
import Contact from './Contact';

const Home = () => {
    return (
        <>
            <div className="home-container" id="home-section">
                <div className="hero-content">
                    <div className="badge glass">
                        <Terminal size={16} className="text-accent" />
                        <span>B.Tech CSE @ Lovely Professional University</span>
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm <span className="animated-name" style={{ display: 'inline-block' }}>Aditya Raj Singh</span> <br />
                    </h1>

                    <p className="hero-subtitle">
                        A passionate Computer Science student and 5-Star HackerRank Programmer focused on Backend Engineering, AI Integration, and solving complex algorithmic challenges.
                    </p>

                    <div className="hero-cta">
                        <button
                            onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-primary"
                        >
                            <Code2 size={20} />
                            View Projects
                        </button>
                        <a
                            href="/Aditya_Raj_Singh_CV.pdf"
                            download
                            className="btn btn-secondary glass"
                        >
                            <FileText size={20} />
                            Download CV
                        </a>
                        <button
                            onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn btn-secondary glass"
                        >
                            <Rocket size={20} />
                            Let's Talk
                        </button>
                    </div>

                    <div className="quick-highlights">
                        <div className="highlight-item glass">
                            <Star className="text-accent" size={24} />
                            <div className="highlight-text">
                                <span className="highlight-num">5-Star</span>
                                <span className="highlight-label">HackerRank Rating</span>
                            </div>
                        </div>
                        <div className="highlight-item glass">
                            <GitMerge className="text-accent" size={24} />
                            <div className="highlight-text">
                                <span className="highlight-num">10+</span>
                                <span className="highlight-label">Tech Projects</span>
                            </div>
                        </div>
                        <div className="highlight-item glass">
                            <Award className="text-accent" size={24} />
                            <div className="highlight-text">
                                <span className="highlight-num">6.90</span>
                                <span className="highlight-label">B.Tech CGPA</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="floating-shape shape-1 glass"></div>
                <div className="floating-shape shape-2 glass"></div>
                <div className="floating-shape shape-3 glass"></div>
            </div>

            <div id="about-section"><About /></div>
            <div id="projects-section"><Projects /></div>
            <div id="certificates-section"><Certificates /></div>
            <div id="contact-section"><Contact /></div>
        </>
    );
};

export default Home;
