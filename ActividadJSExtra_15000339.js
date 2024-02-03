var compu = 0
var jugador = 0

var valor1 =  Math.floor(Math.random() * (11 - 1 + 1) + 1);
var valor2 =  Math.floor(Math.random() * (11 - 1 + 1) + 1);

console.log(valor1)
console.log(valor2)

compu = compu + valor1
console.log(compu)
compu = valor1 + valor2
console.log(compu)

var valor3 =  Math.floor(Math.random() * (11 - 1 + 1) + 1);
var valor4 =  Math.floor(Math.random() * (11 - 1 + 1) + 1);

alert ("Jugador su carta número 1 es: " + valor3)
alert ("Jugador su carta número 2 es: " + valor4)

jugador = jugador + valor3
jugador = valor3 + valor4
alert ("Jugador la suma de sus cartas es: " + jugador)

var opcion;
opcion = prompt("Jugador ¿Desea otra carta? SI/NO"); 
console.log(opcion)

while (opcion == "SI"){

  if (opcion == "SI"){
    var valor = Math.floor(Math.random() * (11 - 1 + 1) + 1);
    alert ("Jugador su carta es: " + valor)
    jugador = jugador + valor
    alert ("Jugador la suma de sus cartas es: " + jugador)
    
    if (jugador >= 22){
      alert ("Lastima, su total es " + jugador + " suerte para la próxima")
      alert ("El valor de la computadora es: " + compu)
     } 
    
      if (jugador <= 20){
        opcion = prompt("Jugador ¿Desea otra carta? SI/NO"); 
        console.log(opcion)
   
     } 
 } 
  }