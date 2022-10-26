let name={
    firstname:"Ashish",
    lastname:"Nath",

printfullname:function(hometown,state){
 
    console.log(this.firstname +" "+ this.lastname + " from "+ hometown +" " + state)
}
}

let name2={
    firstname:"Sachin",
    lastname:"Tendulkar",
}

name.printfullname.apply(name2,["Mumbai","Maharashtra"])

