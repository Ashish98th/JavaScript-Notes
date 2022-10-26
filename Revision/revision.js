let nestedarray=[1,[2],3]
let deepclone=JSON.parse(JSON.stringify(nestedarray))

console.log(deepclone)