import * as Globals from "../main/globals.js";
import * as Main from "../main/main.js"
import * as Elements from "./elements/elements.js";
import * as Sidebar from "./sidebarCore.js"

export let saved_elements = {};

export function createEmptyElementObject() {
	return {
		l_id: undefined,
		g_id: undefined,
		value: undefined,
		name: undefined,
		title: undefined,
		type: undefined,
		dx: undefined,
		dy: undefined,
		width: undefined,
		height: undefined,
	};
}

export function saveElements() {
    updateSavedElements()
    Sidebar.openSidebarMenu()
}

export function removeSelectedElements() {
	getSelectedElement().remove();
    Sidebar.closeSidebarMenu()
}

export function removeSelectedElementsByDeleteKey(e) {
	if (Main.isSwitchedToInterface()) {
		if (e.key == "Delete") removeSelectedElements();
	}
}

export function updateSelectionByMousedown(e) {
	if (Main.isSwitchedToInterface()) {
        if (e.target.classList.contains(Globals.field_class)) {
			clearSelectedElements();
            Sidebar.closeSidebarMenu()
		}
        else {
            if (e.target.classList.contains(Globals.field_elem_class)) {
                clearSelectedElements();
                setSelectedElement(e.target)
                Sidebar.openSidebarMenu()
            }
		} 
	}
}

export function updateSavedElements() {
	setSavedElementsObjects({});
	const elems = getElements();

	for (let i = 0; i < elems.length; i++) {
		const elem = elems[i];
		const elem_obj = createEmptyElementObject();

		elem.setAttribute("l_id", i);
		elem_obj.l_id = i;
		elem_obj.g_id = getElementGID(elem);
		elem_obj.value = getElementValue(elem);
		elem_obj.name = getElementName(elem);
		elem_obj.title = getElementTitle(elem);
		elem_obj.type = getElementType(elem);
		elem_obj.dx = getElementDX(elem);
		elem_obj.dy = getElementDY(elem);
		elem_obj.width = getElementWidth(elem);
		elem_obj.height = getElementHeight(elem);

		setSavedElementObject(i, elem_obj);
		updateElement(elem);
	}
	console.log(saved_elements);
}

export function updateElement(elem) {
	getElementObjectByName(getElementName(elem)).updater(
		elem,
		elem.getAttribute("value")
	);
}

export function getElementName(elem) {
	return elem.getAttribute("name");
}

export function getElementGID(elem) {
	return elem.getAttribute("g_id");
}

export function getElementLID(elem) {
	return elem.getAttribute("l_id");
}

export function getElementType(elem) {
	return elem.getAttribute("type");
}

export function getElementDX(elem) {
	return elem.getAttribute("data-x");
}

export function getElementDY(elem) {
	return elem.getAttribute("data-y");
}

export function getElementValue(elem) {
	return elem.getAttribute("value");
}

export function getElementWidth(elem) {
	return elem.offsetWidth;
}

export function getElementHeight(elem) {
	return elem.offsetHeight;
}

export function getElementTitle(elem) {
	return getElementObjectByName(elem.getAttribute("name")).title;
}

export function getElements() {
	return Globals.getAllElems(Globals.field_elem_class);
}

export function getSelectedElement() {
	return Globals.getElem(Globals.field_elem_selected_class);
}

export function setSavedElementsObjects(elems_objs) {
	saved_elements = elems_objs;
}

export function setSavedElementObject(l_id, elem_obj) {
	saved_elements[l_id] = elem_obj;
}

export function getSavedElementObject(l_id) {
	return saved_elements[l_id];
}

export function getElementObjectByName(name) {
	let e_ = {};
	Elements.elements.content.forEach((e) => {
		if (e.name == name) e_ = e;
	});
	return e_;
}

export function getElementsObjects() {
	return Elements.elements.content;
}

export function getSelectedElementLID() {
	return getElementLID(getSelectedElement());
}

export function getFirstElementStyle(elem) {
	let style = elem.style;
	style = style.split(".")[1];
	style = style.split("{")[0];
	return style;
}

export function clearSelectedElements() {
	const elems = getElements();
	for (let i = 0; i < elems.length; i++) {
		elems[i].classList.remove(Globals.field_elem_selected_class);
	}
}

export function setSelectedElement(elem) {
	elem.classList.add(Globals.field_elem_selected_class);
}
