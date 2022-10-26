 let object1={
    firstname:"Ashish",
    lastname:"Nath",
   printfullname:function(Hometown,State){
    console.log(this.firstname + " " + this.lastname + " " + Hometown + " "+ State )
   }
}

let object2={
    firstname:"Sachin",
    lastname:"Tendulkar",
}

let copyfunction=object1.printfullname.bind(object2,["Mumbai","Maharashtra"])
copyfunction()