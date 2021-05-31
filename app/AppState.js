import { Background } from "./Models/BackgroundModel.js"
import { Quote } from "./Models/QuoteModel.js"
import { ToDo } from "./Models/ToDOModel.js"
import { Weather } from "./Models/WeatherModel.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {ToDo[]} */
  toDos = []
  /** @type {Background} */
  background = null
  /** @type {Quote} */
  quote = null
  /** @type {Weather} */
  weather = null

  indicator = null

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
