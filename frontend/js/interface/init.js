import * as Globals from "../main/globals.js";

for (let i = 0; i < Globals.sidebar_items.length; i++) {
	const item = Globals.sidebar_items[i];
	const div = `
            <div class="draggable field__elem">
                ${item.lastElementChild.innerText}
                <div class="elem__id">id: 0</div>
            </div>
        `;
	item.addEventListener("mousedown", function () {
		Globals.interface_field.insertAdjacentHTML("beforeend", div);
	});
}

function setupInteract() {
	interact(".draggable")
		.resizable({
			// resize from all edges and corners
			edges: { left: true, right: true, bottom: true, top: true },

			listeners: {
				move(event) {
					let target = event.target;
					let x = parseFloat(target.getAttribute("data-x")) || 0;
					let y = parseFloat(target.getAttribute("data-y")) || 0;

					// update the element's style
					target.style.width = event.rect.width + "px";
					target.style.height = event.rect.height + "px";

					// translate when resizing from top or left edges
					x += event.deltaRect.left;
					y += event.deltaRect.top;

					target.style.transform =
						"translate(" + x + "px," + y + "px)";

					target.setAttribute("data-x", x);
					target.setAttribute("data-y", y);
					// target.textContent =
					// Math.round(event.rect.width) +
					// "\u00D7" +
					// Math.round(event.rect.height);
				},
			},
			modifiers: [
				// keep the edges inside the parent
				interact.modifiers.restrictEdges({
					outer: "parent",
				}),

				// minimum size
				interact.modifiers.restrictSize({
					min: { width: 50, height: 50 },
				}),
			],

			inertia: true,
		})
		.draggable({
			listeners: { move: window.dragMoveListener },
			inertia: true,
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: "parent",
					endOnly: true,
				}),
			],
		});
}

function dragMoveListener(event) {
	let target = event.target;
	let x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx;
	let y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

	// translate the element
	target.style.transform = "translate(" + x + "px, " + y + "px)";

	// update the posiion attributes
	target.setAttribute("data-x", x);
	target.setAttribute("data-y", y);
}

// this function is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener;

export { setupInteract };
