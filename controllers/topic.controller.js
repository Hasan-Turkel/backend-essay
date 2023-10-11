"use strict"

const Topic = require("../models/topic.model")

module.exports = {

    list : async (req, res) => {
        
        const data = await Topic.find()

        res.status(200).send({
            error: false,
            data
        })
    },

    create: async (req, res) =>{

        const data = await Topic.create(req.body)
        res.status(201).send({
            error: false,
            data
        })

    },
    read: async (req, res) =>{

        const data = await Topic.findOne({_id:req.params.id})
        res.status(200).send({
            error:false,
            data
        })

    },
    update: async (req, res) =>{

        const data = await Topic.updateOne({_id:req.params.id}, req.body)
        res.status(202).send({
            error: false,
            data,
            newData: await Topic.findOne({_id:req.params.id})
        })
    },
    delete: async (req, res) =>{ 

        const data = await Topic.deleteOne({_id:req.params.id})
        res.status(204).send({
            error: false,
            data
        })

    },
}