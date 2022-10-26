function func1(){
    return new Promise(function(resolve,reject){ //Either I will resolve or will reject
        setTimeout(()=>{

            const error=true;  //a request couldn't completed couldn't fetch the resource
            if(!error){
                console.log('Your promise has been resolved')
                resolve();
            }else{
                console.log('Your promise has not been resolved')
                reject('sorry not fulfilled');
            }
        },5000);
    })
}

func1().then(function(){
    console.log("Thanks for solving")
}).catch(function(error){
    console.log('Not resolved' + error)
})