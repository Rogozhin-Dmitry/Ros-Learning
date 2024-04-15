import * as Styles from "./styles.js"
import * as Contents from "./contents.js"
import * as Updaters from "./updaters.js"

export const elements = {
    "content": [
        {
            "name": "button",
            "title": "Button",
            "type": "clickable",
            "init_value": 0,
            "updater": Updaters.button,
            "style": Styles.button,
            "content": Contents.button,
        },
        {
            "name": "indicator",
            "title": "Indicator",
            "type": "display",
            "init_value": 0,
            "updater": Updaters.indicator,
            "style": Styles.indicator,
            "content": Contents.indicator,
        },
    ]
}
