const express = require('express');
const mongoose = require('mongoose');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const plantRoutes = require('./routes/plant')
const homeRoutes = require('./routes/home')
const cors = require('cors');
require('dotenv/config');

mongoose.connect(`${process.env.MONGODB_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, (err) => err ? console.log('error: ' + err) : console.log('Connected to db!'))

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('./uploads'));
app.use('/doc', express.static('./doc'));
app.use(express.static('doc'));



// app.set('view engine', 'ejs');


app.use('/api/plant', plantRoutes)
app.use('/', homeRoutes)

app.get('*', (req, res, next) => {
    const err = new Error;
    err.status = 404
    next(err);
})

app.use((err, req, res, next) => {
    if (err.status === 404) {
        res.send(`<div style="margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      ">
                <h1>| 404 Not Found |</h1>
        </div>`);
    } else {
        return next();
    }
})


const listener = app.listen(process.env.PORT || 3000, () => console.log('your server port is : ' + listener.address().port))