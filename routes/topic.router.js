"use strict"

const router = require("express").Router()

const topic = require("../controllers/topic.controller")

router.route("/")
    .get(topic.list)
    .post(topic.create)

router.route("/:id")
    .get(topic.read)
    .post(topic.update)
    .delete(topic.delete)

module.exports = router