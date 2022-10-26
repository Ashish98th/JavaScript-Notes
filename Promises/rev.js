function func1(){
  return new Promise(function(resolve,reject){
    setTimeout(()=>{
      const error=true;
      if(!true){
        console.log("Your promise isn't is resolve");
        resolve();
      }else{
        console.log("Your promise isn't resolved");
        reject();
      }
    },2000)
  })
}


func1().then(()=>{
  console.log("congrats your promise is resolved");
}).catch(()=>{
  console.log("your promise isnt resolved")
})