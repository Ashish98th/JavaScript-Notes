var letter=["a","b","c","a","b"];

var result=letter.filter(duplicate);

function duplicate(val,index){
    // console.log(val,index); //val=a index=0 etc.

     return letter.indexOf(val)==index;
    
}
console.log(result);


// index- 0(a),1(b),2(c),3(a),4(b)
// indexOf- 0(a),1(b),2(c)