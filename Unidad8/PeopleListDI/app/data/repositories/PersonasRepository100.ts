// PersonaRepository100.ts
import { injectable } from "inversify";
import { Persona } from "../../domain/entities/Persona";
import { IRepositoryPersonas } from "../../domain/interfaces/repositories/IRepositoryPersonas";

/**
 * Repositorio de ejemplo que simula tener 100 personas para pruebas de rendimiento.
 */
@injectable()
export class PersonasRepository100 implements IRepositoryPersonas {

    getListadoCompletoPersonas(): Persona[] {
        const personas: Persona[] = [];
        const nombres = ['Fernando', 'Carlos', 'Ana', 'Miguel', 'Laura', 'David', 'Sofía', 'Javier', 'Elena', 'Pablo'];
        const apellidos = ['García', 'Fernández', 'López', 'Martínez', 'Sánchez', 'Pérez', 'Rodríguez', 'Gómez', 'Díaz', 'Moreno'];

        for (let i = 1; i <= 100; i++) {
            const nombreIndex = i % nombres.length;
            const apellido1Index = i % apellidos.length;
            const apellido2Index = (i + 5) % apellidos.length;

            const nombre = nombres[nombreIndex];
            const apellido = `${apellidos[apellido1Index]} ${apellidos[apellido2Index]}`;

            personas.push(new Persona(i, nombre, apellido));
        }

        return personas;
    }
}