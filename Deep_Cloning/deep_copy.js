let arr =[1,[2],3]
let arraycopy=JSON.parse(JSON.stringify(arr))

arraycopy[0]=3
arraycopy[1][0]=8

console.log(arr)

