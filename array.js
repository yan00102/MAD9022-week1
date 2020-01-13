
let arr = [
    {id:123, num: 3378, letter:"M"},
    {id:234, num: 567567567, letter:"a"},
    {id:345, num: 111, letter:"r"},
    {id:456, num: 4543, letter:"y"},
];

let result = arr.reduce((prev, item)=>{
    return prev.concat(item.letter); //concat()作用是把每一个item.letter给连起来

}, " ");
console.log(result); //Mary

let result2= arr.reduce((preValue1, {letter2})=> {return preValue1.concat(`${letter2}`)}, "")

console.log(result2); //Mary




let sum = [0,1,2,3,4].reduce((accumulator, currentValue)=>{
    return accumulator + currentValue;
}, 0) 
console.log(sum); // sum = 10

/*reduce method里有四种arguments对象: arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue]) */
let letters = arr.reduce((preValue, curValue)=>{
    return preValue.concat(curValue.letter); 
}, " ");
console.log(letters);

//forEach method - good for outputting values
arr.forEach( item => console.log(item.id) );

//map method - if you need a new version of the array
//I want some of the data from each object
//I want to do a calculation on the data

// let arr1 = arr.map( item => {
//     item.prop = "hello"; //add a new property
//     delete item.num; //remove the num property
//     return item;
// });
//console.log(arr1);

// filter method let you reduce the number of items in the new array
// let arr2 = arr.filter( item => {
//     if(item.id > 300 ){
//     return true;
//    }else
//    {
//        return false;
//    }
// })
//console.log(arr2);

//reduce - reduces any array to one value / one thing 
console.log(arr)
let val = arr.reduce((prev, current) => {
    //first time this runs prev will be 0
    return current.num + prev;
}, 0); //0 is my initialValue / accumulator / currentValue
console.log(val);

//Chaining methods
let myData = [
    {id:1, name:"Steve", salary: 1230000},
    {id:2, name:"Reshad", salary: 4530000},
    {id:3, name:"Simon", salary: 1000},
    {id:4, name:"Rebecca", salary: 88888},
    
]
let Res = myData
    .filter(item => item.salary > 50000)  //new array will be id 1,2,4
    .map(item => {
        item.salary = item.salary * 1.1;
        return item;
    })
    .reduce((prev, item) =>{
       return item.salary + prev;
    }, 0);
//remove anyone with salary of less than 50000
//give a 10% raise to everyone remaining
//add together all their salaries

console.log(Res);

