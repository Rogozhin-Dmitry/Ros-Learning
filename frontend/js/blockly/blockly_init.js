
import { toolbox } from "./toolbox.js";

const workspace = Blockly.inject(document.getElementById("blocklyDiv"), {
	toolbox,
});

const blockly_tree_rows = getAllElems("blocklyTreeRow")
const blockly_tree_labels = getAllElems("blocklyTreeLabel")

for (let i = 0; i < blockly_tree_rows.length; i++) {
	const c = blockly_tree_rows[i].style.borderLeftColor;
	blockly_tree_labels[i].insertAdjacentHTML(
		"beforebegin",
		`<div style='background: ${c}' class='blocklyTreeDot'></div>`
	);
}

