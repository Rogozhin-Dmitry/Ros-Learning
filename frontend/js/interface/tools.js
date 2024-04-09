import * as Main from "../main/main.js";
import * as Globals from "../main/globals.js"

export function getElemByName(name, elems) {
	let e_ = {};
	elems.forEach((e) => { if (e.name == name) e_ = e; });
	return e_;
}

export function removeSelectedElements() {
    const selected_elems = Globals.getAllElems(Globals.field_elem_selected_class)
    for (let i = 0; i < selected_elems.length; i++) {
        selected_elems[i].remove()
    }
}

export function removeSelectedElementsByDeleteKey(e) {
    if (Main.isSwitchedToInterface()) {
        if (e.key == "Delete") removeSelectedElements()
    }
}

export function updateSelectionByMousedown(e) {
    if (Main.isSwitchedToInterface()) {
        const draggables = Globals.getAllElems(Globals.field_elem_class);
        if (e.target.classList.contains(Globals.field_elem_class)) {
            clearAllSelected(draggables)
            e.target.classList.add(Globals.field_elem_selected_class)
        } else {
            clearAllSelected(draggables)
        }
    }
}

export function getFirstElementStyle(elem) {
    let style = elem.style
    style = style.split(".")[1];
    style = style.split("{")[0];
    return style
}

function clearAllSelected(draggables) {
    for (let i = 0; i < draggables.length; i++) {
        draggables[i].classList.remove(Globals.field_elem_selected_class)
    }
}
