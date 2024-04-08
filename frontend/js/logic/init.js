import { toolbox } from "../logic/toolbox.js";
import * as Globals from "../main/globals.js";
import * as Popup from "../interface/popup.js";

export function setupBlockly() {
	const workspace = Blockly.inject(document.getElementById("blocklyDiv"), {
		toolbox,
	});
	const blockly_tree_rows = Globals.getAllElems("blocklyTreeRow");
	const blockly_tree_labels = Globals.getAllElems("blocklyTreeLabel");
	Blockly.dialog.setPrompt(customPrompt);

	for (let i = 0; i < blockly_tree_rows.length; i++) {
		const c = blockly_tree_rows[i].style.borderLeftColor;
		blockly_tree_labels[i].insertAdjacentHTML(
			"beforebegin",
			`<div style='background: ${c}' class='blocklyTreeDot'></div>`
		);
	}

	function customPrompt(title, def, variable) {
		Popup.openPrompt(title, def, variable);
	}
}
