const arr=[1,2,3,4,5]

function isodd(num){
    return num%2==1;
}
const output=arr.filter(isodd)
console.log(output)


// Filter method is used to filter out the values inside the array