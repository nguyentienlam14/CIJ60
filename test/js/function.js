export default class users {
    id
    name
    gender
    country
    phoneNumber
    favorites
    avatar
    constructor (id, name, gender, country, phoneNumber, favorites, avatar ) {
        this.id = id
        this.name = name
        this.gender = gender
        this.country = country
        this.phoneNumber = phoneNumber
        this.favorites = favorites
        this.avatar = avatar
    }
}