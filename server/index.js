const express = require('express');
const { router } = require('./Routes/routes');
require('dotenv').config()


const app = express();

app.use(express.json());

app.use('/', router)

app.use( (err, req, res, next)=>{
    res.json({
        msg : "Seems Like there was an issue in our Server"
    })
} )

app.listen(process.env.PORT, ()=>{
    console.log('The server has started');
})