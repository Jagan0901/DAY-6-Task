class Uber{
    constructor(distance,rate,waiting_Time){
        this.distance = distance;
        this.rate = rate;
        this.waiting_Time = waiting_Time;
    }
    get_Ride_Details(){
        return(`The distance of the ride is ${this.distance}km with a rate of ₹${this.rate}/km with a waiting period ${this.waiting_Time}`)
    }
    get_Price(){
        const basic_Fair = +(this.distance*this.rate);
        const waiting_Charges = +(2*this.waiting_Time);
        const  price   = basic_Fair + waiting_Charges;
        return price;
    }
}

let customer_1 = new Uber(100,10,10);
console.log(customer_1.get_Ride_Details());
console.log(customer_1.get_Price());