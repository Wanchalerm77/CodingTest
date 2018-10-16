import mongoose from "mongoose"



const studySchema = mongoose.Schema({
    name: String,
    course: String,
    degree:  String,
    averageGrade: String,
    grades: []

})

const Study = mongoose.model("Study", studySchema)


export {
    Study
}