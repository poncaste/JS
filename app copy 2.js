// Ciclos por conteo

// Ciclo for

//Los ciclos for se definen en 3 partes

// inicializador --> inicializacion de una variable
// condicion --> hasta cuanto voy a contar
// incremento --> cuanto quiero que itere en cada ocacion

/* for(let i = 0; i < 10; i++){
    // lo que queremos que se repitaç
    console.log("El valor de i es: " + i)
}
console.log("fin") */

/* for(let i = 0; i <= 10; i+=2){
    // lo que queremos que se repita
    console.log("El valor de i es: " + i)
} */

for(let i=0; i<= 10; i++){
    if(i % 2 === 0){
        console.log("Este numero es par " + i)
    } else {
        console.log("Este numero es impar " + i)
    }
}
