import ApodController from "./components/apod/apod-controllers.js"



class App {
  constructor() {
    this.controllers = {
      apodController: new ApodController(),

    }
  }
}

// @ts-ignore
window.app = new App()