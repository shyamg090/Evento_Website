import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const User = () => {
  // Sample event data (you can replace this with real data from a backend API)
  const [events, setEvents] = useState([
    {
      id: 1,
      eventname: 'Tech Meetup',
      hostedby: 'John Doe',
      date: '2024-10-15',
      location: 'New York City',
      imageUrl: 'https://source.unsplash.com/400x300/?meetup',
    },
    {
      id: 2,
      eventname: 'Startup Pitch Night',
      hostedby: 'Jane Smith',
      date: '2024-11-01',
      location: 'San Francisco',
      imageUrl: 'https://source.unsplash.com/400x300/?startup',
    },
    // Add more events as needed
  ]);

  const navigate = useNavigate();

  // Function to handle event deletion
  const handleDelete = (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this event?');
    if (confirmed) {
      setEvents(events.filter((event) => event.id !== id));
    }
  };

  // Function to handle editing an event
  const handleEdit = (id) => {
    navigate(`/addevent/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black py-16 px-8 md:px-24">
      <h1 className="text-4xl font-bold text-red-600 mb-12 text-center">Manage Your Events</h1>

      {/* Event List */}
      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            {/* Event Image */}
            <img
              src={event.imageUrl}
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
                  onClick={() => handleEdit(event.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300">
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(event.id)}
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
