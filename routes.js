const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { mongourl } = require("./config/keys")
const Wish = require("./models/wish")
const path = require("path");

mongoose.connect(mongourl)

var data = {
    name: "anil kumar",
    status: "programmer",
    state: "Bokaro Steel City (Jharkhand)"
}

var todos = ["code", "eat", "sleep"];

module.exports = (app) => {

    // serving static files
    app.use(express.static("public"))


    app.get("/", (req, res) => {
        res.render("home", { data: data })
    })

    app.get("/work", (req, res) => {
        //res.send("This is work page");
        res.render("work", { todos: todos })
    })

    app.get("/about", (req, res) => {
        res.render("about", { data: data })
    })

    app.get("/profile/:id", (req, res) => {
        data = {
            name: req.params.id
        }
        //res.send("you requested user no: " + req.params.id)
        res.render("home", { data: data })
    })


    app.get("/fetchData", (req, res) => {
        res.send({ name: "anil", status: "coder", address: "India" });
    })

    app.post("/send-to-backend", (req, res) => {
        console.log("data being send from backend to frontend is: ");
        console.log(req.body);
        res.send(JSON.stringify(req.body))
    })

    app.post('/sent-form-data', (req, res) => {
        console.log(req.body)
        res.send(JSON.stringify(req.body))
    });

    app.delete("/remove/:id", (req, res) => {
        todos = todos.map(item => {
            if (item !== req.params.id) {
                return item
            }
        })
        console.log(req.params.id);
        res.send(todos);
    });

    app.post("/send", (req, res) => {
        console.log(req.body);
        todos.push(req.body.item);
        res.send(todos);

        // const item = "fukcoff";
        // const Item = new Wish({
        //     wish: req.body.item
        // });
        // Item.save().then(data => {
        //     console.log("saved")
        // })
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
