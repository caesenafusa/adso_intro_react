import { useState } from 'react'



const Datatest = () => {
const [x, setX] = useState(0)
setTimeout(()=>setX(x+1),2000)
//setX(x+1)    
return (        
            <h1>count:{x}</h1>        
    )
}

export default Datatest