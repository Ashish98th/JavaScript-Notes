import React, { useEffect, useState } from "react";

// import logo from "./logo.svg";

// import "./App.css";

// import Student from "./Student";

function App() {

const [formData, setFormData] = useState({

name: "",

interest: "",

tnc: false,

});

const handleFormInput = (e, objectName) => {

console.log("change", e.target.value, objectName);

if (objectName == "tnc") {

setFormData({ ...formData, tnc: e.target.checked }); //{name :"",interest :'',tnc : true}

} else if (objectName == "interest") {

setFormData({ ...formData, interest: e.target.value }); //{name :"",interest :'Marvel',tnc : true}

} else if (objectName == "name") {

setFormData({ ...formData, name: e.target.value }); //{name :"Rahul",interest :'Marvel',tnc : true}

}

};

function getFormData(e) {

e.preventDefault(); //preventDefault is a function to prevent the submission of form

console.log("formData", formData);

//logic

}

// useEffect(() => {

// console.log("formData", formData);

// }, [formData]);

return (

<div className="App">

<h1>Handle Form</h1>

<form onSubmit={getFormData}>

{/* event is basically to prevent the page refresh when it was called because we need to create single page application */}

<input

type="text"

placeholder="enter Your name..."

onChange={(e) => handleFormInput(e, "name")}

/>

<br />

<br />

<select onChange={(e) => handleFormInput(e, "interest")}>

<option>Select Options</option>

<option>Marvel</option>

<option>DC</option>

</select>

<br />

<br />

<input

type="checkbox"

onChange={(e) => handleFormInput(e, "tnc")}

/>{" "}

<span>Accept Terms & conditions</span>

<br />

<br />

<button type="submit">Submit</button>

</form>

Name : <h3>{formData.name}</h3>

Interest : <h3>{formData.interest}</h3>

Terms : <h3>{formData.tnc && "True"}</h3>

</div>

);

}

export default App;

