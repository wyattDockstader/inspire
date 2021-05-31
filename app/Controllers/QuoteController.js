import { sandBoxService } from "../Services/SandBoxService.js"
import { ProxyState } from "../AppState.js"



function _drawQuote() {
    document.getElementById('quote').innerHTML = ProxyState.quote.quoteTemplate
}


export class QuoteController {
    constructor() {
        sandBoxService.getQuote()
        ProxyState.on('quote', _drawQuote)


    }

}