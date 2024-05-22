const express = require('express')
const Symbol = require('../models/symbol')
const router = express.Router()

router.post("/add", async (req, res)=> {
    try {
        const data = req.body;
        const newSymbols = [];
        for (const symbol of data) {
            const newSymbol = new Candidate(symbol);
            newSymbols.push(newSymbol);
        }
        const response = await Symbol.insertMany(newSymbols);
        console.log(newSymbols.length + " Data Saved");
        res.status(200).json({ response: response });
    } catch (err) {
        console.log(`Error in Saving Symbols : ${err}`)
        res.status(500).json({error: err})
    }
})

router.get("/", async (req, res) => {
    try {
        const response = await Symbol.find()
        res.status(200).json({ response: response });
    } catch (err) {
        console.log("error: " + err);
        res.status(500).json({ error: err.toString() });
    }
})

module.exports = router