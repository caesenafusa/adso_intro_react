/*
REGRESAR A ESTE EJERCICIO CUANDO SE VEA EL HOOK USEEFFECT
*/

import { useState } from 'react'
const p = 'ADSO'
const Data = () => {
const [count, setCount] = useState(0)
const f = 3293804
let num=Math.round(Math.random()*100)
//const parimpar=num%2==0?'par':'impar'
let parimpar=''
if(num%2==0){
    parimpar='par'
    //setTimeout(()=>setCount(count+1),5000)
    const f=setInterval(()=>{
        setCount(count+1)
        if(count!=0)
            clearInterval(f)
    },5000)
}
else{
    parimpar='impar'
    //setTimeout(()=>setCount(count+2),5000)    
    const f=setInterval(()=>{
        setCount(count+2)
        if(count!=0)
            clearInterval(f)
    },5000)
}

return (
        <div>
            <h1>PROGRAMA:{p}</h1>
            <h2>Ficha={f}</h2>
            <h2>Numero aleatorio={num}</h2>
            <h2>{parimpar}</h2>
            <h2>variable count={count}</h2>
        </div>
    )
}

export default Data