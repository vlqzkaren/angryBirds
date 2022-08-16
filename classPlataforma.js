/* NUEVA CLASE CAJA IMPLEMENTADA CON HERENCIA  */

class classPlataforma extends classPiso {

    constructor(posicionX, posicionY, anchoPiso, altoPiso){
    
        super(posicionX, posicionY, anchoPiso, altoPiso); 

        this.imagenPiso = loadImage("img/base.png");
    }
    
}