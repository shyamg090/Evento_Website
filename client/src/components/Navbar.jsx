

const Navbar = () => {
    const navbar = ['Home', 'About', 'Profile', 'Add Event']
    return (
        <div>
            <ul className="flex">
                {
                    navbar.map((item, id) => {
                        return <li key={id}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Navbar