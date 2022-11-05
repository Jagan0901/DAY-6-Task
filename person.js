class person{
    constructor(name,place,job){
        this.name = name;
        this.place = place;
        this.job = job;
    }
    getDetails(){
        return(`The name of the person is ${this.name} works at ${this.place} as a ${this.job}`)
    }
}
let person1 = new person ("Jaganath","Bangalore","Software Developer")
console.log(person1.getDetails());