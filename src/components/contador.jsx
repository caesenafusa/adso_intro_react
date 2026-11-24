import './contador.css'
import { useState } from 'react'
const Contador=()=>{
const [count, setCount] = useState(0)
const vec=[1,2,3,4,5]

const prueba=()=>vec
const sumar=()=>{
    setCount(count+1)
}
const restar=()=>{
    setCount(count-1)
}
const reinicio=()=>{
    setCount(0)
}

return (
        <div className='contenedor'>
            <h1>CONTADOR</h1>
            <br />
            <h1>{count}</h1>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
            <br/>
            <button onClick={reinicio}>reiniciar</button>
            <h2>{prueba()}</h2>
        </div>
    )
}
export default Contador