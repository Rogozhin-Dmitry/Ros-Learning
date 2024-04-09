import * as Main from "../main/main.js";
import * as Globals from "../main/globals.js";

export let saved_elements = []

export function updateSavedElements() {
	const _saved_elements = [];
	const elements = Globals.getAllElems(Globals.field_elem_class);
	for (let i = 0; i < elements.length; i++) {
		const element = elements[i];
		const element_obj = {};
        element.setAttribute("l_id", i)
        element_obj["g_id"] = element.getAttribute("g_id")
        element_obj["name"] = element.getAttribute("name")
        element_obj["type"] = element.getAttribute("type")
        element_obj["dx"] = element.getAttribute("data-x")
        element_obj["dy"] = element.getAttribute("data-y")
        element_obj["width"] = element.offsetWidth
        element_obj["height"] = element.offsetHeight
        _saved_elements[i] = element_obj
	}
    saved_elements = _saved_elements
    // console.log(saved_elements)
}

export function getElemByName(name, elems) {
	let e_ = {};
	elems.forEach((e) => {
		if (e.name == name) e_ = e;
	});
	return e_;
}

export function removeSelectedElements() {
	const selected_elems = Globals.getAllElems(
		Globals.field_elem_selected_class
	);
	for (let i = 0; i < selected_elems.length; i++) {
		selected_elems[i].remove();
	}
}

export function removeSelectedElementsByDeleteKey(e) {
	if (Main.isSwitchedToInterface()) {
		if (e.key == "Delete") removeSelectedElements();
	}
}

export function updateSelectionByMousedown(e) {
	if (Main.isSwitchedToInterface()) {
		const draggables = Globals.getAllElems(Globals.field_elem_class);
		if (e.target.classList.contains(Globals.field_elem_class)) {
			clearAllSelected(draggables);
			e.target.classList.add(Globals.field_elem_selected_class);
		} else {
			clearAllSelected(draggables);
		}
	}
}

export function getFirstElementStyle(elem) {
	let style = elem.style;
	style = style.split(".")[1];
	style = style.split("{")[0];
	return style;
}

function clearAllSelected(draggables) {
	for (let i = 0; i < draggables.length; i++) {
		draggables[i].classList.remove(Globals.field_elem_selected_class);
	}
}
