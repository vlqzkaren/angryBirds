/* NUEVA CLASE CAJA IMPLEMENTADA CON HERENCIA  */

class classPuerquito extends classPadre {

    constructor(posicionX, posicionY, anchoPoligono, altoPoligono){
        // esta palabra reservada sirve para indicar que se HEREDEN todas las propiedades y metodos de la clase padre
        // como parametros recibe lo mismo q le este pasando al constructor

        super(posicionX, posicionY, anchoPoligono, altoPoligono); 

        this.imagenPoligono = loadImage("img/enemy.png");

    }

    
}