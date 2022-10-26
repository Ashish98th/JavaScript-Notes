function b(cb){
    cb();
}
function a(){
    console.log("Function a executed")
}
b(a);  // a is a function passed as an argument while calling b