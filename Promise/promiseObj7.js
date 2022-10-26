function prom(a,b){
    return new Promise(function(resolve,reject){
        console.log("Fetching data,please wait...");  //Pending Message
var c=a/b;
        setTimeout(()=>{
            if(a,b){
                resolve(`Your Answer : ${c}`);
            }else{
                reject("Failed to calculate");
            } 
        },3000)
    })
}


prom(5,0).then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
});


