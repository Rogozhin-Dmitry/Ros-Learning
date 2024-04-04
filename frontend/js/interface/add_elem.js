
function addCreateElementsListeners() {
    for (let i = 0; i < sidebar_items.length; i++) {
        const item = sidebar_items[i]
        const div = `
            <div class="draggable field__elem">
                ${item.lastElementChild.innerText}
                <div class="elem__id">id: 0</div>
            </div>
        `
        item.addEventListener("mousedown", function () {
            interface_field.insertAdjacentHTML("beforeend", div)         
        })
    }
}
