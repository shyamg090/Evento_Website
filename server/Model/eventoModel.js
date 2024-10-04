const mongoose = require('mongoose');
require('dotenv').config()


mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('Database connected Sucessfully!!!'))

const user_schema = new mongoose.Schema({
    username: String,
    email: String,
    phone: Number,
    password: String,
    addedevents : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Events'
        }
    ]
})

const event_schema = new mongoose.Schema({
    eventname: String,
    hostedby: String,
    description: String,
    location: String,
    date: String,
    time: String,
    price: Number,
    category: String,
    eventimage : String,
    intrested: Array,
    byuser : String
})

const User = mongoose.model('User', user_schema);
const Events = mongoose.model('Events', event_schema)


module.exports = { User, Events } // tables exported