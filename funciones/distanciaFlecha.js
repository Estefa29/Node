
let cordenadaFinalX=70,cordenadaFinalY=-50, cordenadaInicialX=0, cordenadaInicialY=0;
let CalcularDistancia=(xinicial,xfinal,yinicial,yfinal)=>((cordenadasX=xfinal-xinicial,cordenadasY=yfinal-yinicial,
cuadradoX=Math.pow(cordenadasX,2),cuadradoY=Math.pow(cordenadasY,2),sumaTotal=cuadradoX+cuadradoY),
distancia=Math.sqrt(sumaTotal)
);
console.log(CalcularDistancia(cordenadaInicialX,cordenadaFinalX,cordenadaInicialY,cordenadaFinalY));
// let cordenadasXY=(xfinal,xinicial,Yfinal,Yinicial)=>(xfinal-xinicial)+(Yfinal-Yinicial);
// let cuadradoXY=(cordenadasXY)=>Math.pow(cordenadasXY,2);
// let distancia=(cuadradoXY)=>Math.sqrt(cuadradoXY);

//console.log(distancia(70,0,-50,0));  
// let cordenadasX=(xfinal,xinicial)=>(xfinal-xinicial);
// let cordenadasY=(Yfinal,Yinicial)=>(Yfinal-Yinicial);
// let cuadradoXY=(cordenadasX,cordenadasY)=>(cordenadasX*cordenadasX)+(cordenadasY*cordenadasY);
// let distancia=(cuadradoXY)=>Math.sqrt(cuadradoXY);


// me dio duro cojerle el tiro a la funcion flecha pero aprendi...