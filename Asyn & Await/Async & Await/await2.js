async function test(){
    console.log("Message 2");
   const response= await fetch("https://jsonplaceholder.typicode.com/posts");
   console.log(response);
   
}

console.log("Message 1")
test()
console.log("Message 5")
