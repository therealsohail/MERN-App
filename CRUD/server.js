const express = require('express');
const app = express();
const router = require('./Routes/route');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ninjas';
const cors = require('cors');

mongoose.connect( url ,{useNewUrlParser:true, useUnifiedTopology:true});
app.use(express.json());

app.use(cors());
app.use('/api',router);


app.listen(8080, ()=>{
    console.log('Server is Running!');
});