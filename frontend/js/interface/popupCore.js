import * as Globals from "../main/globals.js";

let c = undefined;

export function openPrompt(title, def, callback) {
	c = callback;
	Globals.prompt_title.innerText = title;
	Globals.prompt_input.value = def;
	Globals.prompt_popup.classList.remove(Globals.popup_hidden_class);
	Globals.prompt_input.focus();
	document.addEventListener("keydown", closePromptWithCallback_);
}

export function openAlert(msg, callback) {
	c = callback;
	Globals.alert_title.innerText = msg;
	Globals.alert_popup.classList.remove(Globals.popup_hidden_class);
	document.addEventListener("keydown", closeAlertWithCallback_);
}

export function closePrompt() {
	Globals.prompt_popup.classList.add(Globals.popup_hidden_class);
	document.removeEventListener("keydown", closePromptWithCallback_);
}

export function closeAlert() {
	Globals.alert_popup.classList.add(Globals.popup_hidden_class);
	document.removeEventListener("keydown", closeAlertWithCallback_);
}

export function closeAlertWithCallback() {
	alertCallback(c);
	closeAlert();
}

export function closePromptWithCallback() {
	promptCallback(c);
	closePrompt();
}

export function closeAllPopups() {
	closeAlert();
	closePrompt();
}

export function isPromptOpened() {
	return Globals.prompt_popup.classList.contains(Globals.popup_hidden_class)
		? false
		: true;
}

export function isAlertOpened() {
	return Globals.alert_popup.classList.contains(Globals.popup_hidden_class)
		? false
		: true;
}

export function closePopupsInRightOrder() {
    if (isAlertOpened()) return closeAlertWithCallback();
    if (isPromptOpened()) return closePrompt();
}

function closePromptWithCallback_(e) {
	if (e.key == "Enter") {
		closePromptWithCallback();
	}
}

function closeAlertWithCallback_(e) {
	if (e.key == "Enter") {
		closeAlertWithCallback();
	}
}

function promptCallback(c) {
	c(Globals.prompt_input.value);
}

function alertCallback(c) {
	c();
}

export function setPopupListeners() {
    Globals.prompt_confirm_btn.addEventListener("click", function () {
        closePromptWithCallback();
    });

    Globals.prompt_cancel_btn.addEventListener("click", function () {
        closePrompt();
    });

    Globals.alert_confirm_btn.addEventListener("click", function () {
        closeAlertWithCallback();
    });
}
