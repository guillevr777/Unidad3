import { Persona } from "../Entities/Persona";

export class RepositoryPersonas {
  static getPersonas(): Persona[] {
    return [
      new Persona(1, "Juan", "Pérez"),
      new Persona(2, "María", "López"),
      new Persona(3, "Carlos", "Ramírez"),
      new Persona(4, "Lucía", "González"),
    ];
  }
}
