const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const port = 3001;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Post request that sets a session cookie based off of user's name as an object
app.post('/login', (req, res) => {
    var cookie = {
        maxAge: 24,
        httpOnly: true,
        sameSite: 'strict'
    };

    res.cookie('name', req.body.name, cookie);
    res.status(200).send();
});

//Displays user's name from cookie when routed to /hello
app.get('/hello', (req, res) => {
    //Displays user's name from cookies
    console.log(req.cookies.name);
    /*
    if (req.cookies.name !== undefined) {
        res.status(200).send(`Hello ${req.cookies.name}`);
    } else {
        res.status(200).send();
    }
    */
   res.status(200)
});

app.listen(port, () => console.log(`Server is running on ${port}`));