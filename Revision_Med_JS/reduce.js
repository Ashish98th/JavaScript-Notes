const arr=[1,2,3,4]

const output=arr.reduce(function(acc,curr){
   acc=acc+curr;
   return acc;
},0)

console.log(output)


