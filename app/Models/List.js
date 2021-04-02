import { generateId } from "../Utils/GenerateId.js"

// NOTE creating defaults placeholders for LIST keys.
export default class List {
    constructor(listName, color, taskName) {
        this.id = generateId()
        this.listName = listName
        this.color = color
        this.taskName = taskName
    }

    // TODO Templates?

    // NOTE 'get' signifies a FAKE property
    // GETters MUST return a value

    // get Template() {

    //     return /*html*/`
    //     <div class="card p-2 value">
    //         ${this.title}
    //     </div>
    //     `
    // }
}
