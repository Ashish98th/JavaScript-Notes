function b(cb){
    console.log('Hey');

//Do something
//Do something else
//run callback
    cb();
}

function a(){
    console.log("Function a executed")
} 
b(a)




//A callback function can run after the another function has finished