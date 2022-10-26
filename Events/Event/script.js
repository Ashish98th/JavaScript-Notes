document.querySelector('button').addEventListener('click',(event)=>{
    // console.log(event);  //event is gigantic object
    let variable;
    console.log("You have clicked on button");
    variable=event.target;  //target is where You have clicked
    console.log(variable);
});