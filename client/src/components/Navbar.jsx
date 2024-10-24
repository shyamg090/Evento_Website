import { useSelector } from 'react-redux';
import logo from '../assets/evento.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for open/close

const Navbar = () => {
    const user = useSelector((state) => state.auth.user);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const [menuOpen, setMenuOpen] = useState(false);
    const navbarA = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Add Event', path: '/addevent' },
        { name: 'Events', path: '/events' },
        { name: `👋 ${user}`, path: '/user' },
    ];

    const navbarB = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Events', path: '/events' },
        { name: 'Sign in', path: '/signin' },
        { name: 'Sign up', path: '/signup' },
    ];

    const navbar = isAuthenticated ? navbarA : navbarB;

    return (
        <nav className="bg-red-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    
                    <div className="flex-shrink-0">
                        <img src={logo} alt="logo" className="max-w-[10rem]" />
                    </div>

                    <div className="hidden lg:flex items-center gap-8 text-lg">
                        {navbar.map((item, id) => (
                            <Link key={id} to={item.path} className="hover:text-gray-300">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={`lg:hidden fixed inset-0 bg-red-600 text-white z-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex items-center justify-end p-6">
                    <button onClick={() => setMenuOpen(false)}>
                        <FiX size={24} />
                    </button>
                </div>
                <ul className="flex flex-col items-center gap-8 mt-16">
                    {navbar.map((item, id) => (
                        <li key={id}>
                            <Link
                                to={item.path}
                                onClick={() => setMenuOpen(false)}
                                className="text-2xl hover:text-gray-300"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
