import { useState } from 'react';
import ConfirmationCard from './ConfirmationCard';
import { useDispatch, useSelector } from 'react-redux';

const EditEvent = () => {
    const [message, setmessage] = useState('');

    const dispatch = useDispatch();

    const editevent = useSelector((state) => state.events.editingevent);

    const initial_form = editevent;
    // console.log(initial_form);

    const [formData, setFormData] = useState(initial_form);
    // console.log(formData);
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

        const token = JSON.parse(localStorage.getItem('auth_token')).jwt_token

        try {

            const formRes = await fetch(`http://localhost:2002/events/${editevent._id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`
                },
                body: form
            })
            // console.log(formRes);

            const formdata = await formRes.json();

            setmessage(formdata.msg);
            // dispatch(cleareditevent());
            setFormData(initial_form);
            // console.log(formData);
        } catch (e) {
            console.log(e);
        }

        setTimeout(() => {
            setmessage('');
        }, 10000)

    };

    return (
        <>
            {
                message.length !== 0 ? <ConfirmationCard message={message} /> :
                    <div className="bg-gray-100 min-h-screen flex justify-center items-center lg:p-[4rem]">
                        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Edit an Event</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700">Event Name</label>
                                    <input
                                        type="text"
                                        name="eventname"
                                        maxLength="30"
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
                                        maxLength="30"
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
                                        maxLength="400"
                                        value={formData.description}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                                        placeholder="Enter event description"
                                        required
                                    ></textarea>
                                </div>

                                <div>
                                    <label className="block text-gray-700">City</label>
                                    <input
                                        type="text"
                                        name="location"
                                        maxLength="15"
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
                                        min="0"
                                        step="any"
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
                                        maxLength="20"
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
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition duration-300"
                                >
                                    Submit Event
                                </button>
                            </form>
                        </div>
                    </div>

            }
        </>
    );
};

export default EditEvent;
