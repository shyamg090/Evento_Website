import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { editevent } from '../Redux/slices/EventsSlice';

const User = () => {

  const [events, setEvents] = useState([]);
  const [user, setuser] = useState({});
  const [msg, setmsg] = useState('')

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = JSON.parse(localStorage.getItem('auth_token')).jwt_token;

  const getevents = async () => {
    const eventsjson = await fetch('https://evento-website.onrender.com/users/events', {
      method: 'GET',
      headers: {
        'Authorization': `${token}`
      },
    })
    // console.log(formRes);

    const events = await eventsjson.json();

    console.log(events);
    setuser(events.user)
    setEvents(events.user.addedevents);
  }

  useEffect(() => {
    getevents();
  }, [msg])

  const handleDelete = async (id) => {

    const eventsjson = await fetch(`https://evento-website.onrender.com/events/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `${token}`
      },
    })

    const events = await eventsjson.json();
    setmsg(events.msg);
  };

  const handleEdit = (id) => {
    // console.log(user.addedevents);

    const [toBeEdited] = user.addedevents.filter((item)=>{
      return item._id == id;
    })

    console.log(toBeEdited);

    dispatch(editevent(toBeEdited));

    navigate(`/user/editevents`);
  };

  if (events.length === 0) {
    return <div className="min-h-screen bg-gray-100 text-black py-16 px-8 md:px-24">
      <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">Seems Like You have Not Added Events yet!!</h1>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-100 text-black py-16 px-8 md:px-24">
      <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">Manage Your Events</h1>

      {/* Event List */}
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, id) => (
          <div
            key={id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            {/* Event Image */}
            <img
              src={event.eventimage}
              alt={event.eventname}
              className="w-full h-56 object-cover"
            />

            {/* Event Details */}
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900">{event.eventname}</h2>
              <p className="text-gray-600 mb-2">Hosted by: {event.hostedby}</p>
              <p className="text-gray-600 mb-2">Date: {event.date}</p>
              <p className="text-gray-600 mb-2">Location: {event.location}</p>

              {/* Action Buttons */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(event._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event._id)}
                  className="px-4 py-2 bg-gray-200 text-red-600 rounded-lg hover:bg-gray-300 transition duration-300">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
