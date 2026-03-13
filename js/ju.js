function buscar(){
    let textobus=document.getElementById("busqueda")

    if(miA.includes(textobus)){
   console.log(textobus+ "si esta")
    }else{
console.log(textobus+"no esta")
    }
}




function buscar() {
    let textoBusqueda = document.getElementById("busqueda").value;

    if (miA.includes(textoBusqueda)) {
        console.log(textoBusqueda + " Si se encuentra");
    } else {
        console.log(textoBusqueda + " No se encuentra");
    




        }
    }


     <input type="text" id="busqueda">
        <button type="button" onclick="buscar()">Buscar</button>