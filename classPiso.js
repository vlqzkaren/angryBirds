class classPiso {
    constructor(posicionX, posicionY, anchoPiso, altoPiso){

        // JSON
        // Definir otras propiedades iniciales del objeto piso
        // Los nombres usados en la lista de atributos deben ser los mismos que se usen para inicializar 
        // los valores del obj. Es como si escribieramos "this.switchPisoEstatico = switchPisoEstatico;"  
        // pero aqui SI conocemos el valor de "switchPisoEstatico"     
        var switchPisoEstatico = { "isStatic" : true } ;

        // Crear metodo para crear el piso q recibe los mismos parametros q el contructor
        this.crearRectangulo = Bodies.rectangle(posicionX, posicionY, anchoPiso, altoPiso, switchPisoEstatico);
        // Se inicializan los valores del objeto, con los parametros q recibimos inicialmente
        this.altoPiso = altoPiso;
        this.anchoPiso = anchoPiso;
        this.posicionX = posicionX;
        // console.log("--- VALOR ALTO PISO: " + this.altoPiso + " VALOR ANCHO PISO: " + this.anchoPiso + "---");
        // console.log("--- VALOR ALTO PISO: " + this.posicionX + "---");

        this.imagenPiso = loadImage("img/ground.png");

        // Debemos agregar el piso al mundo desde la clase, insertando el mismo metodo que usabamos en "sketch"
        World.add(mundo1Juego1,this.crearRectangulo);
    }

    // Aqui tmb podrian existir metodos propios de la clase piso 
    // duda miercoles: dbujarPiso ¿deberia recibir parametros? No por que todos los parametros q se ocupan se tomana 
    // desde el constructor (su rol es recibir valores, y con ellos construir elementos de la clase) 
    dibujarPiso(){
        rectMode(CENTER);
        image(this.imagenPiso, this.crearRectangulo.position.x, this.crearRectangulo.position.y, this.anchoPiso, this.altoPiso);
        //rect(this.crearRectangulo.position.x, this.crearRectangulo.position.y, this.anchoPiso, this.altoPiso);
    }
}
