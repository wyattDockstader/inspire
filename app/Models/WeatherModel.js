



export class Weather {
    constructor(data) {
        this.name = data.name
        this.weather = data.weather[0].description
        this.icon = data.weather[0].icon
        this.temp = data.main.temp
        this.tempHigh = data.main.temp_max
        this.tempLow = data.main.temp_min
    }

    get weatherTemplate() {
        return `
        
        <div class="container bg-dark text-light rounded m-2 p-1">
            <h4 class="row d-flex justify-content-center">${this.name}</h4>
            <div class="row d-flex justify-content-center">
                <img src="http://openweathermap.org/img/wn/${this.icon}@2x.png" alt="img icon" style="height: 50px;">
                <div class="d-flex align-items-center"id="temp" onclick="app.weatherController.getTemp()">Weather</div>
            </div>
        </div>
        `
    }
}