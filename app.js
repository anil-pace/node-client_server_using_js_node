const getSum = require("./test");
console.log(getSum.mul(4, 5));

const express = require("express");
const app = express();
const path = require("path");
const port = 5000;

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    // Pass to next layer of middleware
    next();
});


app.get("/", (req, res) => {
    res.send("Hello !!! This is Root page");
})

app.get("/about", (req, res) => {
    res.send("This is about page");
})

app.get("/home", (req, res) => {
    res.send({ name: "anil", status: "coder" });
})

app.get("/sendHtmlFile", (req, res) => {
    // res.sendFile(path.join(__dirname + "/index.html"))
    // OR
    res.sendFile(__dirname + "/index.html")
})


app.listen(port, () => {
    console.log("server is running on port 5000... ")
});