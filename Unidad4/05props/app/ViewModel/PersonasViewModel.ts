import { Persona } from "../Models/Entities/Persona";
import { RepositoryPersonas } from "../Models/Data/RepositoryPersonas";

export class PersonasViewModel {
  private _personas: Persona[];
  private _personaSeleccionada: Persona | null;

  constructor() {
    this._personas = RepositoryPersonas.getPersonas();
    this._personaSeleccionada = null;
  }

  get personas(): Persona[] {
    return this._personas;
  }

  get personaSeleccionada(): Persona | null {
    return this._personaSeleccionada;
  }

  set personaSeleccionada(persona: Persona | null) {
    this._personaSeleccionada = persona;
  }

  mostrarPersonaSeleccionada(): void {
    if (this._personaSeleccionada) {
      alert(
        `Persona seleccionada: ${this._personaSeleccionada.nombre} ${this._personaSeleccionada.apellidos}`
      );
    }
  }
}
