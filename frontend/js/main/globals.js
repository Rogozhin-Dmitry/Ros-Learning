
// GLOBAL VARS
export const popup_hidden_class = "popup_hidden"
export const field_elem_class = "field__elem"
export const field_elem_selected_class = "field__elem_selected"
export const sidebar_menu_hidden_class = "sidebar__menu_hidden"
export const field_class = "content-interface__field"

// DOM ELEMENTS
export const interface_field = getElem("content-interface__field")
export const switch_logic = getElem("switch-logic")
export const switch_interface = getElem("switch-interface")
export const content_logic = getElem("content-logic")
export const content_interface = getElem("content-interface")

export const prompt_popup = getElem("prompt-popup")
export const prompt_title = getElem("prompt__title")
export const prompt_input = getElem("prompt__input")
export const prompt_confirm_btn = getElem("prompt__confirm-btn")
export const prompt_cancel_btn = getElem("prompt__cancel-btn")
export const alert_popup = getElem("alert-popup")
export const alert_title = getElem("alert__title")
export const alert_confirm_btn = getElem("alert__confirm-btn")

export const sidebar_elements = getElem("sidebar__elements")
export const sidebar_menu = getElem("sidebar__menu")
export const menu_title = getElem("menu__title")
export const menu_type = getElem("menu__type")
export const menu_gid_input = getElem("g-id__input")
export const menu_dx_input = getElem("dx__input")
export const menu_dy_input = getElem("dy__input")
export const menu_width_input = getElem("width__input")
export const menu_height_input = getElem("height__input")
export const menu_value_input = getElem("value__input")
export const menu_delete_button = getElem("menu__delete-button")
export const menu_close_button = getElem("menu__close-button")

export const body = getElem("body")

export const sidebar_items = getAllElems("sidebar__item")
export const menu_inputs = getAllElems("menu-input")

export function getElem(elem) {
    return document.getElementsByClassName(elem)[0]
}

export function getAllElems(elem) {
    return document.getElementsByClassName(elem)
}

