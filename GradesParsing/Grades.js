import cheerio from "cheerio"
import request from "request"
import _ from "lodash"
import mongoose from "mongoose"
import {Grade} from "./GradesModel"
import {Study} from "./StudyModel"


const url = "https://uninow.de/exercise/list.html"
let aud = []
let logik = []
let appdev = []


request(url, {username: "uninow", password: "backend"},(error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html)
        
        const aud_data = $("#records tr:nth-child(3)").text().replace(/ /g, "")
        const logik_data = $("#records tr:nth-child(4)").text().replace(/ /g, "")
        const appdev_data = $("#records tr:nth-child(5)").text().replace(/ /g, "")
     
        let aud_data_arr = aud_data.split("\n")
        let logik_data_arr = logik_data.split("\n")
        let appdev_data_arr = appdev_data.split("\n")

        aud = _.without(aud_data_arr, "")
        logik = _.without(logik_data_arr, "")
        appdev = _.without(appdev_data, "")

    }   
})
// const createStudy = (arr) => {
//     const Study = new Study({
//         name: "Informatik (Bachelor)",
//         course: "Informatik",
//         degree: "Bachelor",
//         averagdeGrade: "1,5",
//         grades: arr
//     })
// }

// const createGrade = arr => {
//     const Grade = new Grade({
//         id: arr[0],
//         name: arr[1],
//         semester: arr[2],
//         grade: arr[3],
//         status: arr[4],
//         note: arr[5],
//         date: arr[6]
//     })

//     return Grade
// }

// const grade_arr = [createGrade(aud), createGrade(logik), createGrade(appdev)]

export {
//    createStudy
}