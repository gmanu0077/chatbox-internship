const express = require('express')
const cors = require('cors');
//const mongoose = require('mongoose');
//const dotenv = require('dotenv')
//dotenv.config();
const app = express();
app.use(cors());


//app.use(express.json());
//const uri = process.env.ATLAS_URI;
//mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });


//const connection = mongoose.connection;
//connection.once('open', () => {
//    console.log("MongoDB database connection established successfully");
//})

const data = require('./route/data');

app.use('/chat', data);
app.listen(7000, (res, req) => {
    console.log('running.')
})  