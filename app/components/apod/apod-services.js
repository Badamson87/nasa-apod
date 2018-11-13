import Apod from "../models/apod.js"

let _apodAPI = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=8rBCbSnmG9OD7uhtGC3qKkBq1HzbqoVof3DSvUHv&date=2018-11-12'
})


let apod = {}

export default class ApodService {
  constructor() {
    console.log("apod service is here")
  }

  getApodHTML(draw) {
    _apodAPI.get('')
      .then(res => {
        apod = new Apod(res.data)
        console.log(apod)
        draw(apod)
      })
  }
  //get apod(draw, date)
  //get data
  //format to Apod Class
  //envoke draw
}