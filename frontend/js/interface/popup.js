import * as Globals from "../main/globals.js";

let v = undefined;

export function openPrompt(title, def, variable) {
	v = variable;
	Globals.prompt_title.innerText = title;
	Globals.prompt_input.value = def;
	Globals.prompt_input.focus();
	Globals.popup.classList.remove(Globals.popup_hidden_class);
}

export function closePrompt() {
	Globals.popup.classList.add(Globals.popup_hidden_class);
}

function promptAddVar(v) {
	v(Globals.prompt_input.value);
	closePrompt();
}

Globals.prompt_confirm_btn.addEventListener("click", function () {
	promptAddVar(v);
});

Globals.prompt_input.addEventListener("keydown", function (e) {
	if (e.key == "Enter") {
		promptAddVar(v);
	}
});

Globals.prompt_cancel_btn.addEventListener("click", closePrompt);


