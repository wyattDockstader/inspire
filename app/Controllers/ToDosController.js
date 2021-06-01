import { ProxyState } from "../AppState.js";
import { sandBoxService } from "../Services/SandBoxService.js"



function _drawToDo() {
    let template = ''
    let toDos = ProxyState.toDos
    let toDoCount = toDos.length
    let toDoDone = toDos.filter(td => td.completed == "").length

    toDos.forEach(toDo => {
        let checked = toDo.completed ? "checked" : ""
        template += /*html*/`
        <div class="col-12 mb-2">
            <div class="form-check-inline row">
                <input class="form-check-input" type="checkbox" value="" onchange="app.toDosController.completedUpdate('${toDo.id}')"${checked}>
                <label class="form-check-label" for="defaultCheck1"><h5 class="mb-0">${toDo.description}</h5></label>
                <div class="mdi mdi-trash-can-outline col-2 text-light p-0" onclick="app.toDosController.deleteToDo('${toDo.id}')">
                </div>
            </div>
        </div>
        `
    })
    document.getElementById('to-dos').innerHTML = template

    let headerTemplate = ""
    headerTemplate = `
    <div>
    <h3>To Do List</h3>
    <p>${toDoDone}/${toDoCount}</p>
    </div>`
    document.getElementById('list-header').innerHTML = headerTemplate
}



export class ToDosController {
    constructor() {
        ProxyState.on('toDos', _drawToDo)
        sandBoxService.getToDos()

    }
    createToDo(event) {
        event.preventDefault()
        console.log("created a to do!")
        let form = event.target
        let newToDo = {
            description: form.toDo.value
        }
        sandBoxService.addToDo(newToDo)
        form.reset()
    }
    deleteToDo(toDoId) {
        console.log("deleted a to do!")
        sandBoxService.deleteToDo(toDoId)
    }
    completedUpdate(toDoId) {
        sandBoxService.completedUpdate(toDoId)
    }
}