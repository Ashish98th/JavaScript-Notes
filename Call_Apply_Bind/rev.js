const object1={
    firstname:"Ashish",
    lastname:"Nath",
    printfullname:function(hometown,state){
        console.log(this.firstname +" " + this.lastname  + " "+ hometown + " " + state);
    }
}

const object2={
    firstname:"Sachin",
    lastname:"Tendulkar",
}

let result=object1.printfullname.bind(object2,["Mumbai","Maharashtra"]);
console.log(result)
result()