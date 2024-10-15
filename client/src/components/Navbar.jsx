import logo from '../assets/evento.png'

const Navbar = () => {
    const navbar = ['Home', 'About', 'Events', 'Sign in', 'Sign up']
    const navbar2 = ['Home', 'About','Profile', 'Add Event']

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