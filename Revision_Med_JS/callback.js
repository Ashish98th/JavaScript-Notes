function a(cb){
    var x=7
    console.log(x)
    cb()
}
function b(){
    console.log("Javascript")
}

a(b);