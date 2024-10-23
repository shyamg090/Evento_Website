import React, { useState } from 'react';

const AddEvent = () => {
    const [message, setmessage] = useState('')
    const [formData, setFormData] = useState({
        eventname: '',
        hostedby: '',
        description: '',
        location: '',
        date: '',
        time: '',
        price: '',
        category: '',
        eventimage: null
    });

    const handleChange = (e) => {

        const { name, value, type, files } = e.target;
        if (type == 'file') {
            setFormData({
                ...formData,
                [name]: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();

        for (let key in formData) {
            form.append(key, formData[key]); // Append each field to FormData
        }

        console.log();

        const token = JSON.parse(localStorage.getItem('auth_token')).jwt_token

        try {

            const formRes = await fetch('http://localhost:2002/user/addevent', {
                method : 'POST',
                headers: {
                    'Authorization': `${token}`
                },
                body : form
            })
            console.log(formRes);

            const formdata = await formRes.json();

            setmessage(formdata.msg)

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center lg:p-[4rem]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Create an Event</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-gray-700">Event Name</label>
                        <input
                            type="text"
                            name="eventname"
                            value={formData.eventname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter event name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Hosted By</label>
                        <input
                            type="text"
                            name="hostedby"
                            value={formData.hostedby}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter host name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter event description"
                            required
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-gray-700">Location</label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter event location"
                            required
                        />
                    </div>

                    <div className="flex justify-between gap-4">
                        <div>
                            <label className="block text-gray-700">Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700">Time</label>
                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700">Price</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter price"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Category</label>
                        <input
                            type="text"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            placeholder="Enter event category"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700">Event Image (PNG or JPG)</label>
                        <input
                            type="file"
                            name="eventimage"
                            accept="image/png, image/jpeg"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                    >
                        Submit Event
                    </button>
                </form>
                <h1>{message}</h1>
            </div>
        </div>
    );
};

export default AddEvent;
