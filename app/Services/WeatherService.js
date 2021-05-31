import { ProxyState } from "../AppState.js"
class WeatherService {
    tempValueF(indicator) {
        let currentTemp = ProxyState.weather.temp
        let TempF = Math.floor((currentTemp - 273.15) * 1.8) + 32
        document.getElementById('temp').innerText = (TempF + indicator)
    }
    tempValueC(indicator) {
        let currentTemp = ProxyState.weather.temp
        let TempC = Math.floor(currentTemp - 273.15)
        document.getElementById('temp').innerText = (TempC + indicator)
    }
    toggleUnit(indicator) {
        if (indicator == "°C") {
            ProxyState.indicator = "°F"
            this.tempValueF(ProxyState.indicator)
        } else {
            ProxyState.indicator = "°C"
            this.tempValueC(ProxyState.indicator)
        }
    }
}
export const weatherService = new WeatherService()