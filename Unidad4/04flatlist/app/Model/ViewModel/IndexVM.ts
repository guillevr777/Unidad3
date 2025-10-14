import { RepositoryPersona } from '../Data/RepositoryPersona';
import { Persona } from '../Entities/Persona';

export default class IndexVM {

    private personas: Persona[] = [];
    private personaSeleccionada : Persona | null = null;

    constructor() {
        this.personaSeleccionada
    }

    public get Personas(): Persona[] {
        const repo = new RepositoryPersona();
        this.personas = repo.Personas;
        return this.personas;
    }

    public get PersonaSeleccionada(): Persona | null {
        return this.personaSeleccionada;
    }
    public set PersonaSeleccionada(value: Persona | null){
        this.personaSeleccionada = value;
        this.personaPress();
    }

    private personaPress(): void {

        if(this.personaSeleccionada != null) {
        alert(`Su nombre es:  ${this.personaSeleccionada?.Nombre} ${this.personaSeleccionada?.Apellido}`);
     }
    }
}