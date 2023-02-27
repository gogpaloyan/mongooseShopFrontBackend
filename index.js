import express from "express"
import mongoose from "mongoose"
//import { router } from "./routes/userRoutes.js"
import cors from "cors"
import { Users } from "./models/Users.js"

const app = express()
app.use(express.json())
// app.use(router)

const port = 3000
const url = "mongodb+srv://grigor:grigor@atlascluster.krrtnsa.mongodb.net/example?retryWrites=true&w=majority"


app.use(cors())
mongoose
    .connect(url)
    .then(() => console.log("MongoDb conected"))
    .catch((err) => console.log(err))


app.get("/users", (req, res) => {
    console.log("get")
    return Users
        .find()
        .then((users) => res.json(users))
        .catch((err) => console.log(err))
})

app.post("/user", (req, res) => {
    console.log("post")
    console.log(req.body)
    const user = new Users(req.body)
    user
        .save()
        .then(() => console.log("successful"))
        .catch((err) => console.log(err))
})

app.delete("/user/:id", (req, res) => {
    console.log("deleted")
    Users.findByIdAndDelete(req.params.id)
        .then(() => console.log("successful"))
        .catch((err) => console.log(err))
})

app.get("/user/:id", (req, res) => {
    Users.findOne({ name: req.params.id })
        .then((d) => res.json(d))
        .catch((err) => console.log(err))
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("App listening in " + port)
})