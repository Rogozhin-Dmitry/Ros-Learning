
addCreateElementsListeners()

// NEEDS REFACTORING
document
	.getElementsByClassName("switch-logic")[0]
	.addEventListener("click", function () {
		document
			.getElementsByClassName("content-logic")[0]
			.classList.remove("content_hidden");
		document
			.getElementsByClassName("content-interface")[0]
			.classList.add("content_hidden");

		document
			.getElementsByClassName("switch-logic")[0]
			.classList.add("switch__item_selected");
		document
			.getElementsByClassName("switch-interface")[0]
			.classList.remove("switch__item_selected");
	});

document
	.getElementsByClassName("switch-interface")[0]
	.addEventListener("click", function () {
		document
			.getElementsByClassName("content-logic")[0]
			.classList.add("content_hidden");
		document
			.getElementsByClassName("content-interface")[0]
			.classList.remove("content_hidden");

		document
			.getElementsByClassName("switch-logic")[0]
			.classList.remove("switch__item_selected");
		document
			.getElementsByClassName("switch-interface")[0]
			.classList.add("switch__item_selected");
	});

const blockly_tree_rows = document.getElementsByClassName("blocklyTreeRow");
const blockly_tree_labels = document.querySelectorAll(".blocklyTreeLabel");

for (let i = 0; i < blockly_tree_rows.length; i++) {
	const c = blockly_tree_rows[i].style.borderLeftColor;
	blockly_tree_labels[i].insertAdjacentHTML(
		"beforebegin",
		`<div style='background: ${c}' class='blocklyTreeDot'></div>`
	);
}
