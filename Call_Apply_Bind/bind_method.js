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

let copyfunction=name.printfullname.bind(name2,"Mumbai","Maharashtra")
console.log(copyfunction)

copyfunction() 

