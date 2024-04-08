
// GLOBAL VARS
export const popup_hidden_class = "popup_hidden"

// DOM ELEMENTS
export const interface_field = getElem("content-interface__field")
export const switch_logic = getElem("switch-logic")
export const switch_interface = getElem("switch-interface")
export const content_logic = getElem("content-logic")
export const content_interface = getElem("content-interface")
export const popup = getElem("popup__tint")
export const prompt_title = getElem("prompt__title")
export const prompt_input = getElem("prompt__input")
export const prompt_confirm_btn = getElem("prompt__confirm-btn")
export const prompt_cancel_btn = getElem("prompt__cancel-btn")
export const sidebar_items = getAllElems("sidebar__item")


export function getElem(elem) {
    return document.getElementsByClassName(elem)[0]
}

export function getAllElems(elem) {
    return document.getElementsByClassName(elem)
}

