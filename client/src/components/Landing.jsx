import { TiStarFullOutline } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";

const Landing = () => {
    const star = [1, 2, 3, 4, 5];

    return (
        <div className="w-[100vw] h-[80vh] flex flex-col items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1576085898274-069be5a26c58?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
            <h1 className="lg:w-[60%] text-white text-center uppercase font-extrabold text-[2.5rem] lg:text-[4rem] p-4">
                explore events, meet your tribe that match your vibe.
            </h1>

            <div className="bg-white flex flex-col w-[90%] lg:w-[40%] mx-auto p-4 gap-4 relative -bottom-16 lg:absolute lg:bottom-0 shadow-2xl">
                <div className="flex items-center justify-center gap-2">
                    {
                        star.map(() => {
                            return <TiStarFullOutline className="text-yellow-400 w-[2rem] h-[2rem]" />
                        })
                    }
                </div>
                <h1 className="flex items-center justify-center gap-4"> Our customers say Excellent! (Over 1000 five star reviews) <FcGoogle className="text-[2rem]" /> </h1>
            </div>
        </div>
    )
}

export default Landing;