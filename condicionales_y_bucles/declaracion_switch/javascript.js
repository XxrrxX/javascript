/*
==================
Declaracion switch
==================
*/
var day = prompt("Escoje un numero:\n(1) (2) (3) (4) (5) (6) (7)");
switch (day){
case "1":
  document.write("Domingo");
break;
case "2":
  document.write("Lunes");
break;
case "3":
  document.write("Martes");
break;
case "4":
  document.write("Miercoles");
break;
case "5":
  document.write("Jueves");
break;
case "6":
  document.write("Viernes");
break;
case "7":
  document.write("Sabado");
break ;
default:
 document.write("Opcion no valida");
}

