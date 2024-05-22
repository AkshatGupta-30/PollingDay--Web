const mongoose = require("mongoose")

mongoose.connect(
    "mongodb://localhost:27017/PollingDay"
).then(() => {
    console.log("MongoDB server connected successfully")
}).catch((err) => {
    console.log(`Error in connecting MongoDB server : ${err}`)
})

const db = mongoose.connection
module.exports = db