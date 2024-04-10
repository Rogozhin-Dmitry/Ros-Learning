import * as Globals from "../main/globals.js";
import * as Tools from "./tools.js";

export function openSidebarMenu() {
	const selected_elem = Globals.getElem(Globals.field_elem_selected_class);
	if (selected_elem == undefined) return;
	const elem_data = Tools.saved_elements[selected_elem.getAttribute("l_id")];

	Globals.menu_title.innerText = elem_data.title;
	Globals.menu_type.innerText = `Type: ${elem_data.type}`;
	Globals.menu_gid_input.value = elem_data.g_id;
	Globals.menu_dx_input.value = Math.round(elem_data.dx * 10) / 10;
	Globals.menu_dy_input.value = Math.round(elem_data.dy * 10) / 10;
	Globals.menu_width_input.value = Math.round(elem_data.width * 10) / 10;
	Globals.menu_height_input.value = Math.round(elem_data.height * 10) / 10;
	Globals.menu_value_input.value = elem_data.value;

	Globals.sidebar_menu.classList.remove(Globals.sidebar_menu_hidden_class);
}

export function closeSidebarMenu() {
	Globals.sidebar_menu.classList.add(Globals.sidebar_menu_hidden_class);
}

for (let i = 0; i < Globals.menu_inputs.length; i++) {
	Globals.menu_inputs[i].addEventListener("change", () => {
		const _selected_elem = Globals.getElem(
			Globals.field_elem_selected_class
		);
		_selected_elem.setAttribute("value", Globals.menu_value_input.value);
		_selected_elem.setAttribute("g_id", Globals.menu_gid_input.value);
		_selected_elem.setAttribute("data-x", Globals.menu_dx_input.value);
		_selected_elem.setAttribute("data-y", Globals.menu_dy_input.value);
        _selected_elem.style.width = `${Globals.menu_width_input.value}px`;
        _selected_elem.style.height = `${Globals.menu_height_input.value}px`;
        _selected_elem.style.transform = 
            `translate(${Globals.menu_dx_input.value}px, ${Globals.menu_dy_input.value}px)`

        Tools.updateSavedElements()
	});
}

export function sidebarClear() {
    Tools.clearAllSelected(Globals.getAllElems(Globals.field_elem_selected_class))
    closeSidebarMenu()
}

Globals.menu_close_button.addEventListener("click", () => {
    sidebarClear()
})

Globals.menu_delete_button.addEventListener("click", () => {
    Tools.removeSelectedElements()
})


