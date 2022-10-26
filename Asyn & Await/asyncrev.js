async function message(){
    console.log("message 1");
    await console.log("message 2");
    console.log("message 3")
}
console.log("message 4")

message();
console.log("message 5")