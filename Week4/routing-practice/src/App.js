import './App.css';
import React from 'react'
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom"
import {useParams} from "react-router-dom"

function App() {

  const Home = (prop) => {
    return(
      <div>
        <h1>Welcome!</h1>
        <Link to={"/4"}>Go to number </Link>
      </div>
      
    )
  }

  const Number = (prop) => {
    return(
      <div>
        <h1>4</h1>
        <Link to={"/home"}>Go to welcome page </Link>
      </div>
 
    )
  }

  const Hello = (prop) => {
    const {name} = useParams()
    return(
      <div>
        <h1>{`Hello ${name}`}</h1>
      </div>
    )
  }

  const HelloColors = (prop) => {
    const {color,bgcolor} = useParams()
    return(
      <div>
        <h1 style={{color: color, backgroundColor: bgcolor }}>Hello</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <BrowserRouter>
      <h1>Routing Example</h1>
      <Link to={"/home"}>Go to welcome page </Link>
      <Link to={"/Hello/Danny"}>Danny</Link>
      <Link to={"/Hello/Nancy"}>Nancy</Link>
      <Link to={"/Hello/Emily"}>Emily</Link>
      <Link to={"/HelloColors/red/blue"}> Red and Blue</Link>
      <Link to={"/HelloColors/gold/green"}> Gold and Green</Link>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/4' element={<Number/>} />
          <Route path='/Hello/:name' element={<Hello/>} />
          <Route path='/HelloColors/:color/:bgcolor' element={<HelloColors/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
