function calcular(){

let paraelprimernum = parseFloat(document.getElementById('nm1').value);
let paraelsegdnum = parseFloat(document.getElementById('nm2').value);

let operacionn = document.querySelector('input[name="ope"]:checked');

if (operacionn === null) {
    alert("Elije la operación");
    return;
}

let resultado;

if (operacionn.value === 'sumaa') {
    resultado = paraelprimernum + paraelsegdnum;
}
else if (operacionn.value === 'rees') {
    resultado = paraelprimernum - paraelsegdnum;
}
else if (operacionn.value === 'multii') {
    resultado = paraelprimernum * paraelsegdnum;
}
else if (operacionn.value === 'divi') {
    resultado = paraelprimernum / paraelsegdnum;
}

alert("El resultado es: " + resultado);
}


console.log("Primer número: " + d1);
    console.log("Resultado de la resta: " + resta);
    console.log(mensaje);


        if (resta > d1) {
        ms= "La resta es mayor que el primer numero";
    } else if (resta < d1) {
        ms = "La resta es menor que el primer número";
    } else {
        ms = "La resta es igual al primer número";
    }

  
    alert("Resultado de la resta: " + resta);
    alert(ms);
});


let ms = " ";