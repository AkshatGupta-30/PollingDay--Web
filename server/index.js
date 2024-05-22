const express = require("express")
const bodyParser = require('body-parser')
const db = require("./src/database/connection")
const partyRouter = require("./src/routes/Party")
const symbolRouter = require("./src/routes/Symbol")

const app = express()
app.use(bodyParser.json())
app.use("/party", partyRouter)
app.use("/symbols", symbolRouter) //TODO: Admin Control

const port = process.env.port || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})