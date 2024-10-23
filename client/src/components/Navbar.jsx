import { useLocation } from 'react-router-dom'
import logo from '../assets/evento.png'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const user = useSelector((state) => state.auth.user);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    const navbarA = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'Add Event',
            path: '/addevent'
        },
        {
            name: 'events',
            path: '/events'
        },
        {
            name: `👋 ${user}`,
            path: '/user'
        },
    ]
    const navbarB = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About',
            path: '/about'
        },
        {
            name: 'events',
            path: '/events'
        },
        {
            name: 'Sign in',
            path: '/signin'
        },
        {
            name: 'Sign up',
            path: '/signup'
        },
    ]

    const navbar = isAuthenticated ? navbarA : navbarB

    return (
        <div className='bg-red'>
            <ul className="flex items-center justify-between p-4 font-navbar">
                <img src={logo} className='max-w-[12rem]' alt='logo'></img>

                <div className='hidden lg:flex items-center justify-evenly gap-16 text-[1.2rem] p-4'>
                    {
                        navbar.map((item, id) => {
                            return <Link  key={id} to={`${item.path}`}> <li>{item.name}</li></Link>
                        })
                    }
                </div>
            </ul>
        </div>
    )
}

export default Navbar