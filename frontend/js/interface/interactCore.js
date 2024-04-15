import * as Globals from "../main/globals.js";
import * as ElementManage from "./elementManage.js";


export function setupInteract() {
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
		.on("dragend resizeend", ElementManage.saveElements);
}

function dragMoveListener(event) {
	const target = event.target;
	const x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
	const y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

	target.style.transform = "translate(" + x + "px, " + y + "px)";
	target.setAttribute("data-x", x);
	target.setAttribute("data-y", y);
}

window.dragMoveListener = dragMoveListener;
