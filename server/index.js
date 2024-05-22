const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require("./src/database/connection")
const partyRouter = require("./src/routes/Party")
const symbolRouter = require("./src/routes/Symbol")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use("/parties", partyRouter)
app.use("/symbols", symbolRouter) //TODO: Admin Control

const port = process.env.port || 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})