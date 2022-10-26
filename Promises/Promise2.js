
const promiseObj=new Promise((resolve,reject)=>{
    let req=false;
    if(req==true){
        resolve("Request Success");
    }else{
        reject("Request Rejected");
    }
}).then(
    (value)=>{console.log(value)},  

).catch((error)=>{console.log(error) })