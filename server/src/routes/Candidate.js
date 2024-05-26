const express = require('express')
const Candidate = require('../models/candidate')
const router = express.Router()

router.post("/register", async (req, res)=> {
    try {
        const data = req.body
        const newCandidate = new Candidate(data)
        const savedCandidate = await newCandidate.save()
        res.status(200).json(savedCandidate)
        console.log(`Entry of '${savedCandidate.name}' saved successfully`)
    } catch (err) {
        console.log(`Error in Saving Candidate : ${err}`)
        res.status(500).json({error: err})
    }
})

router.get("/list", async (req, res) => {
    try {
        const response = await Candidate.find()
        res.status(200).json(response);
    } catch (err) {
        console.log("error: " + err);
        res.status(500).json({ error: err.toString() });
    }
})

module.exports = router