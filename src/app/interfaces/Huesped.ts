export interface Huesped {
  id: number,
  tipo_identificacion: string,
  identificacion: number,
  nombres: string,
  apellidos: string,
  sexo: string,
  fecha_nacimiento: Date,
  nacionalidad: string
  region: string,
  telefono: number,
  ruc_empresa: string | null,
}
