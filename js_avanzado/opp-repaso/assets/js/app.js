class Animalitos{
    constructor(nombre, edad, especie, revisado){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false; //Se pueden dar valores iniciales a los atributos
        this.revisado = revisado;
    }

    saludar(){
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario{
    constructor(){
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente){
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        /* this.cantidadPacientes++; */
        let mensaje = `Paraciente agregado <br>`;
        return document.write(mensaje);
    }

    modificarPacientesRevisados(){
        this.pacientesRevisados++;
    }

    revisaPaciente(paciente){
        if(paciente.revisado === false){
            paciente.revisado = true;
            //this.pacientesRevisados++;
            this.modificarPacientesRevisados();
            document.write('Paciente ha sido revisado');
        }else{
            document.write('Este paciente ya fue revisado');
        }
    }

    mostrarLista(){
        document.write(`<br> <br>Pacientes: <br>`);
        for(let i = 0; i < this.listaPacientes.length; i++){
            document.write(`${this.listaPacientes[i].nombre} <br>`);
        }
        document.write(`Cantidad de pacientes ${this.cantidadPacientes} <br>
        Pacientes revisados ${this.pacientesRevisados} <br><br>`);
    }
}


//Objetos creados de la clase Animalito
const Animalito1 = new Animalitos("Luna", "5", "Perro", false);
const Animalito2 = new Animalitos("Galleta", "2", "Gato", true);
console.log(Animalito1);
console.log(Animalito2);

const VeterinarioPepe = new Veterinario();
VeterinarioPepe.agregarPaciente(Animalito1);
VeterinarioPepe.agregarPaciente(Animalito2);

console.log(VeterinarioPepe.listaPacientes);

VeterinarioPepe.mostrarLista();
VeterinarioPepe.revisaPaciente(Animalito1);
VeterinarioPepe.mostrarLista();

VeterinarioPepe.revisaPaciente(Animalito2);