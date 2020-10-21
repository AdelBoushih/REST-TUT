const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//Middlewares
app.use(bodyParser.json());
app.use(cors());
/*app.use('/posts' , () => {
    console.log('This is a middleware Adoula!');
});*/

//Import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);

//ROUTES
app.get('/' , (req , res) => {
    res.send('Adoula we\'re on home!');
});

/*app.get('/posts' , (req , res) => {
    res.send('Adoula we\'re on posts!');
});*/


//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Adoula Connected to DB')
);

//Listening to the server
app.listen(3000);