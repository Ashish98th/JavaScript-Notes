function getdata(cb){
     const data=5;
    cb(data);
}
function b(data){
    console.log(data);  //This will print
}

getdata(b)