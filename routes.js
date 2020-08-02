
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


    app.get("/fetchData", (req, res) => {
        res.send({ name: "anil", status: "coder", address: "India" });
    })

    app.post("/send-to-backend", (req, res) => {
        console.log("data being send to backend is: ");
        console.log(req.body);
        res.send(JSON.stringify(req.body))
    })

    /*

    app.get("/sendHtmlFile", (req, res) => {
        // res.sendFile(path.join(__dirname + "/index.html"))
        // OR
        res.sendFile(__dirname + "/index.html")
    })
    */
}

