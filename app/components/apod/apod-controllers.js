import ApodService from "./apod-services.js";

let _apodService = new ApodService()

export default class ApodController {
  constructor() {
    console.log("apod controller here")
  }
}