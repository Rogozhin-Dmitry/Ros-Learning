import * as Styles from "./styles.js"
import * as Contents from "./contents.js"
import * as Updaters from "./updaters.js"
import * as Validators from "./validators.js"

export const elements = {
    "content": [
        {
            "name": "button",
            "title": "Button",
            "type": "clickable",
            "init_value": "none",
            "style": Styles.button,
            "content": Contents.button,
            "updater": Updaters.button,
            "validator": Validators.button,
        },
        {
            "name": "indicator",
            "title": "Indicator",
            "type": "display",
            "init_value": 0,
            "style": Styles.indicator,
            "content": Contents.indicator,
            "updater": Updaters.indicator,
            "validator": Validators.indicator,
        },
    ]
}

