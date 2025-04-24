const express = require("express")

const app = express()

const user_routes = require("./routes/user.routes")

app.use(express.json())

app.use("/api", [user_routes])

module.exports = app