// let arr=[1,2,3]
 let arr=[1,[2],3]

let arraycopy=[...arr]

console.log(arraycopy)

arraycopy[0]=5;
arraycopy[1][0]=6
console.log(arraycopy)

console.log(arr)

//it will copy shallow only orginal array won't be affected
//assigning memory address only
//arrays are reference types

//however it won't work for nested array for nested array original array will also be changed
