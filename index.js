/*
1- Dados los extremos inferior y superior de un rango, informar si el numero ingresado esta en rango o no

2- Si el numero esta en rango, informar si el numero es par (solamente)

3- Si el numero no esta en rango, informar si el numero es impar (solamente)
*/

const rangoInferior = parseInt(prompt("Ingrese el numero de rango inferior"));
const rangoSuperior = parseInt(prompt("Ingrese el numero de rango superior"));
const numeroComparar = parseInt(prompt("Ingrese el numero a verificar en rango"));
const comparativa = numeroComparar % 2;

if(rangoInferior <= numeroComparar && rangoSuperior >= numeroComparar){
    alert("El tercer numero se encuentra en rango.");
    if(comparativa == 0){
        alert("El numero es par");
    }
} else {
    alert("El tercer numero se encuentra en rango.");
    if(comparativa == 1){
        alert("El numero es impar");
    }
}