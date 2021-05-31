export class Quote {
    constructor(data) {
        this.content = data.content
        this.author = data.author
    }

    get quoteTemplate() {
        return `
        <div title="${this.author}">"${this.content}"</div>
        `

    }
}