function a(cb){
   cb()
}

function b(){
    console.log("callback is called")
}

a(b)