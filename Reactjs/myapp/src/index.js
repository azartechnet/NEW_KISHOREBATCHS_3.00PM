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

/*function Sample()
{
  const name="azar";
  return(
    <div style={{textAlign:'center',backgroundColor:'green'}}>
      <h1>This is Function Component::{name}</h1>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById("root"))
r1.render(<Sample/>)*/

//Class component

/*class Sample extends React.Component
{
  render()
  {
    return(
      <h1>Welcome to class Component</h1> 
  )
  }  
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample/>)*/

//Function Component using Onclick()

/*function SimpleButton()
{
  function showMessage()
  {
    alert("Button is Clicked")
  }
  return(
    <div style={{textAlign:'center'}}>
       <button onClick={showMessage}>ClickHere</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<SimpleButton/>)*/

//Function Component with props

/*function Sample(props)
{
  return(
    <div>
      <h1>Hello{props.name}{props.age}</h1>
      <p>This is Paragraph</p>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="38"/>)*/

//Component in Component

/*function Component1()
{
  return(
    <div>
      <h1>Component1</h1>
      <Component2/>
    </div>
  )
}
function Component2()
{
  return(
    <h1>This is Component2</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Component1/>)*/

//Constructor using props

/*class Sample extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state={name:props.name,age:props.age}
  }
  render()
  {
    return(
      <div>
        <h1>Welcome {this.props.name}{this.props.age}</h1>
      </div>
    )
  }

}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Sample name="azar" age="25"/>)*/

//Class component another program

/*class Counter extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={count:0}
  }
  increment=()=>{
    this.setState({count:this.state.count+1})
  }
  decrement=()=>{
    this.setState({count:this.state.count-1})
  }

  render()
  {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//Another Example

/*class ToggleExample extends React.Component
{
  constructor(props){
  super(props);
  this.state={visible:false}
  }
  toggle=()=>{
    this.setState({visible:!this.state.visible})

  }
  render()
  {
    return(
      <>
       <h1>ToggleExample</h1>
      <button onClick={this.toggle}>{this.state.visible?'Hide':'Show'}</button>
      {this.state.visible&&<p>Hello I am visible</p>}
      </>
     
    )
  }
 
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ToggleExample/>)*/

//React Event
/*function Football()
{
    const shoot=()=>{
      alert("Goal")
    }
    return(
      <>
         <button onClick={shoot}>Shoot</button>
      </>
    )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

//React argument passing
/*function Football()
{
  const shoot=(year)=>{
    alert(`Goal in ${year}`)
  }
  return(
    <>
       <button onClick={()=>shoot(2025)}>Shoot</button>
    </>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Football/>)*/

/*function MissedGoal()
{
  return<h1>Missed</h1>
}
function MadeGoal()
{
  return<h1>MadeGoal</h1>
}
function Football(props)
{
  const isGoal=props.isGoal;
  if(isGoal)
  {
    return<MadeGoal/>
  }
  else
  {
    return<MissedGoal/>
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
// r1.render(<Football isGoal={true}/>)
r1.render(<Football isGoal={Math.random()>0.5}/>)*/

//React List using Map

/*function Car(props)
{
  return<li>I am {props.b1}</li>
}
function Garage()
{
  const cars=["BMW","Audi","Toyota"]
  return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car b1={car}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/

//React using key

/*function Car(props)
{
  return<li>{props.id}{props.name}</li>
}
function Garage()
{
  const cars=[
    {id:1,name:"BMW"},
    {id:2,name:"Audi"},
    {id:3,name:"Toyota"}
  ]
  return(
    <div>
      <h1>Garage</h1>
      <ul>
        {cars.map((car)=><Car id={car.id} name={car.name}/>)}
      </ul>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Garage/>)*/
//Destructring state in class component
/*class Welcome extends React.Component
{
  render()
  {
    const {name,age}=this.props;
    return(
      <div>
        <h1>Hello{name}</h1>
        <h2>Age is {age}</h2>
      </div>
    )
  }
}
export default function App()
{
  return(<Welcome name="azar" age={30}/>)
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)*/

/*class Profile extends React.Component
{
  constructor()
  {
     super();
     this.state={
      name:"azar",
      age:38
     }
  }
  render()
  {
    const {name,age}=this.state;
    return(
      <div>
        <h2>Name:{name}</h2>
        <h3>Age is::{age}</h3>
      </div>
    )
  }
}
export default Profile;
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Profile/>)*/

//Destructuring in Array

/*function Skills()
{
  const skills=["java","python","c++"];
  const [first,second,third]=skills;
  return(
    <div>
      <h3>Skills</h3>
      <ul>
        <li>{first}</li>
        <li>{second}</li>
        <li>{third}</li>
      </ul>
    </div>
  )
}

export default Skills;

const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Skills/>)*/

//getDerivedStateFromProps

/*class Header extends React.Component
{
    constructor(props)
    {
      super(props);
      this.state={count:0};
    }
    static getDerivedStateFromProps(props,state)
    {
      console.log("getDerivedStateFromProps")
      return{count:props.count}
    }
    render()
    {
      return(
        <div>
          <h1>Header</h1>
          <p>Count:{this.state.count}</p>
        </div>
      )
    }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header count={10}/>);*/

//ComponentDidMount

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"}
  }
  componentDidMount()
  {
     console.log("ComponentDidMount")
     setTimeout(()=>{
      this.setState({favcolor:"blue"})
     },6000)
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>My Fav color::{this.state.favcolor}</p>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//Updating getDerivedStateFromProps

/*class Header extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={favcolor:"red"}
  }
  static getDerivedStateFromProps(props,state)
  {
    console.log("getDerivedFromProps")
  }
  changeColor=()=>{
    this.setState({favcolor:"blue"})
  }
  render()
  {
    return(
      <div>
        <h1>Header</h1>
        <p>MyFavcolor::{this.state.favcolor}</p>
        <button onClick={this.changeColor}>ChangeColor</button>
      </div>
    )
  }
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Header/>)*/

//React Hooks

import {useState,useEffect}from 'react';
/*function Counter()
{
  const [count,setCount]=useState(0);
  const [name,setName]=useState("mohamed");
  return(
    <div>
      <p>Count::{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <p>My Name is::{name}</p>
      <button onClick={()=>setName("azar")}>ChangeName</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Counter/>)*/

//React useEffect

/*function ClickCounter()
{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    document.title=`Clicked ${count} times`;
  })
  return(
    <div>
      <p>Count::{count}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<ClickCounter/>)*/

//Another useState()

/*function UserProfile()
{
  const [user,setUser]=useState({name:"mohamed",age:34,email:"mohamed@gmail.com"})
  const updateEmail=()=>{
    setUser({...user,email:"mohamed123@gmail.com"})
  }
  return(
    <div>
      <h1>Name:{user.name}</h1>
      <h1>Age:{user.age}</h1>
      <h1>Email:{user.email}</h1>
      <button onClick={updateEmail}>updateEmail</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<UserProfile/>)*/

//UseState Todolist

/*function Todolist()
{
  const [todos,setTodos]=useState(["azar","mohamed","raja"])
  const addTodo=()=>{
    setTodos([...todos,"mohan"])
  }
  const deletTodo=(index)=>{
    setTodos([...todos.slice(0,index),...todos.slice(index+1)])
  }
  return(
    <div>
      <h1>TodoList</h1>
      <ul>
        {todos.map((todo,index)=>
           <li>{index}{todo}
           <button onClick={()=>deletTodo(index)}>Delete</button>
           </li>
        )}
      </ul>
      <button onClick={addTodo}>Add</button>
    </div>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Todolist/>)*/

//Example 2 useEffect

const Example2=()=>{
  useEffect(()=>{
    const timer=setInterval(()=>{
      console.log("Time is running...")
    },6000)

    return()=>{
      clearInterval(timer);
      console.log("TimerCleared")
    }
  },[])
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<Example2/>)
