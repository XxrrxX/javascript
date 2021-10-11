function main(v) {
 var distancia = parseInt(v,10);
 var horas = distancia/40;
 var minutos = horas*60;
 console.log(minutos);
 document.write(minutos);
}
var V = prompt("Ingresa velocidad: ");
main(V);
