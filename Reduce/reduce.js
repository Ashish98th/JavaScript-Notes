const arr=[1,2,3,4,5]

const output=arr.reduce(function(acc,curr){
    acc=acc+curr;
    return acc;
},0)

console.log(output);

//second argument is the intitial value which You need to pass inside this accumualtor

// curr ==> repreesnts the values inside the array 
//acc==>used to accumualte the values,accumualte the result we have to get out of those values which are present in the array

//curr==>arr[i]
//acc==>sum

// What is reduce used for?
// reduce() is a useful method that reduces an array to a value