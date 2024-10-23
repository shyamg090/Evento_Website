import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import {useSelector} from 'react-redux';

const PopularEvent = () => {

    const eventimage = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F871983179%2F1928625884443%2F1%2Foriginal.20241010-224759?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&s=025875a4d4ba7d0dab430352d38bde15"

    const getevents = [1, 2, 3, 4,5,6];

    const events = useSelector((state)=> state.events);


    return (
        <div className="flex flex-col items-center justify-center gap-8 py-8 bg-gray">
            <div className="mx-auto my-4">
                <h1 className="text-[2rem] lg:text-[3rem] font-bold text-1 uppercase"> Popular Events</h1>
            </div>

            <div className="lg:w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-none place-items-center gap-4">

                {
                    events.events.slice(0,6).map((item, id) => {
                        return <div key={id} className="flex flex-col min-w-[25rem] hover:shadow-2xl hover:rounded-md p-2">

                        <div className="w-full h-[30vh] bg-cover bg-center" style={{ backgroundImage: `url(${item.eventimage})` }}></div>

                        <div className="p-4 flex flex-col gap-2">
                            <h1 className="text-[1.5rem]"> {item?.eventname} </h1>
                            <div className="flex items-center justify-start gap-4">
                                <h1 className="flex  items-center justify-center gap-2"> <FaLocationDot className="text-red" /> {item?.location}</h1>
                                <h1 className="flex items-center justify-center  gap-2"> <BsCalendarDateFill className="text-red" /> {item?.date}</h1>
                                <h1 className="flex  items-center justify-center gap-2"> <IoIosTime className="text-red" /> {item?.time}</h1>
                            </div>
                            <h1>{item?.hostedby}</h1>
                            <h1>startingfrom: {item?.price}</h1>
                            <h1 className="bg-red-600 w-[5rem] rounded-md text-white text-center text-[.8rem] p-1">{item?.category}</h1>
                        </div>
                    </div>
                    })
                }
            </div>
            <div>
                <button className="custom-button">More</button>
            </div>
        </div>
    )
}

export default PopularEvent