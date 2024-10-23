import logo from '../assets/evento.png'

const Footer = () => {
    const navbar = ['Home', 'About', 'Sign in']
    const navbar2 = ['Home', 'About', 'Profile', 'Add Event']

    return (
        <div className="h-[40vh] bg-black text-white flex flex-col items-center justify-between lg:gap-8 p-4 pt-6">
            <div className='w-full flex lg:flex-row flex-col items-center justify-evenly'>
                <img src={logo} className='max-w-[12rem]' alt='logo'></img>
                <ul>
                    <div className='flex flex-row lg:flex-row items-center justify-evenly gap-4 lg:gap-16 text-[1.2rem] p-4'>
                        {
                            navbar.map((item, id) => {
                                return <li key={id}>{item}</li>
                            })
                        }
                    </div>
                </ul>
            </div>
            <div className='w-full  flex items-center justify-center'>
                <h2 className='text-center'> © 2024 Evento | Privacy Policy | Terms of Use | Cookies Policy | Website by Shyam G</h2>
            </div>
        </div>
    )
}

export default Footer;