import {Entity, model, property} from '@loopback/repository';

@model()
export class RegistroEventos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  cedula: string;

  @property({
    type: 'string',
    required: true,
  })
  celular: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  evento: string;


  constructor(data?: Partial<RegistroEventos>) {
    super(data);
  }
}

export interface RegistroEventosRelations {
  // describe navigational properties here
}

export type RegistroEventosWithRelations = RegistroEventos & RegistroEventosRelations;
