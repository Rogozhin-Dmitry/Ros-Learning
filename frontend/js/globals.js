
// DOM ELEMENTS
const interface_field = getElem("content-interface__field")
const switch_logic = getElem("switch-logic")
const switch_interface = getElem("switch-interface")
const content_logic = getElem("content-logic")
const content_interface = getElem("content-interface")

const sidebar_items = getAllElems("sidebar__item")

function getElem(elem) {
    return document.getElementsByClassName(elem)[0]
}

function getAllElems(elem) {
    return document.getElementsByClassName(elem)
}
