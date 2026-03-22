import { BookOpen, Code, Trophy, MapPin, Award } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        { category: 'Languages', items: ['Java', 'C', 'C++', 'Python'] },
        { category: 'Web / Backend', items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'React', 'Flask'] },
        { category: 'Tools / Platforms', items: ['Jira', 'Selenium', 'AWS', 'Docker', 'Apache', 'MySQL', 'MongoDB', 'Git', 'Overleaf', 'Cisco'] },
        { category: 'Soft Skills', items: ['Problem Solving', 'Team Player', 'Adaptability', 'Quick Learner'] }
    ];

    return (
        <div className="page-container">
            <div className="section-header">
                <h2 className="gradient-text">About Me</h2>
                <p>Get to know my journey, skills, and achievements.</p>
            </div>

            <div className="about-grid">
                <div className="about-card glass">
                    <BookOpen className="icon-accent" size={32} />
                    <h3>Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Lovely Professional University</h4>
                            <p className="timeline-date">Aug '23 - Present</p>
                            <p className="timeline-desc">B.Tech in Computer Science and Engineering (CGPA: 6.90). Located in Phagwara, Punjab.</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Narayana School</h4>
                            <p className="timeline-date">Apr '22 - Mar '23</p>
                            <p className="timeline-desc">Intermediate (Percentage: 80.5%). Located in Durgapur, West Bengal.</p>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-dot"></div>
                            <h4>Narayana School</h4>
                            <p className="timeline-date">Apr '19 - Mar '20</p>
                            <p className="timeline-desc">Matriculation (Percentage: 73.8%). Located in Durgapur, West Bengal.</p>
                        </div>
                    </div>
                </div>

                <div className="about-card glass">
                    <Code className="icon-accent" size={32} />
                    <h3>Technical Arsenal</h3>
                    <div className="skills-grid">
                        {skills.map((skillGroup, idx) => (
                            <div key={idx} className="skill-category">
                                <h4 className="skill-title">{skillGroup.category}</h4>
                                <div className="skill-tags">
                                    {skillGroup.items.map((item, i) => (
                                        <span key={i} className="skill-tag">{item}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="about-card glass about-full">
                    <Award className="icon-accent" size={32} />
                    <h3>Achievements</h3>
                    <div className="timeline" style={{ flexDirection: 'row', flexWrap: 'wrap', gap: '40px', borderLeft: 'none', paddingLeft: 0, marginTop: '20px' }}>
                        <div className="timeline-item" style={{ flex: '1 1 300px', borderLeft: '2px solid var(--glass-border)', paddingLeft: '20px', position: 'relative' }}>
                            <div className="timeline-dot"></div>
                            <h4>5-Star Java Programmer</h4>
                            <p className="timeline-date">HackerRank | Dec '24</p>
                            <p className="timeline-desc">Earned a 5-star rating in Java by solving competitive programming challenges.</p>
                        </div>
                        <div className="timeline-item" style={{ flex: '1 1 300px', borderLeft: '2px solid var(--glass-border)', paddingLeft: '20px', position: 'relative' }}>
                            <div className="timeline-dot"></div>
                            <h4>5-Star C++ Programmer</h4>
                            <p className="timeline-date">HackerRank | Apr '24</p>
                            <p className="timeline-desc">Earned a 5-star rating in C++ by solving competitive programming challenges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
