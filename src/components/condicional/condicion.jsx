const Condicion=({valor})=>{
if(valor==0){
    return(<h1>es cero</h1>)
}
else if (valor==1){
    return(<h1>es uno</h1>)
}
else{
    return(<h1>Ni cero ni uno</h1>)
}
}
export default Condicion