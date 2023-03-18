const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.SERVER_PORT || 3000

app.use(
    cors({
        origin: true,
        credentials: true,
    })
)
app.use(express.json())

app.get("/health", (req, res) => {
    res.json({
        response: "OK",
    })
})

app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})
