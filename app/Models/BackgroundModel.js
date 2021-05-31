

export class Background {
    constructor(data) {
        this.url = data.url
        this.copyright = data.copyright
        this.site = data.site
    }

    get imageDetailsTemplate() {
        return `
        <p class="text-light m-0 p-0" title="site/ copyright">${this.site}/${this.copyright}</p>`
    }
}