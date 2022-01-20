class Pokemon{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }

    //métodos
    atacar(){
        return console.log((`${this.nombre} esta atacando`));
    }
}

class Pikachu extends Pokemon{
    constructor(nombre,tipo,edad){
        super(nombre,tipo);
        this.edad = edad;
    }
    evolucionar(){
        return console.log(`${this.nombre} está evolucionando`)
    }
}

const Pikachu1 = new Pikachu("Juan", "Electrico", 3);
console.log(Pikachu1);

Pikachu1.atacar();
Pikachu1.evolucionar();

const Pokemon1 = new Pokemon('Charmander', 'Fuego');

Pokemon1.atacar();
Pokemon1.evolucionar;