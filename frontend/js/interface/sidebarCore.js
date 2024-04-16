import * as Globals from "../main/globals.js";
import * as ElementCore from "./elementCore.js";

export function setupToolbarItems() {
	const elems = ElementCore.getElementsObjects();

	for (let i = 0; i < elems.length; i++) {
		const elem = elems[i];
		const elem_class = ElementCore.getFirstElementStyle(elem);
		Globals.sidebar_elements.innerHTML += `
        <div class="sidebar__item">
            <div class="item__name" style="display: none">${elem.name}</div>
            <div class="item__icon ${elem_class}"></div>
            <div class="item__text">${elem.title}</div>
        </div>
    `;
	}

	for (let i = 0; i < Globals.sidebar_items.length; i++) {
		const item = Globals.sidebar_items[i];
		const item_inner = item.firstElementChild.innerHTML;
		const elem = ElementCore.getElementObjectByName(item_inner);
		Globals.body.innerHTML += elem.style;
	}
}

export function setupToolbar() {
	for (let i = 0; i < Globals.sidebar_items.length; i++) {
		const item = Globals.sidebar_items[i];
		item.addEventListener("mousedown", function () {
			const item_inner = this.firstElementChild.innerHTML;
			const elem_obj = ElementCore.getElementObjectByName(item_inner);
			const elem = document.createElement("div");
			elem.innerHTML = elem_obj.content;
			elem.firstElementChild.classList.add(Globals.field_elem_class);
			elem.firstElementChild.setAttribute("value", elem_obj.init_value);
			elem.firstElementChild.setAttribute("l_id", "");
			elem.firstElementChild.setAttribute("g_id", "none");
			elem.firstElementChild.setAttribute("name", elem_obj.name);
			elem.firstElementChild.setAttribute("type", elem_obj.type);
			elem.firstElementChild.setAttribute("data-x", 0);
			elem.firstElementChild.setAttribute("data-y", 0);
			Globals.interface_field.innerHTML += elem.innerHTML;
			ElementCore.updateSavedElements();
		});
	}
}

export function setupSidebarMenu() {
	for (let i = 0; i < Globals.menu_inputs.length; i++) {
		Globals.menu_inputs[i].addEventListener("change", () => {
			const sel_elem = Globals.getElem(Globals.field_elem_selected_class);
			const sel_elem_name = sel_elem.getAttribute("name");
			const elem_val = Globals.menu_value_input.value;
			const elem_obj = ElementCore.getElementObjectByName(sel_elem_name);
			const elem_valid_val = elem_obj.validator(elem_val);

			sel_elem.setAttribute("value", elem_valid_val);
			sel_elem.setAttribute("g_id", Globals.menu_gid_input.value);
			sel_elem.setAttribute("data-x", Globals.menu_dx_input.value);
			sel_elem.setAttribute("data-y", Globals.menu_dy_input.value);
			sel_elem.style.width = `${Globals.menu_width_input.value}px`;
			sel_elem.style.height = `${Globals.menu_height_input.value}px`;
			sel_elem.style.transform = `translate(${Globals.menu_dx_input.value}px, ${Globals.menu_dy_input.value}px)`;
			ElementCore.saveElements();
		});
	}
}

export function openSidebarMenu() {
	const l_id = ElementCore.getSelectedElementLID();
	const elem_data = ElementCore.getSavedElementObject(l_id);

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
	ElementCore.clearSelectedElements();
	closeSidebarMenu();
}
