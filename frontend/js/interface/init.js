import * as Globals from "../main/globals.js";
import * as Elements from "./elements/elements.js";
import * as ElementCore from "./elementCore.js";
import * as ElementManage from "./elementManage.js";
import * as Sidebar from "./sidebarCore.js";
import * as Popup from "./popupCore.js";
import * as Interact from "./interactCore.js";


const elems = Elements.elements["content"];

document.addEventListener("mousedown", (e) => {
    ElementManage.updateSelectionByMousedown(e)
});
document.addEventListener("keydown", (e) =>
	ElementManage.removeSelectedElementsByDeleteKey(e)
);

// processing toolbar contents
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

// processing toolbar styles
for (let i = 0; i < Globals.sidebar_items.length; i++) {
	const item = Globals.sidebar_items[i];
	const elem = ElementCore.getElementObjectByName(item.firstElementChild.innerText);
	Globals.body.innerHTML += elem.style;
}

Interact.setupInteract()
Popup.setPopupListeners()
Sidebar.setupToolbar()
Sidebar.setupSidebarMenu()
Sidebar.setSidebarListeners()

