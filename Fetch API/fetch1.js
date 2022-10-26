function getData(){
    console.log("Started getData")
    url="https://api.github.com/users";
    fetch(url).then((response)=>{
        console.log("inside first then function")
        return response.text();  //return promise
    }).then((data)=>{
        console.log("Inside second then")
        console.log(data);
    })
}
getData();