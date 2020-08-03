const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { mongourl } = require("./config/keys")
const Wish = require("./models/wish")

mongoose.connect(mongourl)

var data = {
    name: "anil", status: "coder"
}

module.exports = (app) => {

    app.get("/", (req, res) => {
        //res.send("Hello !!! This is Root page");
        res.render("home", { data: data })
    })

    app.get("/about", (req, res) => {
        res.send("This is about page");
    })

    app.get("/profile/:id", (req, res) => {
        res.render("you requested user no: " + req.params.id)
    })


    app.get("/fetchData", (req, res) => {
        res.send({ name: "anil", status: "coder", address: "India" });
    })

    app.post("/send-to-backend", (req, res) => {
        console.log("data being send to backend is: ");
        console.log(req.body);
        res.send(JSON.stringify(req.body))
    })

    app.post("/sent", (req, res) => {
        const item = "fukcoff";
        const Item = new Wish({
            wish: req.body.item
        });
        Item.save().then(data => {
            console.log("saved")
        })
        // data.push(req.body);
        // res.send(data);
        // console.log(data)
    })

    /*

    app.get("/sendHtmlFile", (req, res) => {
        // res.sendFile(path.join(__dirname + "/index.html"))
        // OR
        res.sendFile(__dirname + "/index.html")
    })
    */
}

