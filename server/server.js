const express = require("express")
const app = express()
const PORT = 8080
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const router = require("./routes/routes.api")
app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`)
})
mongoose.connect(process.env.API_URL).then(() => {console.log("Database connected")}).catch(() => {console.log("Failed to connect database")})
app.use(express.json())
app.use(cors())
app.use("/api", router)