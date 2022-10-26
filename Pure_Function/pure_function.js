function name(a) {
    return a * 0.05;
}

console.log(name(5))


// This isn't a pure function
var Rate=10;

function nam(c){
    return c+Rate;
}

console.log(nam(5))

//Here the output is depended on external variable Rate





// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.