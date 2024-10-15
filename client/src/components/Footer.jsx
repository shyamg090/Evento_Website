import logo from '../assets/evento.png'

const Footer = () => {
    const navbar = ['Home', 'About', 'Sign in']
    const navbar2 = ['Home', 'About', 'Profile', 'Add Event']

    return (
        <div className="h-[30vh] bg-black text-white flex flex-col items-center justify-between gap-8 p-4 mt-6">
            <div className='w-full flex items-center justify-evenly'>
                <img src={logo} className='max-w-[12rem]' alt='logo'></img>
                <ul>
                    <div className='flex items-center justify-evenly gap-16 text-[1.2rem] p-4'>
                        {
                            navbar.map((item, id) => {
                                return <li key={id}>{item}</li>
                            })
                        }
                    </div>
                </ul>
            </div>
            <div className='w-full flex items-center justify-center'>
                <h2 className='text-center'> © 2024 Evento | Privacy Policy | Terms of Use | Cookies Policy | Website by Shyam G</h2>
            </div>
        </div>
    )
}

export default Footer;