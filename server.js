const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const port = 3001;

const app = express();
app.use(cookieParser());
app.use(cors());

//Post request that sets a session cookie based off of user's name as an object
app.get('/login', (req, res) => {
    var cookie = {
        httpOnly: true,
        sameSite: 'strict'
    };
    //let name = req.body
    let name = "UsersName";
    res.cookie('name', name, cookie);
    res.status(200).send("Cookie has been added successfully");
});

//Displays user's name from cookie when routed to /hello
app.get('/hello', (req, res) => {
    //Displays user's name from cookies
    if (req.cookies.name !== undefined) {
        res.status(200).send(`Hello ${req.cookies.name}`);
    } else if (req.cookies.name === undefined) {
        res.status(200).send("No username found");
    } else {
        res.status(err).send(`There was an error: ${err}`);
    }

});

app.listen(port, () => console.log(`Server is running on ${port}`));