import ApodService from "./apod-services.js";

let _apodService = new ApodService()

function drawApod(DATA) {

  let template = ""

  template += DATA.getApodHTML()

  document.getElementById("app").innerHTML = template
}

export default class ApodController {
  constructor() {
    console.log("apod controller here")

    //call service to get apod pass the draw function

    _apodService.getApodHTML(drawApod)
    // drawApod()
  }

  //getApodDate(event)
}