const $template = document.createElement('template')
$template.innerHTML=`
<div class="container">
<div class="people-image"></div>
<div class="people-infor">
    <div class="people-name">a</div>
    <div class="people-country">usa</div>
    <div class="people-gender">male</div>
    <div class="people-phone">0123456789</div>
    <div class="people-favorites">film, drink</div>
</div>
</div>
`
export default class container extends HTMLElement {
    constructor() {
        super()
        this.appendChild($template.content.cloneNode(true))
        this.$name = this.querySelector('.people-name')
        this.$country = this.querySelector('.people-country')
        this.$gender = this.querySelector('.people-gender')
        this.$phone = this.querySelector('.people-phone')
        //this.$favotires = this.querySelector('.people-favotires')
        this.$image = this.querySelector('.people-image')
        
    }
    static get observedAttributes (){
        return['name', 'country', 'gender', 'phone', 'favotires', 'image']
    }
    attributeChangedCallback(attrName, oldValue, newValue) {
        if(attrName == 'name'){
            this.$name.innerHTML = newValue 
        } else if(attrName == 'country'){
            this.$country.innerHTML = newValue
        } else if(attrName == 'gender'){
            this.$gender.innerHTML = newValue
        } else if(attrName == 'phone'){
            this.$phone.innerHTML = newValue
        } //else if(attrName == 'favotires'){
            //this.$favotires.innerHTML = newValue
         else if(attrName == 'image'){
            this.$image.style.backgroundImage = `url('${newValue}')`
        }
    }
}
window.customElements.define('people-container', container)