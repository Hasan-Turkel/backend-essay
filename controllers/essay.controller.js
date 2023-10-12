"use strict"

const Essay = require("../models/essay.model")

module.exports = {
    /*list: async (req, res) => {
        const data = await Essay.find().populate("topicId")
        res.status(200).send({
            error:false,
            data
        })
    },*/

    list: async (req, res)=>{

        const data = await req.getModelList(Essay, "topicId")
        res.status(200).send({
            error:false,
            details: await req.getModelListDetails(Essay),
            data
        })
    },



    listTopicEssay: async (req, res)=>{

        const data = await Essay.find({topicId:req.params.topicId})
        res.status(200).send({
            error:false,
            result:data
        })

    },

    create: async (req, res) =>{

        const data = await Essay.create(req.body)
        res.status(201).send({
            error: false,
            data
        })

    },
    read: async (req, res) =>{

        const data = await Essay.findOne({_id:req.params.id}).populate("topicId")
        res.status(200).send({
            error:false,
            data
        })

    },
    update: async (req, res) =>{

        const data = await Essay.updateOne({_id:req.params.id}, req.body)
        res.status(202).send({
            error: false,
            data,
            newData: await Essay.findOne({_id:req.params.id})
        })
    },
    delete: async (req, res) =>{ 

        const data = await Essay.deleteOne({_id:req.params.id})
        res.status(204).send({
            error: false,
            data
        })

    },
}