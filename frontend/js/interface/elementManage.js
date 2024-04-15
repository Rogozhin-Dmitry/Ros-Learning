import * as Main from "../main/main.js"
import * as Globals from "../main/globals.js"
import * as Sidebar from "./sidebarCore.js"
import * as ElementCore from "./elementCore.js"

export function saveElements() {
    ElementCore.updateSavedElements()
    Sidebar.openSidebarMenu()
}

export function removeSelectedElements() {
	ElementCore.getSelectedElement().remove();
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
			ElementCore.clearSelectedElements();
            Sidebar.closeSidebarMenu()
		}
        else {
            if (e.target.classList.contains(Globals.field_elem_class)) {
                ElementCore.clearSelectedElements();
                ElementCore.setSelectedElement(e.target)
                Sidebar.openSidebarMenu()
            }
		} 
	}
}


