import { injectable } from "inversify";
import Persona from "../Entities/Persona";


export interface IRepositoryPersonas {
     getListadoCompletoPersonas(): Persona[];
}


@injectable()
export class PersonasRepository implements IRepositoryPersonas{


    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            new Persona(1, 'Fernando', 'Galiana Fernández'),
            new Persona(2, 'Carlos', 'Martínez López'),
            new Persona(3, 'Ana', 'Rodríguez Pérez'),
            new Persona(4, 'Miguel', 'Sánchez Ruiz'),
            new Persona(5, 'Laura', 'Torres Díaz'),
            new Persona(6, 'David', 'Moreno García'),
            new Persona(7, 'Marta', 'Hernández Jiménez'),
            new Persona(8, 'Javier', 'Gómez Sánchez'),
            new Persona(9, 'Sofía', 'Ramírez Torres'),
            new Persona(10, 'Andrés', 'Vargas Flores'),
        ];
    }
}

@injectable()
export class PersonasRepositoryEmpty implements IRepositoryPersonas{

    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            
        ];
    }
}

@injectable()
export class PersonasRepository100 implements IRepositoryPersonas{

    getListadoCompletoPersonas(): Persona[] {


        //En un futuro, esto podría hacer llamadas a una API que nos ofreciera los datos
        return [
            new Persona(1, "Laura Luzhen", "Rodríguez Morán"),
new Persona(2, "Hugo", "Dominguez Ferrer"),
new Persona(3, "Sofía", "López"),
new Persona(4, "Diego", "Martínez"),
new Persona(5, "Valentina", "Sánchez"),
new Persona(6, "Samuel", "Romero"),
new Persona(7, "Isabella", "Pérez"),
new Persona(8, "Benjamín", "Torres"),
new Persona(9, "Camila", "Ruiz"),
new Persona(10, "Julián", "Moreno"),
new Persona(11, "Emma", "Castro"),
new Persona(12, "Alejandro", "Ortiz"),
new Persona(13, "Victoria", "Navarro"),
new Persona(14, "Daniel", "Vargas"),
new Persona(15, "Martina", "Jiménez"),
new Persona(16, "Adrián", "Silva"),
new Persona(17, "Carla", "Ramos"),
new Persona(18, "Tomás", "Delgado"),
new Persona(19, "Sara", "Herrera"),
new Persona(20, "Nicolás", "Mendoza"),
new Persona(21, "Julia", "Cortés"),
new Persona(22, "Leonardo", "Reyes"),
new Persona(23, "Elena", "Aguilar"),
new Persona(24, "Pablo", "Vega"),
new Persona(25, "Clara", "Muñoz"),
new Persona(26, "Hugo", "Lara"),
new Persona(27, "Irene", "Santos"),
new Persona(28, "Gabriel", "Flores"),
new Persona(29, "Daniela", "Campos"),
new Persona(30, "Lucas", "Cabrera"),
new Persona(31, "Ariadna", "Mora"),
new Persona(32, "Álvaro", "García"),
new Persona(33, "Marina", "Peña"),
new Persona(34, "Santiago", "Ibáñez"),
new Persona(35, "Nerea", "Fuentes"),
new Persona(36, "Rafael", "Carrillo"),
new Persona(37, "Luna", "Rojas"),
new Persona(38, "Emilio", "Castillo"),
new Persona(39, "Paula", "León"),
new Persona(40, "Andrés", "Rivas"),
new Persona(41, "Mía", "Bravo"),
new Persona(42, "Ángel", "Cano"),
new Persona(43, "Isabel", "Soto"),
new Persona(44, "Cristian", "Suárez"),
new Persona(45, "Aitana", "Méndez"),
new Persona(46, "José", "Cordero"),
new Persona(47, "Alba", "Lorenzo"),
new Persona(48, "Marco", "Calvo"),
new Persona(49, "Noa", "Díaz"),
new Persona(50, "Antonio", "Pascual"),
new Persona(51, "Elsa", "Marín"),
new Persona(52, "Fernando", "Prieto"),
new Persona(53, "Lara", "Rubio"),
new Persona(54, "Iván", "Blanco"),
new Persona(55, "Celia", "Solís"),
new Persona(56, "Óscar", "Parra"),
new Persona(57, "Eva", "Gallego"),
new Persona(58, "Jorge", "Benítez"),
new Persona(59, "Claudia", "Luque"),
new Persona(60, "Rubén", "Pastor"),
new Persona(61, "Laura", "Acosta"),
new Persona(62, "Manuel", "Herrero"),
new Persona(63, "Beatriz", "Pardo"),
new Persona(64, "David", "Nieto"),
new Persona(65, "Natalia", "Arias"),
new Persona(66, "Raúl", "Villar"),
new Persona(67, "Patricia", "Domínguez"),
new Persona(68, "Enrique", "Montes"),
new Persona(69, "Rocío", "Serrano"),
new Persona(70, "Francisco", "Salas"),
new Persona(71, "Amelia", "Campos"),
new Persona(72, "Ignacio", "Guzmán"),
new Persona(73, "Marta", "Cuesta"),
new Persona(74, "Ricardo", "Luna"),
new Persona(75, "Helena", "Roldán"),
new Persona(76, "Mario", "Correa"),
new Persona(77, "Nora", "Medina"),
new Persona(78, "Javier", "Estevez"),
new Persona(79, "Blanca", "Peralta"),
new Persona(80, "Eduardo", "Bravo"),
new Persona(81, "Andrea", "Salazar"),
new Persona(82, "Álex", "Campos"),
new Persona(83, "Alicia", "Reina"),
new Persona(84, "Cristóbal", "Aguirre"),
new Persona(85, "Lucía", "Franco"),
new Persona(86, "Miguel", "Escobar"),
new Persona(87, "Carolina", "Valdez"),
new Persona(88, "Esteban", "Marcos"),
new Persona(89, "Rebeca", "Solano"),
new Persona(90, "Joaquín", "Navarrete"),
new Persona(91, "Silvia", "Padilla"),
new Persona(92, "Gonzalo", "Rosales"),
new Persona(93, "Iris", "Santana"),
new Persona(94, "Alberto", "Molina"),
new Persona(95, "Jimena", "Miranda"),
new Persona(96, "Felipe", "Pineda"),
new Persona(97, "Vera", "Del Río"),
new Persona(98, "Rodrigo", "Palacios"),
new Persona(99, "Teresa", "Aranda"),
new Persona(100, "Héctor", "Castaño"),

        ];
    }
}