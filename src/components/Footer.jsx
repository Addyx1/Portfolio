import { Github, Linkedin, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer glass">
            <div className="footer-content">
                <div className="footer-brand">
                    <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'Outfit' }}>Aditya.</span>
                    <p className="footer-desc">Crafting digital experiences, efficient scalable backend services, and robust APIs.</p>
                </div>

                <div className="footer-links">
                    <h4>Navigate</h4>
                    <ul>
                        <li><button onClick={() => document.getElementById('home-section')?.scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                        <li><button onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}>About</button></li>
                        <li><button onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Connect</h4>
                    <div className="social-icons">
                        <a href="https://github.com/Addyx1" target="_blank" rel="noreferrer"><Github size={20} /></a>
                        <a href="https://www.linkedin.com/in/adi-singh001" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>Built with <Heart size={14} className="text-accent" style={{ display: 'inline', verticalAlign: 'middle', margin: '0 4px' }} /> by Aditya Raj Singh &copy; 2026</p>
            </div>
        </footer>
    );
};

export default Footer;
