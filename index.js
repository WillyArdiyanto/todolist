const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 3000;

//Membuat aplikasi express
const app = express();

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//parse requests of content-type - application/json
app.use(bodyParser.json());

//using cors for csrf protection
app.use(cors());

//require task routes
const router = require('./router');

//using as middleware
app.use("", router);

//running server
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});