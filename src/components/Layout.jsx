import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    return (
        <>
            <div className="animated-bg"></div>
            <Navbar />
            <main className="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
