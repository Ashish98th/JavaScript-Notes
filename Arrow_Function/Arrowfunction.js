

 let screen=function(name){
    console.log("Hello" + name)
    return 1;
}


console.log(screen('Ashish'));

// var getname =()=>{
//     var x=7;
//     console.log(x);
// }

// getname();

//When getname is a arrow function it behaves like a variable and we can store this in variable
//memory allocated for getname and stores undefined in it

const greet=()=>"Good Morning"
console.log(greet)

console.log(greet())

const greeting=()=>{return"Good Evening"}

console.log(greeting())

