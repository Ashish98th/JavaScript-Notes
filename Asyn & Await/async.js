// async function test(a,b){
//     return a+b;
// }
// console.log(test(10,2))

//returns a promise instead of 12

async function test(){
    return "Hello";
}
test().then((result)=>{   //arrow function inside then function
    console.log(result)
})




// if the test function returns something and successfully resolve something
// then function will be called automatically