const car=[];

car[0]="Fiat"
car[1]="Jaguar"
car[2]="Maruti"

console.log(car);

const marks=[23,56,78,[31,67]];

const cars=new Array("Fiat","Jaguar","Maruti"); //creating array using constructor==>constructor is used to create array objects

console.log(cars)
console.log(cars.length)

//Methods
let isArray=Array.isArray(cars)
console.log(isArray)

let value=cars.indexOf("Jaguar")
let mark=marks.indexOf(23)
console.log(value)
console.log(mark)

//modifying arrays or mutating arrays
marks.push(55)  //adding element at the end of the array
console.log(marks)

//adding at the beginning of array

cars.unshift("Lamborghini")
console.log(cars)

//eliminating eleemnt from thye end
console.log(marks.pop())

//Remove eelemnt from starting
cars.shift()
console.log(cars)

//Removing element from start index to the mention number of elemnts to remove

cars.splice(1,2)
console.log(cars)

//reverse the array
console.log(marks)
marks.reverse()
console.log(marks)

//concat
const marks2=[12,23,45,56]
const newassign=marks.concat(marks2)
console.log(newassign)
