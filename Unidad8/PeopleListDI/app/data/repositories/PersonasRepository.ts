import { injectable } from "inversify";
import { Persona } from "../../domain/entities/Persona";
import { IRepositoryPersonas } from "../../domain/interfaces/repositories/IRepositoryPersonas";

@injectable()
export class PersonasRepository implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Rocky', 'Perro Negro'),
            new Persona(3, 'Maki', 'Gato 1'),
            new Persona(4, 'Mijo', 'Gato 2'),
            new Persona(5, 'Laura Luzhen', 'Rodríguez Morán'),
            new Persona(6, 'Guillermo Simón', 'Villanueva Roldán'),
        ];
    }
}
