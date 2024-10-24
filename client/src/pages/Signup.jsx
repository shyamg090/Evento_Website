import { useState } from "react"
import { json, Link, useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    const [serverstatus, setserverstatus] = useState({});

    const [formdata, setformData] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });

    const fillform = (e) => {
        const { name, value } = e.target;

        const newform = { ...formdata, [name]: value };

        setformData(newform);
        // console.log(newform);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const signupres = await fetch('http://localhost:2002/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        })

        const res = await signupres.json();

        const finalresult = await res;
        console.log(finalresult);

        setserverstatus(res);

        navigate('/signin');
    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl text-center font-bold text-red-600">Sign Up</h2>
                
                <input
                    className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={fillform}
                    value={formdata.username} // Changed from name to username
                    required
                />
                
                <input
                    className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="email" // Changed type to email for better validation
                    placeholder="Email"
                    name="email"
                    onChange={fillform}
                    value={formdata.email}
                    required
                />
                
                <input
                    className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="tel" // Changed type to tel for better input handling
                    placeholder="Phone"
                    name="phone"
                    onChange={fillform}
                    value={formdata.phone}
                    required
                />
                
                <input
                    className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={fillform}
                    value={formdata.password}
                    required
                />
                
                <button
                    type="submit"
                    className="bg-red-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-red-700 transition duration-200"
                >
                    Sign Up
                </button>

                {serverstatus.msg && <h1 className="text-center text-red-600">{serverstatus.msg}</h1>}
            </form>
            <div>
                <h1>Already Have an account? <Link to={'/signin'} className="text-red-600">Sign in</Link></h1>
            </div>
        </div>
    )
}

export default Signup