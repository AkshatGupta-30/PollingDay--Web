const express = require('express')
const Party = require('../models/party')
const router = express.Router()

router.post("/registration", async (req, res)=> {
    try {
        const data = req.body
        const newParty = new Party(data)
        const savedParty = await newParty.save()
        res.status(200).json(savedParty)
        console.log(`Entry of '${savedParty.name}' saved successfully`)
    } catch (err) {
        console.log(`Error in Saving Party : ${err}`)
        res.status(500).json({error: err})
    }
})

router.get("/list", async (req, res) => {
    try {
        const response = await Party.find()
        res.status(200).json(response);
    } catch (err) {
        console.log("error: " + err);
        res.status(500).json({ error: err.toString() });
    }
})

module.exports = router