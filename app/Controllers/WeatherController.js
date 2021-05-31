import { weatherService } from "../Services/WeatherService.js"
import { sandBoxService } from "../Services/SandBoxService.js"
import { ProxyState } from "../AppState.js"



function _drawWeather() {
    document.getElementById('weather').innerHTML = ProxyState.weather.weatherTemplate
}


export class WeatherController {
    constructor() {
        sandBoxService.getWeather()
        ProxyState.on('weather', _drawWeather)
        ProxyState.on('weather', this.getTemp)
    }
    getTemp() {
        if (ProxyState.indicator == null) {
            ProxyState.indicator = "°C"
        }
        weatherService.toggleUnit(ProxyState.indicator)
    }
}
