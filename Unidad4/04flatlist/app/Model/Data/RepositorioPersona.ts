import {Persona}  from '../Entities/Persona';

class RepositorioPersona {

    static getPersonas(): Persona[] {
        return [
            new Persona(1, "Diego", "Lopez"),
            new Persona(2, "Ana", "Gomez"),
            new Persona(3, "Luis", "Martinez"),
            new Persona(4, "Marta", "Garcia"),
            new Persona(5, "Carlos", "Rodriguez"),
            new Persona(6, "Sofia", "Hernandez"),
            new Persona(7, "Javier", "Lopez"),
            new Persona(8, "Lucia", "Gonzalez"),
            new Persona(9, "Miguel", "Perez"),
            new Persona(10, "Elena", "Sanchez")
        ];
    }
}

export default RepositorioPersona;