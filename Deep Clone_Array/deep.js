var original=[1,2,3,4,5]

var copy1=original.slice(0)


//spread
var copy2=[...original]
console.log(copy1,copy2)

// This doesn't work when You have an array inside an array 

var original2=[1,2,3,[5]];

var shallowcopy=original2.slice(0)

var result1=shallowcopy[3].push(6)

console.log(original2)