import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const EventsInfo = () => {

    const query = useParams();

    const [event, setevent] = useState({});

    useEffect(() => {

        const getOneEvent = async () => {

            const event = await fetch(`http://localhost:2002/events/${query.id}`);

            const eventdata = await event.json();

            setevent((prev) => {
                return { ...prev, ...eventdata.getevent }
            })
        }

        getOneEvent();
    }, [])

    return (
        <div className="flex flex-col gap-12 p-6">
            <div className="w-full h-[60vh] relative bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${event.eventimage})` }}>
                <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                    <h1 className="text-[3rem] text-center text-white font-bold"> This is {event.eventname}</h1>
                </div>
                
            </div>

            <div className="lg:w-[50%] mx-auto flex items-center justify-center border-b-4 border-red-600 pb-4">
                <h1 className="text-[3rem] text-center font-bold text-gray-800">{event.eventname}</h1>
            </div>

            <div className="text-center">
                <h2 className="text-[2rem] text-gray-500">{`Hosted by ${event.hostedby}`}</h2>
            </div>

            <div className="w-full flex flex-col lg:flex-row gap-4 justify-between lg:items-start items-center mx-auto">
                <div className="lg:w-[60vw] w-[80vw] h-[50vh] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${event.eventimage})` }}></div>

                <div className="flex flex-col gap-6 w-[80vw] lg:w-[50%] text-gray-800">
                    <p className="text-lg font-medium">{event.description}</p>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold border-b-2 border-b-red-600">Location:</span>
                        <p>{event.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold border-b-2 border-b-red-600">Price:</span>
                        <p>{event.price}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold border-b-2 border-b-red-600">Time:</span>
                        <p>{event.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold border-b-2 border-b-red-600">Category:</span>
                        <p>{event.category}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EventsInfo