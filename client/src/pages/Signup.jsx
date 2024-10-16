import { useState } from "react"
import { json, useNavigate } from "react-router-dom";

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
        <div className="w-[100vw] h-[100vh] flex items-center justify-center">
            <form className="flex flex-col bg-gray-200 gap-4 text-[2rem] " onSubmit={handleSubmit}>
                <input className="form-input" type='text' placeholder="Username" name="username" onChange={fillform} value={formdata.name} />
                <input className="form-input" type='text' placeholder="email" name="email" onChange={fillform} value={formdata.email} />
                <input className="form-input" type='number' placeholder="phone" name="phone" onChange={fillform} value={formdata.phone} />
                <input className="form-input" type='password' placeholder="Password" name="password" onChange={fillform} value={formdata.password} />
                <button type="submit">Signup </button>
            </form>
            <h1>{serverstatus.msg}</h1>
        </div>
    )
}

export default Signup