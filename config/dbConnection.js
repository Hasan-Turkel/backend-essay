"use strict"

const mongoose = require("mongoose")

const dbConnection = function () {

    mongoose.connect("mongodb://127.0.0.1:27017/essay")
    .then(() => console.log('* DB Connected * '))
    .catch(() => console.log("DB not Connected"))
}

module.exports = dbConnection