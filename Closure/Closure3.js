function a(){
    let num=3;
    function b(){
        num=5;
        console.log(num);
    }
    num=100;
    return b;   //returning function b
}
const returnvalue=a();  //function b is stored here
returnvalue();
