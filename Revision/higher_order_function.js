// function b(){
//     function a(){
//         console.log('something')
//     }
//     return a;
// }
// var result=b()
// result()


function b(){
    function a(){
        console.log('something')
    }
    return a;
}
b()()


