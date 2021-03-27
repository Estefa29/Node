// 2.PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes
// códigos de acceso a las naves de guerra los cuáles reposan en
// la base de datos central, para ello debe programar una función
// que permita recibir la palabra clave de cada nave y separar
// imprimiendo solo el nombre del piloto asignado a cada nave.
// Tenga en cuenta que el formato de todos los datos es el
// siguiente:
// ARQ2555= "Sara Bel-Sun"
// ARQ2556= "Nodin Chavdri"
// ARQ2557= "Finn"
// DATOS BASE CENTRAL
let naveA = "ARQ2555:Sara Bel-Sun";
let naveB = "ARQ2556: Nodin Chavdri";
let naveC ="ARQ2557:Finn";
function encontrarPiloto(dato){

let recorte=dato.substring(8);
let separacion=recorte.split(":");
return(separacion);
}
console.log(encontrarPiloto(naveA));
console.log(encontrarPiloto(naveB));
console.log(encontrarPiloto(naveC));








// let cordenadasX=(xfinal,xinicial)=>(xfinal-xinicial);
// let cordenadasY=(Yfinal,Yinicial)=>(Yfinal-Yinicial);
// let cuadradoXY=(cordenadasX,cordenadasY)=>(cordenadasX*cordenadasX)+(cordenadasY*cordenadasY);
// let distancia=(cuadradoXY)=>Math.sqrt(cuadradoXY);
// console.log(distancia(7400));
