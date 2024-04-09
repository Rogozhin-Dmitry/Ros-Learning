import * as Globals from "./globals.js";
import * as Popup from "../interface/popup.js";

document.addEventListener("mousedown", function (e) {
	if (e.target.classList.contains("popup__tint")) {
        Popup.closePopupsInRightOrder()
	}
});

document.addEventListener("keydown", function (e) {
	if (e.key == "Escape") {
        Popup.closePopupsInRightOrder()
	}
    if (e.key == "Tab") {
        e.preventDefault()

        if (Globals.switch_logic.classList.contains("switch__item_selected")) {
            switchToInterface()
        } else {
            switchToLogic()
        }
    }
});

export function isSwitchedToLogic() {
    return Globals.switch_logic.classList.contains("switch__item_selected")
        ? true
        : false
}

export function isSwitchedToInterface() {
    return Globals.switch_interface.classList.contains("switch__item_selected")
        ? true
        : false
}

function switchToLogic() {
	Globals.content_logic.classList.remove("content_hidden");
	Globals.content_interface.classList.add("content_hidden");

	Globals.switch_logic.classList.add("switch__item_selected");
	Globals.switch_interface.classList.remove("switch__item_selected");
}

function switchToInterface() {
	Globals.content_logic.classList.add("content_hidden");
	Globals.content_interface.classList.remove("content_hidden");

	Globals.switch_logic.classList.remove("switch__item_selected");
	Globals.switch_interface.classList.add("switch__item_selected");
}

Globals.switch_logic.addEventListener("click", switchToLogic);
Globals.switch_interface.addEventListener("click", switchToInterface);

export { switchToLogic, switchToInterface };
