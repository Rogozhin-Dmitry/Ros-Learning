import * as Globals from "../main/globals.js";
import * as ElementCore from "./elementCore.js";
import * as ElementManage from "./elementManage.js";


// setting up toolbar
export function setupToolbar() {
	for (let i = 0; i < Globals.sidebar_items.length; i++) {
        const item = Globals.sidebar_items[i];
		item.addEventListener("mousedown", function () {
            const elem = ElementCore.getElementObjectByName(this.firstElementChild.innerText);
            const _elem = document.createElement("div");
            _elem.innerHTML = elem.content;
            _elem.firstElementChild.classList.add(Globals.field_elem_class);
            _elem.firstElementChild.setAttribute("value", elem.init_value);
            _elem.firstElementChild.setAttribute("l_id", "");
            _elem.firstElementChild.setAttribute("g_id", "none");
            _elem.firstElementChild.setAttribute("name", elem.name);
            _elem.firstElementChild.setAttribute("type", elem.type);
            _elem.firstElementChild.setAttribute("data-x", 0);
            _elem.firstElementChild.setAttribute("data-y", 0);
            Globals.interface_field.innerHTML += _elem.innerHTML;
			ElementCore.updateSavedElements();
		});
	}
}

// setting up sidebar menu
export function setupSidebarMenu() {
	for (let i = 0; i < Globals.menu_inputs.length; i++) {
		Globals.menu_inputs[i].addEventListener("change", () => {
			const _selected_elem = Globals.getElem(Globals.field_elem_selected_class);
            const _elem_name = _selected_elem.getAttribute("name")
			let _elem_val = Globals.menu_value_input.value;
            _elem_val = ElementCore.getElementObjectByName(_elem_name).validator(_elem_val)

			_selected_elem.setAttribute("value", _elem_val);
			_selected_elem.setAttribute("g_id", Globals.menu_gid_input.value);
			_selected_elem.setAttribute("data-x", Globals.menu_dx_input.value);
			_selected_elem.setAttribute("data-y", Globals.menu_dy_input.value);
			_selected_elem.style.width = `${Globals.menu_width_input.value}px`;
			_selected_elem.style.height = `${Globals.menu_height_input.value}px`;
			_selected_elem.style.transform = 
                `translate(${Globals.menu_dx_input.value}px, ${Globals.menu_dy_input.value}px)`;
			updateSavedElements();
		});
	}
}

export function openSidebarMenu() {
    const l_id = ElementCore.getSelectedElementLID()
    const elem_data = ElementCore.getSavedElementObject(l_id) 

	Globals.menu_title.innerText = elem_data.title;
	Globals.menu_type.innerText = elem_data.type;
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

export function sidebarClear() {
    ElementCore.clearSelectedElements()
    closeSidebarMenu()
}

export function setSidebarListeners() {
    Globals.menu_close_button.addEventListener("click", () => {
        sidebarClear()
    })

    Globals.menu_delete_button.addEventListener("click", () => {
        ElementManage.removeSelectedElements()
    })
}


