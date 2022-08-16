const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// Biblioteca para cuerpos restringidoos
const Constraint = Matter.Constraint;

var motorJuego1;
var mundo1Juego1;
var caja001,caja002,caja003,caja004,caja005,caja006;
var oink1,oink2;
var bird1;
var pisoMadera001,pisoMadera002;
var techoMadera001,techoMadera002;
var piso,baseResortera; 
var resortera;


function setup() {
 
  var canvas = createCanvas(windowWidth,windowHeight);

  motorJuego1 = Engine.create();
  // Aqui estoy guardando el nuevo motor dentro del nuevo mundo
  mundo1Juego1 = motorJuego1.world;

  // Codigo cajas POO (classCaja.js)
  caja001 =  new classCaja(1031,599,75,75);
  caja002 =  new classCaja(1181,599,75,75);
  pisoMadera001 = new classPisoMadera(1101,505,231,21,0);
  caja003 =  new classCaja(1031,430,75,75);
  caja004 =  new classCaja(1181,430,75,75);
  pisoMadera002 = new classPisoMadera(1101,409,231,21,0);
  caja005 =  new classCaja(1107,334,75,75);
  // Los angulos en JavaScript se manejan en RAD
  // PI = 360;  PI/2 = 180;  PI/8 = 45
  techoMadera001 = new classPisoMadera(1031,251,141,21,-PI/8);
  techoMadera002 = new classPisoMadera(1171,251,141,21,PI/8);
  oink1 = new classPuerquito(1106,599,55,55);
  oink2 = new classPuerquito(1106,430,55,55);
  bird1 = new classAve(706,599,55,55);

  // Codigo piso  POO (classPiso.js)
  // constructor espera: (posicionX, posicionY, anchoPiso, altoPiso)
  piso = new classPiso(0,(height-(height/21)),(width*2),(height/21));
  baseResortera = new classPlataforma(206,461,199,399);
  resortera = new classResortera(bird1.body, {x:300, y:100});
  
}

function draw() {
  background(255,255,255);  
  // Encender el motor
  Engine.update(motorJuego1);

  // Esta propiedad (center) sirve para que el suelo y otros elementos sean centrados hacia el punto
  // "0" del plano cartesiano (los recorre hacia la izq)
  // rectMode(CENTER);
  // En la primer ejecucion la caja no se actualiza/mueve por que tengo predefinidos las posiciones en X y Y
  // rect(31,15,100,50);
  // Editamos los primeros parametros para que sean "variables" y el motor pueda afectarlos:
  piso.dibujarPiso();
  baseResortera.dibujarPiso();

  
  caja001.dibujarPoligono();
  caja002.dibujarPoligono();
  pisoMadera001.dibujarPoligono();
  caja003.dibujarPoligono();
  caja004.dibujarPoligono();
  pisoMadera002.dibujarPoligono();
  caja005.dibujarPoligono();
  techoMadera001.dibujarPoligono();
  techoMadera002.dibujarPoligono();
  oink1.dibujarPoligono();
  oink2.dibujarPoligono();
  bird1.dibujarPoligono();
  resortera.dibujarResortera();

  /* 
  caja001.dibujarCaja();
  caja002.dibujarCaja();
  caja003.dibujarCaja();
  */

}