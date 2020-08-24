const express = require("express")

const PORT = process.env.PORT || 8080
const HOST = "0.0.0.0"

const app = express()

app.get("/", (req, res) => {
  res.send("Eu sou Full Cycle")
})

app.listen(PORT, HOST)
