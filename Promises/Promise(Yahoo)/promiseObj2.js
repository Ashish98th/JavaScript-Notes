function prom(complete){
    
return new Promise(function(resolve,reject){
    if(complete){
        resolve("I am Complete");
    }else{
        reject("I am failled");
    }
})
}

console.log(prom(false));





//when user call the prom function this prom function will return the promise