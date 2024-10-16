import { useLocation } from 'react-router-dom'
import logo from '../assets/evento.png'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const location = useLocation();

    const user = useSelector((state) => state.auth.user);
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    console.log(user);
    console.log(isAuthenticated);
    // const { username, email } = location.state || { username: "", email: "" }
    const navbar = isAuthenticated ? ['Home', 'About', user , 'Add Event'] : ['Home', 'About', 'Events', 'Sign in', 'Sign up']

    // const navbar = ['Home', 'About', 'Events', 'Sign in', 'Sign up'];

    return (
        <div className='bg-red'>
            <ul className="flex items-center justify-between p-4 font-navbar">
                <img src={logo} className='max-w-[12rem]' alt='logo'></img>

                <div className='hidden lg:flex items-center justify-evenly gap-16 text-[1.2rem] p-4'>
                    {
                        navbar.map((item, id) => {
                            return <li key={id}>{item}</li>
                        })
                    }
                </div>
            </ul>
        </div>
    )
}

export default Navbar