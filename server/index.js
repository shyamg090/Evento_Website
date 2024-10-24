const express = require('express');
const { router } = require('./Routes/routes');
require('dotenv').config()

const PORT = process.env.PORT || 4000

const cors = require('cors');

const app = express();

app.use(cors({
    // origin : 'http://localhost:5173',
    methods : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/', router)

// app.use( (err, req, res, next)=>{
//     res.json({
//         msg : "Seems Like there was an issue in our Server"
//     })
// } )

app.listen(PORT, ()=>{
    console.log('The server has started');
})