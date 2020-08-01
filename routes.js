
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
        res.send("you requested user no: " + req.params.id)
    })

    /*
    app.get("/home", (req, res) => {
        res.send({ name: "anil", status: "coder" });
    })

    app.get("/sendHtmlFile", (req, res) => {
        // res.sendFile(path.join(__dirname + "/index.html"))
        // OR
        res.sendFile(__dirname + "/index.html")
    })
    */
}

