var ages=[10,23,34,6];


// var output=ages.filter(function name); function in which all test will be done
var output=ages.filter(checkAdult);
console.log(output);

function checkAdult(age){  
    console.log(age); //age=10,23,34,6
    return age>=18;
}








// filter() method creates an array filled with all array elements that pass a test 