class classPadre{
    constructor(posicionX, posicionY, anchoPoligono, altoPoligono, anguloPoligono){

        var propiedadesPoligono = {
            "restitution": 0.07,
            "friction" : 1.5
        }

        // molde objeto "CrearPoligono"      metodo "rectangle()"
        this.CrearPoligono = Bodies.rectangle(posicionX, posicionY, anchoPoligono, altoPoligono, propiedadesPoligono);

        this.anchoPoligono = anchoPoligono;
        this.altoPoligono = altoPoligono;


        this.imagenPoligono = loadImage("img/base.png");

        World.add(mundo1Juego1,this.CrearPoligono);

    }

    dibujarPoligono(){
        // ya no se usa rect, por q queremos agregrarle una imagen
        // imagen de las cajitas cayendo:
        // image(this.imagenPoligono, this.CrearPoligono.position.x, this.CrearPoligono.position.y, this.anchoPoligono, this.altoPoligono);

        // primero se establece el angulo de rotacion de las imagenes

        // Se agregan push y pop
        push();

        imageMode(CENTER);

        // Funcion Translate
        translate(this.CrearPoligono.position.x, this.CrearPoligono.position.y);

        rotate(this.CrearPoligono.angle);

        // .. despues se agregan/dibujan las formas
        // imagen de las cajitas en orden en forma de casa:
        //image(this.imagenPoligono, this.CrearPoligono.position.x, this.CrearPoligono.position.y, this.anchoPoligono, this.altoPoligono);
        image(this.imagenPoligono, 0, 0, this.anchoPoligono, this.altoPoligono);
    
        // Se agregan push y pop
        pop();

    }

}