import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";


function _draw() {
    // What are we drawing
    let lists = ProxyState.lists
    let template = ''
    // if a collection itterate over collection to generate template for each object
    lists.forEach(list => {
        console.log(list)
        template += list.Template
    })
    // render to page
    document.getElementById('lists').innerHTML = template

    // TODO add ID# to the row where I want the lists/card to go. 
}



//Public
export default class ListsController {
    constructor() {
        // OH oh more magic. you still know.....
        // 1st argument is name of the property in the AppState to 'watch' for changes
        // 2nd argument: name of the function to run when 1st argument property changes
        ProxyState.on('lists', _draw);

        // manually run draw the on page load
        _draw()
    }


    createList() {
        // if this method is triggered by an event (submit event) prevent the default action of reloding the page
        window.event.preventDefault()
        // grab the element from html that triggered this event
        const form = window.event.target
        debugger
        let newList = {
            listName: form.listName.value,
            color: form.color.value,
            ///// NOTE color may need to be taken care of in a different way using color picker.
            taskName: form.taskName.value
        }
        listsService.createList(newList)

        // NOTE this resets the form 
        // form.reset()

        // NOTE this is for hiding the modal
        //     // get the modal and close (using jQuery's "$" selector) 
        //     $('#new-car-form').modal('hide')
        // }
        //NOTE this will bel used to close the list.
        // // 
        //     deleteCar(id) {
        //         carsService.deleteCar(id)
        //     }

        // bid(id) {
        //     carsService.bid(id)
        // }
    }
}
