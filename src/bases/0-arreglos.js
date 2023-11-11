const personas={
    name:"camilo",
    edad:23,
    apellido:"rosania"
}

console.log(personas);


//arreglos
const arreglo = [1,2,3,4];
const arreglo2 = [...arreglo,5];
const arreglo3 = arreglo2.map(function(numero){
    return numero %2
})


console.log(arreglo3);