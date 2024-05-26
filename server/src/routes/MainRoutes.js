const express = require("express")
const router = express.Router()

router.get("/" , (req, res) => {
    res.send("Welcome to Polling Day")
})

//* Parties Route
router.use("/parties", require("./Party"))

//* Candidates Route
router.use("/candidates", require("./Candidate"))

//* Symbols Route
router.use("/symbols", require("./Symbol")) //TODO: Admin Control

//* Authentication Route
router.use("/auth", require("./Auth"))

module.exports = router;