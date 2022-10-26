function add(...args){

let sum=0;
for(let i in args){
    sum+=args[i];
  
}
return sum;
}

console.log(add(5,6,7))







// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }
  
//   console.log(sum(1, 2, 3));

  