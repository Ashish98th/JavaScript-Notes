const a=function(){
    const b=function(){
        console.log('something');
    }
    return b; //It's returning another function
}
const returnvalue=a();//returnvalue will store the function b//It's accepting another function 
//Now we can call the function inside these variable
console.log(returnvalue)
console.log(returnvalue());  //since returnvalue acts like a variable so memory allocated for returnvalue and stores undefined initially