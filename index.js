"use strict"

const express = require("express")
const app = express()

require("dotenv").config()

const PORT = process.env.PORT || 8000

require("express-async-errors")

const dbConnection = require("./config/dbConnection")

dbConnection()

app.use(express.json())

app.all("/", (req, res) => {

    res.send({
        error: false,
        message: "essay",

    })
})

app.use("/topics", require("./routes/topic.router"))

app.use(require("./middlewares/errorhandler"))

app.listen(PORT, ()=>console.log('http://127.0.0.1:' + PORT))