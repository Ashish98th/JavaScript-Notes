const a={
    name:"Ashish",
    id:98,
    role:"Developer"
}

// document.write(a.name)
// document.write(a.role)
// document.write(a.id)

// console.log(a.name)
// console.log(a.id)
// console.log(a.role)


for(var key in a){
    document.write(key+" :"+a[key]+ "<br>")
}