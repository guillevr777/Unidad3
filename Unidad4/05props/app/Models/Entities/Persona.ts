export class Persona {
  private _id: number;
  private _nombre: string;
  private _apellidos: string;

  constructor(id: number, nombre: string, apellidos: string) {
    this._id = id;
    this._nombre = nombre;
    this._apellidos = apellidos;
  }

  get id(): number {
    return this._id;
  }

  get nombre(): string {
    return this._nombre;
  }

  set nombre(value: string) {
    this._nombre = value;
  }

  get apellidos(): string {
    return this._apellidos;
  }

  set apellidos(value: string) {
    this._apellidos = value;
  }
}
