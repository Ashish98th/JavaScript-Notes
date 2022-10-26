console.log("Welcome");

/*
Element Selector:

1}Single Element Selector
2}Multi Element Selector

*/
let element=document.getElementById('myfirst');
// element=element.className    //class name of the element
// element=element.parentNode    //parentNode of thge selkected element
 element.style.color ='red';   //to color the content of thye selected element
element.innerText="Harry";  //to change the text of the content
element.innerHTML='<b>Harry</b>'
console.log(element.innerText); //reteurns the text only
console.log(element.innerHTML); //returns all the things from the selected elements 


let el=document.querySelector('#myfirst');

let ele=document.querySelector('div');  //it resturns the first matched selector not all
ele.style.color='green';
// console.log(ele);


// 2/Multi Element Selector 

let elems=document.getElementsByClassName('child');  ////returns the collection of elements which have child class

// console.log(elems);
console.log(elems[0]);
console.log(elems[0]);
console.log(elems[0]);
console.log(elems[4]);

let elmss=document.getElementsByTagName('div');  //returns all the div element

console.log(elmss);