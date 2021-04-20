
const $template = document.createElement('template');
$template.innerHTML = `
<div class="film-container">
<div class="film-image">
    <div class="film-type">HD-VIETSUB</HD-VIETSUB></div>
</div>
<div class="film-info">
    <span class="film-name">ke vo dung</span>
    <span class="film-directors">nobody</span>
    <span class="film-duration">92 </span>
</div>
</div>
`
export default class FilmContainer extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$name = this.querySelector('.film-name')
        this.$duration = this.querySelector('.film-duration')
        this.$image = this.querySelector('.film-image')
        this.$directors = this.querySelector('.film-directors')
        this.$type = this.querySelector('.film-type')
    }
    static get observedAttributes (){
        return ['name', 'duration', 'image', 'directors', 'type']
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        
        if(attrName == 'name') {
            this.$name.innerHTML = newValue
        } else if(attrName == 'duration') {
            this.$duration.innerHTML = newValue
        } else if(attrName == 'image') {
            this.$image.style.backgroundImage = `url('${newValue})`
        } else if(attrName == 'director') {
            this.$directors.innerHTML = newValue
        } else if(attrName == 'type') {
            this.$type.innerHTML = newValue
        } 
    }
}
window.customElements.define('film-container', FilmContainer)