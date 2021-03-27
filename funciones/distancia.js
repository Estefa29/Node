//entradas
let cordenadaFinalX=70;
let cordenadaFinalY=-50;

let cordenadaInicialX=0;
let cordenadaInicialY=0;
//funciones
function CalcularDistancia(xinicial,xfinal,yinicial,yfinal)
{
    //restando cantidades
    let cordenadasX=xfinal-xinicial;
    let cordenadasY=yfinal-yinicial;
    //elevando al cuadrado cada resta
    let cuadradoX=Math.pow(cordenadasX,2);
    let cuadradoY=Math.pow(cordenadasY,2);
    //sumando los cuadrados obtenidos
    let sumaTotal=cuadradoX+cuadradoY;
    //obtengo la raiz cuadrada de la suma sumaTotal  
    let distancia=Math.sqrt(sumaTotal);
    return(distancia);

}
console.log(CalcularDistancia(cordenadaInicialX,cordenadaFinalX,cordenadaInicialY,cordenadaFinalY));

let cordenadasX=(xfinal,xinicial)=>(xfinal-xinicial);
let cordenadasY=(Yfinal,Yinicial)=>(Yfinal-Yinicial);
let cuadradoXY=(cordenadasX,cordenadasY)=>(cordenadasX*cordenadasX)+(cordenadasY*cordenadasY);
let distancia=(cuadradoXY)=>Math.sqrt(cuadradoXY);
console.log(distancia(7400));
