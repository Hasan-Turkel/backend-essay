"use strict"

const mongoose = require("mongoose")

const EssaySchema = new mongoose.Schema({

    topicId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Topic",
        required:true
    },
    title: {
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },

}, {collection:"essays", timestamps:true})

module.exports = mongoose.model("Essay", EssaySchema)