/* NUEVA CLASE CAJA IMPLEMENTADA CON HERENCIA  */

class classCaja extends classPadre {

    constructor(posicionX, posicionY, anchoPoligono, altoPoligono){
        // esta palabra reservada sirve para indicar que se HEREDEN todas las propiedades y metodos de la clase padre
        // como parametros recibe lo mismo q le este pasando al constructor

        super(posicionX, posicionY, anchoPoligono, altoPoligono); 

        this.imagenPoligono = loadImage("img/wood1.png");

        // this.imagenCaja NO lO RECONOCE POR QUE NO ES PARTE DE LA CLASE PADRE/NO FUE DEFINIDA ESTA
        // PROPIEDAD EN LA CLASE PADRE:

        // this.imagenCaja = loadImage("img/wood2.png");

    }

    
}



/* 

ESTA CLASE FUNCIONABA ANTES DE IMPLEMENTAR LA HERENCIA Y CLASSPADRE.JS


class classCaja{
    constructor(posicionX, posicionY, anchoCaja, altoCaja){
        
        var propiedadesCaja = { "restitution": 0.07, "friction" : 1.5 }

        this.CrearRectangulo = Bodies.rectangle(posicionX, posicionY, anchoCaja, altoCaja, propiedadesCaja);
        
        this.altoCaja = altoCaja;
        this.anchoCaja = anchoCaja;

        // console.log("--- VALOR ALTO CAJA: " + this.altoCaja + " VALOR ANCHO CAJA: " + this.anchoCaja + "---");

        World.add(mundo1Juego1,this.CrearRectangulo);
    }

    dibujarCaja(){
        rectMode(CENTER);
        rect(this.CrearRectangulo.position.x, this.CrearRectangulo.position.y, this.anchoCaja, this.altoCaja);
    }

}

*/