import { BackgroundController } from "./Controllers/BackgroundController.js";
import { ClockController } from "./Controllers/ClockController.js";
import { QuoteController } from "./Controllers/QuoteController.js";
import { ToDosController } from "./Controllers/ToDosController.js";
import { WeatherController } from "./Controllers/WeatherController.js";


class App {
  toDosController = new ToDosController();
  backgroundController = new BackgroundController();
  quoteController = new QuoteController();
  weatherController = new WeatherController()
  clockController = new ClockController()
}

window["app"] = new App();
