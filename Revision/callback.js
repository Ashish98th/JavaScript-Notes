function b(cb){
    console.log('b is called')
    cb()
  
}
function a(){
    console.log('a is called')
   }


b(a)