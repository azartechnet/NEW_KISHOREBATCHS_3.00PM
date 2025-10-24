import React from "react";
import ReactDOM from 'react-dom/client';

const App=()=>{
  return(
    <h1>Welcome to the React Session</h1>
  )
}
const r1=ReactDOM.createRoot(document.getElementById('root'))
r1.render(<App/>)