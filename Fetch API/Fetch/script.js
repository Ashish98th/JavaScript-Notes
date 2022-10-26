fetch("content/readme.txt").then((response)=>{
    return response.text();
  }).then((data)=>{
    // console.log(result);
    document.write(data);
  })