var dia=1;
function main(distancia){
for(i=7;i<distancia;i+=7){
i-=2;
dia++;
}
document.write(dia);
}
var d = prompt("Ingresa la distancia: ");
main(d);

