import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">Get In Touch</h2>
                <p>Feel free to reach out to me for any queries or opportunities.</p>
            </div>

            <div className="contact-wrapper">
                <div className="contact-info glass">
                    <h3>Let's connect!</h3>
                    <p className="contact-desc">
                        You can reach me directly via email or phone. I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>

                    <div className="info-items">
                        <div className="info-item">
                            <div className="info-icon"><Mail size={24} /></div>
                            <div>
                                <h4>Email</h4>
                                <p>adityarajsingh1189@gmail.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon"><Phone size={24} /></div>
                            <div>
                                <h4>Phone / Mobile</h4>
                                <p>+91 8617463921</p>
                            </div>
                        </div>
                    </div>

                    <div className="social-links">
                        <a href="https://github.com/Addyx1" target="_blank" rel="noreferrer" className="social-link"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/adi-singh001" target="_blank" rel="noreferrer" className="social-link"><Linkedin size={24} /></a>
                    </div>
                </div>

                <form className="contact-form glass" onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" placeholder="John Doe" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
