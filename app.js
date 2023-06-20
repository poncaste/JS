//monedas
let dolar = 492;
let euro = 272;
let real = 86;


function calculo(num1, num2){
    let numero = num1/num2;
    numero = Number(numero.toFixed(2));
    return numero;
}

function chequeo(num){
    if (num>0){
        return false;
    } else {
        return true;
    }
}

function casaCambio(){

    alert("Bienvenido a la casa de cambio!");
    
    let moneda = prompt("Selecciona cual moneda te gustaria comprar entre Dolar, Real o Euro");
    let valor = Number(prompt("Ingrese el valor que deseas cambiar en pesos"));

    while (chequeo(valor)){
        valor = Number(prompt("Valor invalido! Favor ingrese el valor que seas cambiar en pesos"));
    } 


    switch(moneda.toLowerCase()) {
        case "dolar":
            alert("Usted recibirá: " + (calculo(valor,dolar)) + " dolares");
            break;
        case "real": 
            alert("Usted recibirá: " + (calculo(valor,real)) + " reales");
            break;
        case "euro":
            alert("Usted recibirá: " + (calculo(valor,euro)) + " euros");
            break;
        default:
            alert("No seleccionaste una moneda valida");
    }
}

casaCambio();