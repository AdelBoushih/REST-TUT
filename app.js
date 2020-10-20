const express = require('express');

const app = express();

//ROUTES
app.get('/' , (req , res) =>{
    res.send('Adoula we\'re on home!');
});

//Listening to the server
app.listen(3000);