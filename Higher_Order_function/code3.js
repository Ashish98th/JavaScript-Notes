function a(x){
    function b(y){
        function c(z){
            console.log(x*y*z)
console.log("c is called")


// return x*y*z;
        }
        return c;
        
    }
    
    return b;
    

}

// const bcall=a()  //calling a here==>b_function will come here
// const ccall=bcall() // calling b here==>c_function will come here
// const final=ccall()//calling c here

// ---------------------------------------------------------------------------->>>>...... 

const final=(1)(2)(3)