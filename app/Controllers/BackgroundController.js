import { sandBoxService } from "../Services/SandBoxService.js"
import { ProxyState } from "../AppState.js"



function _drawBackground() {
    let background = ProxyState.background
    document.getElementById("body").style.backgroundImage = `url(${background.url})`

}
function _drawImageDetails() {
    document.getElementById('image-info').innerHTML = ProxyState.background.imageDetailsTemplate
}


export class BackgroundController {
    constructor() {
        sandBoxService.getBackgroundImg()
        ProxyState.on('background', _drawBackground)
        ProxyState.on('background', _drawImageDetails)


    }

}