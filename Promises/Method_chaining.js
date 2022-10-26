const promiseObj=new Promise((resolve,reject)=>{
    let num=10;
    resolve(num);
}).then(
    (value)=>{
        console.log(value);
        return value+10;  //then returns a promise
    }
).then(
    (eval_value)=>{
        console.log(eval_value);
    }
)