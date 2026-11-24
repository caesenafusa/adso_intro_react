//const Hijocss=({ ancho = '100px', alto = '100px', micolor = 'red' })=>{
const Hijocss=({ ancho, alto, micolor})=>{
return(
<div style={{width:ancho,height:alto,background:micolor}}></div>    
)
}
export default Hijocss