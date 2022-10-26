const arr=[4,9,16];

// const output=arr.map(function)  //[passing afunction inside it,which basically tells You that what transformation do we need,is it double triple]

function double(num){
    return num*2;
}
const output = arr.map(double);
console.log(output)





// Transforming all the Elements of the array and return a new array