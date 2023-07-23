import { Contenido } from "./Contenido";

export interface Habitacion {
  id : number,
  nro_habitacion : number,
  nro_piso : number,
  tipo_habitacion : string,
  precio : number,
  estado : string,
  tamanio : number,
  imagen : File | null,
  contenido: Contenido[] | null,
}
