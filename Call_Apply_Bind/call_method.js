let name={
    firstname:"Ashish",
    lastname:"Nath",
printfullname:function(){
    console.log(this.firstname +" " + this.lastname);
    // console.log(this.firstname +" "+ this.lastname + " from "+ hometown +" " + state)

}
}
let name2={
    firstname:"Sachin",
    lastname:"Tendulkar",
}

name.printfullname.call(name2)

