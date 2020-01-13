//proto.js
let log = console.log;

let obj = {prop: 1}; //new object ((prop:1))
//log(obj);
log(Object.getPrototypeOf( Object )); //Function
let p1 = Object.getPrototypeOf( Object );
let p2 = Object.getPrototypeOf( p1 );
let p3 = Object.getPrototypeOf( p2 );
//log(p3);

let obj2 = {
    m: function(){
        console.log('function m')
    }
}
let obj3 = Object.create(obj2); //make obj2 the prototype of obj3
obj3.m = function(){
    console.log('mmmmmmmmmmmmmmmmmmmmmm')
};
let obj4 = Object.create(obj2); //make obj2 the prototype of obj4
let obj5 = Object.create(obj2); //make obj2 the prototype of obj5

obj3.m();
obj4.m();
obj5.m();

let arr = [];
obj3.toString();
