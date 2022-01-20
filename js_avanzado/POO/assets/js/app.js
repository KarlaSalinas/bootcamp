//Clases, molde que nos permite crear objetos

class Animal{
    /* nombre;
    especie; */
    constructor(nombre, especie){
        //this hace referencial al contexto en que se esta utilizando cierta variable
        this.nombre = nombre;
        this.especie = especie;
    }

    //Getters y setters
    //Tienen el proposito de leer o modificar el atributo
    get getNombre(){
        return this.nombre;
    }

    set setNombre(nombre){
        this.nombre = nombre;
    }

    get getEspecie(){
        return this.especie;
    }

    set setEspecie(especie){
        this.especie = especie;
    }

    //métodos == funciones
    presentarse(){
        document.write(`Hola soy un ${this.especie} y me llamo ${this.nombre} <br>`);
    }

    cambiarNombre(nuevoNombre){
        this.nombre = nuevoNombre;
        let mensaje = `Mi nuevo nombre es ${this.nombre} y soy un ${this.especie}<br>`;
        return mensaje;
    }

    //Métodos estaticos
    //Pertenece sólo a la clase y no se hereda a los objetos
    //Sirven por ejemplo para crear un contador en JAVA
    static saludar(){
        return console.log('Hola soy un metodo estatico');
    }
}


Animal.saludar();

//Heredan los atributos y métodos de la clase que estan utilizando
const Animal1 = new Animal("Scooby", "Perro"); //Creamos un objeto
//Instanciar = hacer una copia, crear un objeto
console.log(Animal1);


//Heredan los atributos y metodos de la clase que estan utilizando
const Animal2 = new Animal("Pecas", "Gato");
console.log(Animal2);

const Animal3 = new Animal();
console.log(Animal3);

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);
Animal1.nombre = "Scrappy";//Notación de punto para cambiar el valor
console.log(Animal1.nombre);

//Método para cambiar el valor
document.write(Animal1.cambiarNombre("Oddie"));

//Getters y setters
//get = obtener el valor de un atributo
//Set = fijar o cambiar el valor de un atributo

console.log(Animal1.getNombre);
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre);
Animal1.saludar();