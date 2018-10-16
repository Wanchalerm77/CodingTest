import {mongoDB_setup,User} from "./Database/MongoDB"
import {redis_setup} from "./Database/Redis"
import express from "express"
import bodyParser from "body-parser"
import {verifyToken} from "./Security/Verification"
import jwt from "jsonwebtoken"
import responseTime from "response-time"
import mongoose from "mongoose"
import moment from "moment"
// import {createStudy} from "./GradesParsing/Grades"

const app = express()



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(responseTime())

const user = {
    name: "Non",
    age: 21
}

app.get("/session/create", (req, res) => {
    const newUser = new User({
        userid: new mongoose.Types.ObjectId(),
        loginTime: moment().format()
    })
    newUser.save()
        .then(res => console.log(res))
        .catch(err => console.error(err))

    res.send("creating user")
})

app.get("/session/create/:userid", (req, res) => {
    jwt.sign({
        user
    }, "secret", {
        expiresIn: "60s"
    }, (err, token) => res.json({
        token,
        userid: req.params.userid
    }))

})



app.post("/grades/fetch", verifyToken, (req, res) => {
    jwt.verify(req.token, "secret", (err, data) => {
        if (err) {
            console.error(err)
        } else {
            res.json({
                message: "Post",
                data
            })
        }
    })
})






//server nach datenbanken
const start = async () => {
    await mongoDB_setup()
    await redis_setup()
    await app.listen(8080, () => console.log("Server started"))
}
start()

