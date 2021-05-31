import { Background } from "../Models/BackgroundModel.js"
import { ProxyState } from "../AppState.js"
import { Weather } from "../Models/WeatherModel.js"
import { Quote } from "../Models/QuoteModel.js"
import { ToDo } from "../Models/ToDoModel.js"


const sandBoxApi = axios.create({
    baseURL: "https://bcw-sandbox.herokuapp.com/api/"
})

class SandBoxService {

    async addToDo(newToDo) {
        try {
            let res = await sandBoxApi.post('Wyatt/todos', newToDo)
            ProxyState.toDos = [...ProxyState.toDos, new ToDo(res.data)]
            console.log("sand box data", ProxyState.toDos)

        } catch (error) {
            console.log(error)
        }

    }

    async getToDos() {
        let res = await sandBoxApi.get('Wyatt/todos')
        ProxyState.toDos = res.data.map(td => new ToDo(td))
    }

    async deleteToDo(toDoId) {
        await sandBoxApi.delete('Wyatt/todos/' + toDoId)
        ProxyState.toDos = ProxyState.toDos.filter(td => td.id != toDoId)
    }
    async completedUpdate(toDoId) {
        let index = ProxyState.toDos.findIndex(td => td.id == toDoId)
        let toDo = ProxyState.toDos[index]
        toDo.completed = !toDo.completed
        let res = await sandBoxApi.put('Wyatt/todos/' + toDoId, toDo)
        this.getToDos()

    }
    async getBackgroundImg() {
        let res = await sandBoxApi.get('images')
        ProxyState.background = new Background(res.data)
        ProxyState.background = ProxyState.background
    }
    async getQuote() {
        let res = await sandBoxApi.get('quotes')
        ProxyState.quote = new Quote(res.data)
        ProxyState.quote = ProxyState.quote
    }
    async getWeather() {
        let res = await sandBoxApi.get('weather')
        ProxyState.weather = new Weather(res.data)
    }

}
export const sandBoxService = new SandBoxService()

