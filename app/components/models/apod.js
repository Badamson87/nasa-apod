export default class Apod {
  constructor(data) {
    this.date = data.date;
    this.explanation = data.explanation;
    this.title = data.title
    this.url = data.url

  }
  getApodHTML() {
    return `
      <div class="apodInfo">
        <div class="row">
          <div class="col">
            <h1>${this.title}</h1>
            <h3>${this.date}</h3>
            <img src="${this.url}">
            <p>${this.explanation}</p>
            </div>
          </div>
        </div>
    `
  }

}

