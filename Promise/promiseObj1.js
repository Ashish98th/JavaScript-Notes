let complete=false;

let promiseObj=new Promise(function(resolve,reject){
    if(complete){
        resolve("I am Complete");
    }else{
        reject("I am failled");
    }
})
console.log(promiseObj)