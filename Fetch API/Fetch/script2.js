fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>response.json())
.then((data)=>{
    for(var x in data){
        var a=`name : ${data[x].name}  - email : ${data[x].email} - city : ${data[x].address.city}  <br>`;
        document.write(a)
        
    }
})
.catch((error)=>console.log(error))