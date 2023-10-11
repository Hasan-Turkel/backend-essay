"use strict"

const mongoose = require("mongoose")

const TopicSchema = new mongoose.Schema({

    name: {
        type:String,
        trim: true,
        required: true,
        unique: true
    }
}, {collection: "topics", timestamps:true})

module.exports = mongoose.model("Topic", TopicSchema)