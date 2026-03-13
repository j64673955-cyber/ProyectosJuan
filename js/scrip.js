/*
for(i=1;i<=20;i++){
    if (i==10){
        console.log("Mitad")
    }else{
        console.log(i)
    }
}
*/
/*
  let precio= 350
  let presupuesto= 500
  resultado1= presupuesto - precio
 resultado2= precio - presupuesto

   if(presupuesto>=350){
    console.log("te sobran: "+ resultado1)

  }else{
    console.log("no te alcanza te faltan: "+resultado2)
  }


for(i=1;i<=15;i++){
    if(i%2===0){
        console.log("es par")

    }else{
        console.log("impar")
    }
}
*/
/*
function saludEdad(nombre,edad){
console.log("Hola "+ nombre)
console.log("Tienes: "+ edad + " años")
}
saludEdad("Juan",18)

function esMayordeedad(edad){
    if(edad>=18){
      return true
    }else{
       return false
    }

}

let mall = esMayordeedad(17)

console.log("es mayor de edad?; "+ mall)*/



function calcularpromedio(calif1, calif2, calif3){
            return (calif1 + calif2 + calif3)/3
        
}

let promedio = calcularpromedio(8,8,7)

if (promedio>=6){
    console.log("aprobado")

}else{
    console.log(" reprobado")
}


  //formulario tener una etueta para ingresar agregar un input htm para buscar y otro boton onclik funcion buscar includes si existe el nombre que se ingreso