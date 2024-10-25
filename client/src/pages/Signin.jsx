import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userLoggedin } from "../Redux/slices/AuthSlice";

const Signin = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const { email, password } = location.state || {
        email: "",
        password: "",
    };

    const navigate = useNavigate();

    const [serverstatus, setserverstatus] = useState({});

    const [formdata, setformData] = useState({
        email: email,
        password: password,
    });

    const fillform = (e) => {
        const { name, value } = e.target;

        const newform = { ...formdata, [name]: value };

        setformData(newform);
        console.log(newform);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const signinres = await fetch("https://evento-website.onrender.com/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        });

        console.log(signinres.status);

        if(signinres.status == 404){
            navigate('/signup')
        }

        if (signinres.status == 200) {

            const res = await signinres.json();
            console.log("200", res);

            const jwt_user = {
                jwt_token : res.jwt_token,
                user : res.username
            }

            localStorage.setItem("auth_token", JSON.stringify(jwt_user));
            console.log(jwt_user);
            navigate("/");

            setserverstatus(res);
            console.log(jwt_user.user);

            dispatch(userLoggedin(jwt_user.user));
        }
      

        // const res = await signinres.json();

        // console.log(res);


    };

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-gray-100">
            <form
                className="bg-white p-8 rounded-lg shadow-lg flex flex-col gap-6 w-full max-w-md"
                onSubmit={handleSubmit}
            >
                <h2 className="text-3xl text-center font-bold text-red-600">Sign In</h2>
                    {/*          
                <input
                    className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={fillform}
                    value={formdata.username} // Changed from name to username
                    required
                />
  

                */}
                
                <input
                    className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="email" // Changed type to email for better validation
                    placeholder="Email"
                    name="email"
                    onChange={fillform}
                    value={formdata.email}
                    required
                />
                
                {/* <input
                    className="form-input px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                    type="tel" // Changed type to tel for better input handling
                    placeholder="Phone"
                    name="phone"
                    onChange={fillform}
                    value={formdata.phone}
                    required
                /> */}
                
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
                    Sign In
                </button>

                {serverstatus.msg && <h1 className="text-center text-red-600">{serverstatus.msg}</h1>}
            </form>
            <div>
                <h1>Don't have an account? <Link to={'/signup'} className="text-red-600">Sign up</Link></h1>
            </div>
        </div>

    );
};

export default Signin;
