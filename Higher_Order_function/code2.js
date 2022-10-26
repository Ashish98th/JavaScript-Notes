const a=function(){
    const b=function(){
        console.log('something')
    }
    return b;
}
a()();

// A function that accepts or returns another function is called Higher order function 
