import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userLoggedin } from "../Redux/slices/AuthSlice";

const Signin = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const { username, email, phone, password } = location.state || {
        username: "",
        email: "",
        phone: "",
        password: "",
    };

    const navigate = useNavigate();

    const [serverstatus, setserverstatus] = useState({});

    const [formdata, setformData] = useState({
        username: username,
        email: email,
        phone: phone,
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

        const signinres = await fetch("http://localhost:2002/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formdata),
        });

        if (signinres.status == 200) {

            const res = await signinres.json();

            localStorage.setItem("auth_token", JSON.stringify(res.jwt));

            const user = {
                user: res.username,
            };

            navigate("/");

            dispatch(userLoggedin(user));
        }

        const res = await signinres.json();

        console.log(res);

        setserverstatus(res);

    };

    return (
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <form
                className="flex flex-col bg-gray-200 gap-4 text-[2rem] "
                onSubmit={handleSubmit}
            >
                <input
                    className="form-input"
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={fillform}
                    value={formdata.name}
                />
                <input
                    className="form-input"
                    type="text"
                    placeholder="email"
                    name="email"
                    onChange={fillform}
                    value={formdata.email}
                />
                <input
                    className="form-input"
                    type="number"
                    placeholder="phone"
                    name="phone"
                    onChange={fillform}
                    value={formdata.phone}
                />
                <input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={fillform}
                    value={formdata.password}
                />
                <button type="submit">Signin </button>
            </form>
            <h1>{serverstatus.msg}</h1>
        </div>
    );
};

export default Signin;
