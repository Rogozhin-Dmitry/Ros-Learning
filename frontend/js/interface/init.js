import * as Globals from "../main/globals.js";
import * as ElementCore from "./elementCore.js";
import * as Sidebar from "./sidebarCore.js";
import * as Popup from "./popupCore.js";
import * as Interact from "./interactCore.js";

document.addEventListener("mousedown", (e) => {
	ElementCore.updateSelectionByMousedown(e);
});

document.addEventListener("keydown", (e) => {
	ElementCore.removeSelectedElementsByDeleteKey(e);
});

Globals.menu_delete_button.addEventListener("click", () => {
	ElementCore.removeSelectedElements();
});

Globals.menu_close_button.addEventListener("click", () => {
	Sidebar.sidebarClear();
});

Globals.prompt_confirm_btn.addEventListener("click", () => {
    Popup.closePromptWithCallback();
});

Globals.prompt_cancel_btn.addEventListener("click", () => {
    Popup.closePrompt();
});

Globals.alert_confirm_btn.addEventListener("click", () => {
    Popup.closeAlertWithCallback();
});

Interact.setupInteract();
Sidebar.setupToolbarItems();
Sidebar.setupToolbar();
Sidebar.setupSidebarMenu();
