// Persona.ts

/**
 * Representa una entidad de Persona con sus datos básicos.
 */
export class Persona {
    /**
     * @param id El identificador único de la persona.
     * @param nombre El nombre de la persona.
     * @param apellidos Los apellidos de la persona.
     */
    constructor(
        public id: number,
        public nombre: string,
        public apellidos: string
    ) {}

    /**
     * Devuelve el nombre completo de la persona.
     */
    get nombreCompleto(): string {
        return `${this.nombre} ${this.apellidos}`;
    }
}