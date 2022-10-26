function runtext(){
    console.log("Hello")
}

setInterval(runtext,3000);


// The setInterval() method repeatedly calls afunction or executes a code with a fixed time delay between each call 

//It returns an interval id which uniquely identifies the interval,you can remove it by calling clearInterval()

// Syntax: setInterval(function,milliseconds,parameter1,parameter2);

// ex:var intervalID=setInterval(show,2000)