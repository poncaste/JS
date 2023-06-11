/* for(let i=1; i< 10; i++){
    //console.log(i)
     if(i === 5){
        break;
    } 
    alert(i)
} */

 /* for(let i=1; i< 10; i++){
    //console.log(i)
    if(i === 5){
        continue;
    }
    alert(i)
}  */

 for(let i=1; i< 5; i++){
    let numero = Number(prompt("Cargar numero"))
    if( isNaN(numero) ){
        continue;
    }
    console.log("puesto: " + i + " Numero " + numero);
}  
