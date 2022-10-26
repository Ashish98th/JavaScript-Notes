// const text="How are You doing today?"
// const myarray=text.split(" ");

// console.log(myarray);
// // console.log(myarray[1])

// var str="Hello";
// console.log(text.length-1);

// const sentence="one two three four five six";
// const space=sentence.split(" ").length;
// console.log(space);

function numOfWords(str){
    // write code here
    // return the output , do not use console.log here
    const space=str.split(" ").length-1;
    return space;

}
let space=numOfWords("Hello")

console.log(space)