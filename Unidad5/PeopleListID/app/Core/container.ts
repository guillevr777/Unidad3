import { Container } from "inversify";
import "reflect-metadata";
import { IRepositoryPersonas, PersonasRepository, PersonasRepository100, PersonasRepositoryEmpty } from "../Models/Data/personasRepository";
import { TYPES } from "./types";
import { PeopleListVM } from "../ViewModel/PeopleListVM";


const container = new Container();


// Vinculamos la interfaz con su implementación concreta
container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(PersonasRepository100);
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
export { container };
