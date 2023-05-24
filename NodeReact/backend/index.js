const express = require("express");
const timeOBJ = require("./getCurrentTime")

const port = 3001;

const app = express();

app.get('/example', (req, res) => {
    if(req) {
        console.log("Requested!");
    }
    res.json(timeOBJ.getTime())
})

app.listen(port, () => {
    console.log("Server on " + port);
})