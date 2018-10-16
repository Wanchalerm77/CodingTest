import mongoose from "mongoose"

const Schema = mongoose.Schema
const gradesSchema =  new Schema({
    id: Number,
    name: String,
    semester: String,
    grade: String,
    status: String,
    note: String,
    date: Date
})

const Grade = mongoose.model("Grade", gradesSchema)


export {
    Grade
}