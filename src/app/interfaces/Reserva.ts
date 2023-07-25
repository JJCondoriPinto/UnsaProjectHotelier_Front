export interface Reserva {
  id: number,
  cantidad_dias: number,
  tipo_reserva: string,
  razon_hospedaje: string,
  peticiones: string,
  fecha_llegada: Date | string,
  estado: string,
  habitacion_id: number,
  recepcionista_id: number,
  titular_id: number
}
