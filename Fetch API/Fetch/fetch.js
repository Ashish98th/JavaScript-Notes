const cityName = 'Agartala';
  const apiKey = "529c2297fa5a802c1a2e50ac51fa7bd8";
const loc = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${apiKey}`;

fetch(loc).then((response)=>response.json()).then((data)=>console.log(data));