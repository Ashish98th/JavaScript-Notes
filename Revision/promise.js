function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error=true;
            if(!error){
                console.log("Promise has been resolved");
                resolve();
            }else{
                console.log("Promise has not resolved")
                reject('not resolve');
            }
        },2000)
    })
}

func1().then(function(){
    console.log("Fulfilled")
}).catch(function(error){
    console.log(error +" " + "sorry not fulfilled")
})

