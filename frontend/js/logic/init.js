import { toolbox } from "../logic/toolbox.js";
import * as Globals from "../main/globals.js";
import * as Popup from "../interface/popupCore.js";

const workspace = Blockly.inject(document.getElementById("blocklyDiv"), {
	toolbox,
});
const blockly_tree_rows = Globals.getAllElems("blocklyTreeRow");
const blockly_tree_labels = Globals.getAllElems("blocklyTreeLabel");

Blockly.dialog.setPrompt(customPrompt);
Blockly.dialog.setAlert(customAlert);

for (let i = 0; i < blockly_tree_rows.length; i++) {
	const c = blockly_tree_rows[i].style.borderLeftColor;
	blockly_tree_labels[i].insertAdjacentHTML(
		"beforebegin",
		`<div style='background: ${c}' class='blocklyTreeDot'></div>`
	);
}

function customPrompt(title, def, callback) {
	Popup.openPrompt(title, def, callback);
}

function customAlert(msg, callback) {
	Popup.openAlert(msg, callback);
}

const blockly_toolbox = Globals.getElem("blocklyToolboxDiv");
const toolbox_show_js_btn = `<div class="button show-js-btn">Show JS code</div>`;
blockly_toolbox.style.display = "flex";
blockly_toolbox.insertAdjacentHTML("beforeend", toolbox_show_js_btn);

const blockly_workspace = Globals.getElem("injectionDiv");
const js_code_block = `<div class="js-code-block js-code-block_hidden">
            <div class="js-code-block__title">Generated JS code</div>
            <div class="js-code-block__generated-code">Generated JS code</div>
        </div>`;
blockly_workspace.insertAdjacentHTML("afterbegin", js_code_block);

const show_js_btn = Globals.getElem("show-js-btn");
const js_block = Globals.getElem("js-code-block");
show_js_btn.addEventListener("click", () => {
	js_block.classList.toggle("js-code-block_hidden");
	show_js_btn.classList.toggle("button-accent");
});

const generated_js_block = Globals.getElem("js-code-block__generated-code");
writeJSCode(generated_js_block, workspace);

workspace.addChangeListener((e) => {
	if (
		e.isUiEvent ||
		e.type == Blockly.Events.FINISHED_LOADING ||
		workspace.isDragging()
	) {
		return;
	}
	writeJSCode(generated_js_block, workspace);
});

function writeJSCode(js_block, workspace) {
	const code = javascript.javascriptGenerator.workspaceToCode(workspace);
	js_block.innerText = code;
}
