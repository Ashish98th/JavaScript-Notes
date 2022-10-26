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
let onfulfilment=(result)=>{
    console.log(result);
}

let onRejection=(error)=>{
    console.log(error);
}

prom(true).then(onfulfilment).catch(onRejection);


//We use setTimeout because data takes too much time to come from the Server 