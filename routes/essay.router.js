"use strict"

const router = require("express").Router()

const essay = require("../controllers/essay.controller")

router.route("/")
    .get(essay.list)
    .post(essay.create)

router.route("/:id")
    .get(essay.read)
    .post(essay.update)
    .delete(essay.delete)

module.exports = router