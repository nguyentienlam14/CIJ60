// class Person {
//     name
//     age
//     address
//     favorites
//     constructor (name, age, address, favorites) {
//         this.name = name
//         this.age = age
//         this.address = address
//         this.favorites = favorites 
//     }
//     speak() {
//         console.log(this.name + " ngon ngu");
//     }
//     study() {
//         console.log("where???");
//     }
    
    
// }










// // cai class 5 friend ( name, character, appearances, age, address, girlfr [] )

// class friend extends Person{
//     appearances
//     address
//     lover
//     constructor(name, age, address,character, appearances, lover) {
//         super(name, age, address)
//         this.character = character
//         this.appearances = appearances
//         this.lover = lover
//     }
//     debt(){
//         console.log(this.name + ' nợ tiền');
//     }
//     introducw(){
//         console.log(this.name + ", " + this.age + "," + " no tien bo");
//     }
// }
// const ban1 = new friend('thang', 22, 'lunvl' ,'mot thang ngu co dieu kien', 'HN', 2)
// const ban2 = new friend('huy', 22, 'beovl', 'dua dai nhu cho', 'TN', 'dem deo het')
// const ban3 = new friend('kua', 22, 'mot con nghien chinh thong', 'nghien thi deo co tinh cach', 'HN', '3')
// console.log(ban1);
// console.log(ban2);
// console.log(ban3);
// ban1.debt();
// ban2.debt();
// ban3.debt();
// ban1.introducw();
// ban2.introducw();
// ban3.introducw();






// //kế thừa


// class Animal {
//     name
//     constructor(name) {
//         this.name = name
//     }
// }
// class reptile extends Animal{
//     weight
//     constructor(name, weight){
//         super(name)
//         this.weight = weight
//     }
// }
// class Sanke extends reptile {
//     posion
//     constructor(name, weight, posion){
//         super(name, weight)
//         this.posion = posion
//     }
// }
// class Mamal extends Animal {
//     leg
//     constructor(name, leg) {
//         super(name)
//         this.leg = leg
//     }
// }
// class dog extends Mamal {
//     fur
//     constructor(name, leg, fur){
//         super(name, leg)
//         this.fur = fur
//     }
// }
// let shiba = new dog("cauvang", "vang")
// console.log(shiba instanceof Animal);









/*
cai dạt cac class sau
person
    name
    age
    introduce() --> in ra man hinh
        ten 
        tuoi

boy ke thua person
    handsome
    girlfriend chi nhan object duoc tao ra tu class nu    

girl ke thua person
    beauty
    boyfriend chi nhan object tao ra tu class nam

pet 
    name 
    species
    owner chi nhan object tu person    
*/


class Person {
    name
    age
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    introduce () {
        console.log(`toi la ${this.name}`, `nam nay ${this.age}`);
    }
}
class boy extends Person {
    handsome
    girlfriend
    constructor(name, age, handsome, girlfriend){
        super(name, age)
        this.handsome = handsome
        if(girlfriend instanceof girl) {
            this.girlfriend = girlfriend
        } else {
            this.girlfriend = null;
        }
        
    }
}
class girl extends Person {
    beauty
    boyfriend
    constructor (name, age, beauty, boyfriend){
        super(name, age)
        this.beauty = beauty
        if(boyfriend instanceof boy) {
            this.girlfriend = this.girlfriend
        }else {
            this.boyfriend == null;
        }
    }
}
class pet {
    name
    species
    owner
    constructor(name, species, owner){
        this.name = name
        this.species = species
        this.owner = owner
    }

}
let lam = new boy("NTL", 22, "BT", 'BYN')
let BYN = new girl("BYN", 21, "sobeauty", 'lam')
console.log(lam);
console.log(BYN);