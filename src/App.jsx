import React from 'react'
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Titulo from './components/compclase' 
import Clasica from './components/compclasica'
import Flecha from './components/compflecha'
import Contador from './components/contador'
import Nodohijo from './components/nodohijo'
import Consolidado from './components/reutilizar/padre'
import Padrecss from './components/reutilizar/padrestyle'
import Condicion from './components/condicional/condicion'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Consolidado></Consolidado> */}
   {/* <Padrecss></Padrecss> */}
   <Condicion valor={10}></Condicion>
    </>
  )
}

export default App

// class Clase extends React.Component{
//   render(){
//   return <h1>INTRODUCCION A REACT</h1>    
//   }

// }