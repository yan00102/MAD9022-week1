// function Cheese(){

// }

// let x = new Cheese(); //word "new" tell function to build an object
// console.log(x);


function Cheese(prc){
    this.type = "Cheddar";
    this.price = prc;
}
Cheese.prototype.m = function(){
    console.log('Mmmmmm cheese');
    //all the Cheese Objects share this m method on the prototype
}
let cObj = Object.create(Cheese.prototype);
console.log(cObj);

let x = Cheese(1.66);
let xprime = new Cheese(5.55);
console.log(xprime);