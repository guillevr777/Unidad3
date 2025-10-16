
import { Persona } from "../Model/Entities/Persona";

export class RepositoryPersona {

    private personas: Persona[] = [
        new Persona(1, 'Juan', 'Perez'),
        new Persona(2, 'Ana', 'Gomez'),
        new Persona(3, 'Luis', 'Martinez'),
        new Persona(4, 'Marta', 'Lopez'),
        new Persona(5, 'Carlos', 'Garcia'),
        new Persona(6, 'Sofia', 'Rodriguez'),
        new Persona(7, 'Diego', 'Hernandez'),
        new Persona(8, 'Lucia', 'Fernandez'),
        new Persona(9, 'Jorge', 'Sanchez'),
        new Persona(10, 'Elena', 'Ramirez')
    ];
    public get Personas(): Persona[] {
        return this.personas;
    }
    public addPersona(persona: Persona): void {
        this.personas.push(persona);
    }
    public removePersona(id: number): void {
        this.personas = this.personas.filter(p => p.Id !== id);
    }
}