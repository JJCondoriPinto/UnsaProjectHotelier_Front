export interface Checkout {
  id : number,
	fecha_salida : Date | string,
  descripcion_salida : string,
  checkin_id : number,
  recepcionista_id : number,
  tarifa : number
}
