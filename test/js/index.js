import container from "./container.js"
import list from "./list.js"
import data from "./data.js"

let $peoplelist = document.getElementById('my-list')
$peoplelist.setAttribute('pl', JSON.stringify(data))