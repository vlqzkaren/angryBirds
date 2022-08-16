class classResortera {
    constructor(cuerpoA, puntoB){
 
        var propiedadesResortera = { cuerpoA:cuerpoA, puntoB:puntoB, "stiffness":0.05, "length":10 };

        this.imagenResortera1 = loadImage("img/sling1.png");
        this.imagenResortera2 = loadImage("img/sling2.png");
        this.imagenResortera3 = loadImage("img/sling3.png");

        // this.cuerpoA = cuerpoA;
        this.puntoB = puntoB;
        console.log("--- VALOR X y Y en Punto Bx: " + this.puntoB.x + " y Punto By " + this.puntoB.y + "---");

        this.liga = Constraint.create(propiedadesResortera);

        World.add(mundo1Juego1,this.liga);
    }

    dibujarResortera(){
        image(this.imagenResortera1, 200, 21);
        image(this.imagenResortera2, 250, 21);

        var puntoA = this.liga.cuerpoA.position;
        var puntoB = this.puntoB;

//        push();

        // linea entre puntos a y b:
        // necesita valores "x" y "y" de "a" y
        // valores "x" y "y" de "b"
        line(puntoA.x, puntoA.y, puntoB.x, puntoB.y);
        console.log("--- VALOR X dibujarResortera 1 - Punto A " + puntoA.x + "y Punto B " + puntoB.x + "---");
        
        //line(puntoA.x, puntoA.y, puntoB.x, puntoB.y);
        //console.log("--- VALOR X dibujarResortera 2 - Punto A " + puntoA.x + "y Punto B " + puntoB.x + "---");

       // pop();

    }

}
