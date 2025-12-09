import { Container } from "inversify";
import "reflect-metadata";
import { PersonasRepository } from "../data/repositories/PersonasRepository";
import { PeopleListVM } from "../ui/viewmodel/indexVM";
import { TYPES } from "./types";
import { IRepositoryPersonas } from "../domain/interfaces/repositories/IRepositoryPersonas";


const container = new Container();

// Vinculamos la interfaz con su implementación concreta
container.bind<IRepositoryPersonas>(TYPES.IRepositoryPersonas).to(PersonasRepository);
container.bind<PeopleListVM>(TYPES.IndexVM).to(PeopleListVM);
export { container };
