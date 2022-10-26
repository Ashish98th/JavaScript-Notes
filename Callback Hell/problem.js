console.log("Start")

function getName(name){
    setTimeout(()=>{
        console.log("SetTimeout called")
        return name;
    },2000)
}

const nm=getName("Ashish");
console.log(nm);  //To use before the data was fetched we will face undefined problem
console.log("End");

//start
//undefined 
//setTimeout called

// The solution of this problem is callback 