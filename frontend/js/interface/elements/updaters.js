
export const indicator = function (elem) {
    if (elem.getAttribute("value") == "0") {
        elem.classList.remove("indicator-elem-active")
    } else {
        elem.classList.add("indicator-elem-active")
    }
}

export const button = function (elem) {
    
}


