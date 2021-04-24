import container from "./container.js"

const $template = document.createElement('template')
$template.innerHTML = `
    <div class="people-list">
        
    </div>
`
export default class list extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$list = this.querySelector('.peole-list')
    }
    static get observedAttributes () {
        return['pl']
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'pl') {
            let data = JSON.parse(newValue)

            for(let peopleData of data) {
                let $peoplecontainer = new container()
                $peoplecontainer.setAttribute('id', peopleData.id)
                $peoplecontainer.setAttribute('name', peopleData.name)
                $peoplecontainer.setAttribute('country', peopleData.country)
                $peoplecontainer.setAttribute('gender', peopleData.gender)
                $peoplecontainer.setAttribute('phone', peopleData.phone)
                // $peoplecontainer.setAttribute('favotires', peopleData.favotires)
                $peoplecontainer.setAttribute('image', peopleData.image)
                this.$list.appendChild($peoplecontainer)
            }
        }
    }
}
window.customElements.define('people-list', list)