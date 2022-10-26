function a(){
    const num=3;
    function b(){
        console.log(num)
       
    }
    return b;
    
}
const returnvalue=a();
console.log(returnvalue)
returnvalue()