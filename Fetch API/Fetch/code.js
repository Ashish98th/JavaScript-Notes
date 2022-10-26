let p=fetch("https://goweather.herokuapp.com/weather/Ny")  //when fetch api we get promise

p.then((value1)=>{
    console.log(value1)
    return value1.json()

}).then((value2)=>{
    console.log(value2)

})
