import { FaLocationDot } from "react-icons/fa6";
import { BsCalendarDateFill } from "react-icons/bs";
import { IoIosTime } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Events = () => {
  const [apievent, setapievent] = useState()

    const eventimage = "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F871983179%2F1928625884443%2F1%2Foriginal.20241010-224759?h=230&w=460&auto=format%2Ccompress&q=75&sharp=10&s=025875a4d4ba7d0dab430352d38bde15"

    useEffect(()=>{

      const getevents = ()=>{
        const api_events = useSelector((state) => state.events);
        setapievent(api_events)
      }

      getevents();

    },[])

    return (
        <div className="min-h-screen bg-gray-100 text-black py-16 px-8 md:px-24">
        <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">Popular Events</h1>
      
        {/* Event List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apievent.events.map((item, id) => (
            <Link key={id} to={`/events/${item._id}`} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
              {/* Event Image */}
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.eventimage})` }}
              ></div>
      
              {/* Event Details */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900">{item.eventname}</h2>
                <div className="flex items-center justify-start gap-4 mt-2">
                  <p className="flex items-center gap-2 text-gray-600">
                    <FaLocationDot className="text-red-600" /> {item.location}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <BsCalendarDateFill className="text-red-600" /> {item.date}
                  </p>
                  <p className="flex items-center gap-2 text-gray-600">
                    <IoIosTime className="text-red-600" /> {item.time}
                  </p>
                </div>
                <p className="text-gray-600 mt-2">Hosted by: {item.hostedby}</p>
                <p className="text-gray-600 mt-2">Starting from: ${item.price}</p>
                <h1 className="bg-red-600 w-fit rounded-md text-white text-center text-sm p-1 mt-2">{item.category}</h1>
              </div>
            </Link>
          ))}
        </div>
      
        {/* More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">More</button>
        </div>
      </div>
      
    )
}

export default Events