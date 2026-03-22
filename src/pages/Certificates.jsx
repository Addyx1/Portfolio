import { Award, Code, ExternalLink } from 'lucide-react';
import './Certificates.css';

const Certificates = () => {
    const certs = [
        {
            id: 1,
            title: 'AWS Academy Graduate - Cloud Architecting',
            issuer: 'AWS Academy',
            date: "Jan 2026",
            link: "https://www.credly.com/go/qXxWkW3J"
        },
        {
            id: 2,
            title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
            issuer: 'Infosys Springboard',
            date: "Aug 2025"
        },
        {
            id: 3,
            title: 'Build Generative AI Apps and Solutions with No-Code Tools',
            issuer: 'Infosys Springboard',
            date: "Aug 2025"
        },
        {
            id: 4,
            title: 'Computational Theory: Language Principle & Finite Automata Theory',
            issuer: 'Infosys Springboard',
            date: "Aug 2025"
        },
        {
            id: 5,
            title: 'Bits and Bytes of Computer Networking',
            issuer: 'Google',
            date: "Nov 2025"
        },
        {
            id: 6,
            title: 'Introduction to Hardware and Operating System',
            issuer: 'IBM',
            date: "Sep 2024"
        }
    ];

    const training = [
        {
            id: 1,
            title: 'Fundamentals of Data Structures: Learn, Apply and Build Projects',
            issuer: 'Lovely Professional University',
            date: "Jun 2025 - Jul 2025",
            desc: "Earned a Certificate of Merit with an 'A' Grade from the Centre for Professional Enhancement. Implemented core DSA concepts from scratch including trees, graphs, and sorting. Mastered optimized C++ programs."
        }
    ];

    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">Certifications & Training</h2>
                <p>Continuous learning and validation of skills.</p>
            </div>

            <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem' }}>Certifications</h3>
            <div className="cert-gallery" style={{ marginBottom: '50px' }}>
                {certs.map((cert, index) => (
                    <div key={cert.id} className="cert-card glass" style={{ animationDelay: `${index * 0.1}s`, padding: '25px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <Award size={40} className="text-accent" style={{ flexShrink: 0 }} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>{cert.title}</h3>
                            <p style={{ color: 'var(--accent-secondary)', fontWeight: '500', margin: 0 }}>{cert.issuer}</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0 0 10px 0' }}>{cert.date}</p>
                            {cert.link && (
                                <a href={cert.link} target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '0.9rem', fontWeight: '500' }}>
                                    View Credential <ExternalLink size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <h3 style={{ color: 'var(--text-primary)', marginBottom: '20px', fontSize: '1.5rem' }}>Training</h3>
            <div className="cert-gallery">
                {training.map((t, index) => (
                    <div key={t.id} className="cert-card glass" style={{ animationDelay: `${index * 0.1}s`, padding: '25px', display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                        <Code size={40} className="text-accent" style={{ flexShrink: 0 }} />
                        <div>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 8px 0' }}>{t.title}</h3>
                            <p style={{ color: 'var(--accent-secondary)', fontWeight: '500', margin: 0 }}>{t.issuer}</p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: '0 0 10px 0' }}>{t.date}</p>
                            <p style={{ color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>{t.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
