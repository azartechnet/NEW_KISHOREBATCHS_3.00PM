import React from "react";
import ReactDOM from 'react-dom/client';

/*const App=()=>{
  return(
    <>
    <h1>Heading-1</h1>
  <h2>Heading-2</h2>
    </>
  
    
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

//Dynamic Rendering

/*const Sample=()=>{
  const name="azar";
  const age=30;
  return(
    <div>
      <h1>Hello{name}</h1>
      <p>Your age is::{age}</p>
      <p>Today date is::{new Date().toLocaleDateString()}</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Using Login Page

/*const Login=()=>{
  return(
    <>
    <form>
      <label>UserName</label>
      <input type="text"/>
      <label>Password</label>
      <input type="text"/>
      <input type="submit" value="Login"/>
    </form>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Login/>)*/

//Without JSX

/*const myelem1=React.createElement("h1",null,"welcome")
const myelem2=React.createElement("p",null,"This is a Paragraph")
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(React.createElement("div",null,myelem1,myelem2))*/

//React List

/*const MyElem=()=>{
  return(
    <div>
      <h1>MyList</h1>
      <ul>
        <li>list-1</li>
        <li>list-2</li>
        <li>list-3</li>
      </ul>
      <ol>
        <li>list-1</li>
        <li>list-2</li>
        <li>list-3</li>
      </ol>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyElem/>)*/

//Conditional Rendering

/*const x=20;
let text="";
if(x>10)
{
  text="x is greater than 10"
}
else
{
  text="x is less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyElem/>)*/

//Else if ladder

/*const x=10;
let text="";
if(x>0)
{
  text="x is greater than 10"
}
else if(x==10)
{
  text="Equal to 10"
}
else
{
  text="x is less than 10"
}
const MyElem=()=>{
  return(
    <div>
      <h1>{text}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<MyElem/>)*/

//Nested if else and switch statement

//Function Component

function Sample()
{
  const name="azar";
  return(
    <div style={{textAlign:'center',backgroundColor:'green'}}>
      <h1>This is Function Component::{name}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)