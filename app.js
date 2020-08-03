const getSum = require("./test");
console.log(getSum.mul(4, 5));

const express = require("express");
const app = express();
const path = require("path");
const port = 5000;
const bodyParser = require('body-parser');

// serving static files
app.use(express.static("public"));

/* START - mandotory for sending POST requests */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
/*  END

/* middlewares */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



require("./routes")(app);

app.set("view engine", "ejs");

app.listen(port, () => {
    console.log("server is running on port 5000... ")
});