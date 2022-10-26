function prom(complete){
    return new Promise(function(resolve,reject){
        console.log("Fetching data,please wait...");  //Pending Message

        setTimeout(()=>{
            if(complete){
                resolve("I am Complete");
            }else{
                reject("I am failed");
            } 
        },3000)
    })
}


prom(false).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


