// Condiciona Multiple

// switch

const metodoPago = prompt("Cargar metodo de pago");

switch(metodoPago.toLowerCase()) {
    case "efectivo":
        console.log("Pagas con efectivo");
        break;
    case "cheque": 
        console.log("Pagas con cheque");
        break;
    case "tarjeta":
        console.log("Pagas con tarjeta");
        break;
    case "mp": 
        console.log("Pagaste con Mercado Pago");
        break;
    default:
        console.log("No seleccionaste un metodo de pago valido");
}
