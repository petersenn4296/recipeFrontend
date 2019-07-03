import M from "materialize-css/dist/js/materialize.min.js";
import EditRecipe from "./EditRecipe";

export function initialize(thing) {
    if(thing === '.modal') {
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {
              inDuration: 250,
              outDuration: 250,
              opacity: 0.5,
              dismissible: false,
              startingTop: "4%",
              endingTop: "10%"
            });
    } else if(thing === 'select') {
        var elems2 = document.querySelectorAll('select');
        M.FormSelect.init(elems2);
    } else if(thing === '.chips') {
        var elems4 = document.querySelectorAll('.chips');
        M.Chips.init(elems4, {
            onChipAdd: EditRecipe.handleTheIStuff,
            Limit: 10,
            minLength: 1,
        });
    }
}