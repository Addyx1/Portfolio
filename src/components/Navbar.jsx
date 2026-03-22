import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar glass">
            <div className="nav-brand">
                <span className="gradient-text" style={{ fontWeight: 700, fontSize: '1.5rem', fontFamily: 'Outfit' }}>PORTFOLIO</span>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>About</NavLink></li>
                <li><NavLink to="/projects" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Projects</NavLink></li>
                <li><NavLink to="/certificates" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Certificates</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
