const arr=[1,2,3,4]

function isodd(num){
    return num%2==0;
}

const output=arr.filter(isodd)

console.log(output)