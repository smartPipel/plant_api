const express = require('express');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const plantRoutes = require('./routes/plant')
require('dotenv/config');

mongoose.connect(`${process.env.MONGODB_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => err ? console.log('error: ' + err) : console.log('Connected to db!'))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json());

// app.set('view engine', 'ejs');



app.use('/api/plant', plantRoutes)


const listener = app.listen(process.env.PORT || 3000, () => console.log('your server port is : ' + listener.address().port))