class classPisoMadera extends classPadre {
    constructor(posicionX, posicionY, anchoPoligono, altoPoligono, anguloPoligono){
        
        super(posicionX, posicionY, anchoPoligono, altoPoligono, anguloPoligono);

        this.imagenPoligono = loadImage("img/wood2.png");

        Matter.Body.setAngle(this.CrearPoligono, anguloPoligono);

    }

}