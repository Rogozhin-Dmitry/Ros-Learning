import * as Globals from "../main/globals.js";
import * as Elements from "./elements/elements.js";
import * as Tools from "./tools.js";

const elems = Elements.elements["content"];
document.addEventListener("mousedown", Tools.updateSelectionByMousedown);
document.addEventListener("keydown", (e) =>
	Tools.removeSelectedElementsByDeleteKey(e)
);

// processing contents
for (let i = 0; i < elems.length; i++) {
	const elem = elems[i];
	const elem_class = Tools.getFirstElementStyle(elem);
	Globals.sidebar.innerHTML += `
        <div class="sidebar__item">
            <div class="item__name" style="display: none">${elem.name}</div>
            <div class="item__icon ${elem_class}"></div>
            <div class="item__text">${elem.title}</div>
        </div>
    `;
}

// processing styles
for (let i = 0; i < Globals.sidebar_items.length; i++) {
	const item = Globals.sidebar_items[i];
	const elem = Tools.getElemByName(item.firstElementChild.innerText, elems);
	Globals.body.innerHTML += elem.style;
}

// processing contents
for (let i = 0; i < Globals.sidebar_items.length; i++) {
	const item = Globals.sidebar_items[i];
	const elem = Tools.getElemByName(item.firstElementChild.innerText, elems);
	const e_ = document.createElement("div");
	e_.innerHTML = elem.content;
	e_.firstElementChild.classList.add(Globals.field_elem_class);
	e_.firstElementChild.setAttribute("value", elem.init_value);
	e_.firstElementChild.setAttribute("l_id", "");
	e_.firstElementChild.setAttribute("g_id", "");
	e_.firstElementChild.setAttribute("name", elem.name);
	e_.firstElementChild.setAttribute("type", elem.type);
	e_.firstElementChild.setAttribute("data-x", 0);
	e_.firstElementChild.setAttribute("data-y", 0);

	item.addEventListener("mousedown", function () {
		Globals.interface_field.innerHTML += e_.innerHTML;
		Tools.updateSavedElements();
	});
}

function setupInteract() {
	interact(`.${Globals.field_elem_class}`)
		.resizable({
			margin: 4,
			edges: { left: true, right: true, bottom: true, top: true },

			listeners: {
				move(event) {
					const target = event.target;
					let x = parseFloat(target.getAttribute("data-x")) || 0;
					let y = parseFloat(target.getAttribute("data-y")) || 0;

					target.style.width = event.rect.width + "px";
					target.style.height = event.rect.height + "px";

					x += event.deltaRect.left;
					y += event.deltaRect.top;

					target.style.transform =
						"translate(" + x + "px," + y + "px)";

					target.setAttribute("data-x", x);
					target.setAttribute("data-y", y);
				},
			},
			modifiers: [
				interact.modifiers.restrictEdges({
					outer: "parent",
				}),

				interact.modifiers.restrictSize({
					min: { width: 25, height: 25 },
				}),
			],
			inertia: false,
		})
		.draggable({
			listeners: {
				move: window.dragMoveListener,
			},
			inertia: false,
			cursorChecker() {
				return "grab";
			},
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: "parent",
					endOnly: true,
				}),
			],
		})
		.on("dragend resizeend", Tools.updateSavedElements);
}

function dragMoveListener(event) {
	const target = event.target;
	const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
	const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

	target.style.transform = "translate(" + x + "px, " + y + "px)";
	target.setAttribute("data-x", x);
	target.setAttribute("data-y", y);

	// Tools.updateSavedElements()
}

window.dragMoveListener = dragMoveListener;
export { setupInteract };
