// PersonaRepositoryEmpty.ts
import { injectable } from "inversify";
import { Persona } from "../../domain/entities/Persona";
import { IRepositoryPersonas } from "../../domain/interfaces/repositories/IRepositoryPersonas";
/**
 * Repositorio de ejemplo que simula no tener ninguna persona.
 */
@injectable()
export class PersonasRepositoryEmpty implements IRepositoryPersonas {

    getListadoCompletoPersonas(): Persona[] {
        // Devuelve un array vacío
        return [];
    }
}