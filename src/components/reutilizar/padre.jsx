import Tarjeta from "./hijo";
const Consolidado=()=>{
    return(
        <>
        <h1>TARJETA DE PRESENTACION</h1>
        <Tarjeta 
        name={'Pablo Milanes'} 
        program={'ADSO'}
        code={3293804}
        >
            
        </Tarjeta>
        <br />
        <Tarjeta
        name={'Silvio Rodriguez'}
        program={'ADSO'}
        code={3293804}
        >
        </Tarjeta>
        <br />        
        <Tarjeta
        name={'chucho Valdez'}
        program={'Contabilidad'}
        code={3293333}
        ></Tarjeta>
</>

    )
}
export default Consolidado