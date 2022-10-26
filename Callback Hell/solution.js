console.log("Start")

function getName(name,callback){
    setTimeout(()=>{
        console.log("SetTimeout called")
        callback(name) ;
    },2000)
}

const nm=getName("Ashish",(nm)=>{console.log(nm)});
 //To use before the data was fetched we will face undefined problem
console.log("End");

