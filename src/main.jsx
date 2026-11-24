
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// class Clase extends React.Component{
//   render(){
//   return <h1>INTRODUCCION A REACT</h1>    
//   }

// }

// const Flecha=()=><h1>INTRODUCCION A REACT funcion FLECHA</h1>

// function  Clasica(){
//   return <h1>DESDE FUNCION CLASICA</h1>
// }



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
