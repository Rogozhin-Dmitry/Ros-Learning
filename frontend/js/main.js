
function switchToLogic() {
	content_logic.classList.remove("content_hidden");
	content_interface.classList.add("content_hidden");

	switch_logic.classList.add("switch__item_selected");
	switch_interface.classList.remove("switch__item_selected");
}

function switchToInterface() {
	content_logic.classList.add("content_hidden");
	content_interface.classList.remove("content_hidden");

	switch_logic.classList.remove("switch__item_selected");
	switch_interface.classList.add("switch__item_selected");
}


