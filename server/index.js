const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require("./src/database/connection")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(require("./src/routes/MainRoutes"))

const port = process.env.port || 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})