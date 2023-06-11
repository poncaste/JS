

let numero  = Number(prompt("Table del: "))

console.log(numero)
console.log(typeof numero)


for(let i=0; i<=10; i+=1){
    let res = numero * i;
    document.write("<p>" +numero + " X " + i + " = " + res + "</p>")
    console.log(numero + " X " + i + " = " + res)
}
