import express, { Express, Request, Response } from "express"
import secretData from "../secret-data/data.json"
const cors = require("cors");
const morgan = require("morgan")

const app = express()
const port = 5000

app.use(cors())
app.use(morgan("combined"))

app.get("/", (req, res) => {
    res.json(secretData)
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`)
})