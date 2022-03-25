import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {RegistroEventos} from '../models';
import {RegistroEventosRepository} from '../repositories';

export class RegistroEventosWplayController {
  constructor(
    @repository(RegistroEventosRepository)
    public registroEventosRepository : RegistroEventosRepository,
  ) {}

  @post('/registro-eventos')
  @response(200, {
    description: 'RegistroEventos model instance',
    content: {'application/json': {schema: getModelSchemaRef(RegistroEventos)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroEventos, {
            title: 'NewRegistroEventos',
            exclude: ['id'],
          }),
        },
      },
    })
    registroEventos: Omit<RegistroEventos, 'id'>,
  ): Promise<RegistroEventos> {
    return this.registroEventosRepository.create(registroEventos);
  }

  @get('/registro-eventos/count')
  @response(200, {
    description: 'RegistroEventos model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(RegistroEventos) where?: Where<RegistroEventos>,
  ): Promise<Count> {
    return this.registroEventosRepository.count(where);
  }

  @get('/registro-eventos')
  @response(200, {
    description: 'Array of RegistroEventos model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(RegistroEventos, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(RegistroEventos) filter?: Filter<RegistroEventos>,
  ): Promise<RegistroEventos[]> {
    return this.registroEventosRepository.find(filter);
  }

  @patch('/registro-eventos')
  @response(200, {
    description: 'RegistroEventos PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroEventos, {partial: true}),
        },
      },
    })
    registroEventos: RegistroEventos,
    @param.where(RegistroEventos) where?: Where<RegistroEventos>,
  ): Promise<Count> {
    return this.registroEventosRepository.updateAll(registroEventos, where);
  }

  @get('/registro-eventos/{id}')
  @response(200, {
    description: 'RegistroEventos model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(RegistroEventos, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(RegistroEventos, {exclude: 'where'}) filter?: FilterExcludingWhere<RegistroEventos>
  ): Promise<RegistroEventos> {
    return this.registroEventosRepository.findById(id, filter);
  }

  @patch('/registro-eventos/{id}')
  @response(204, {
    description: 'RegistroEventos PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(RegistroEventos, {partial: true}),
        },
      },
    })
    registroEventos: RegistroEventos,
  ): Promise<void> {
    await this.registroEventosRepository.updateById(id, registroEventos);
  }

  @put('/registro-eventos/{id}')
  @response(204, {
    description: 'RegistroEventos PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() registroEventos: RegistroEventos,
  ): Promise<void> {
    await this.registroEventosRepository.replaceById(id, registroEventos);
  }

  @del('/registro-eventos/{id}')
  @response(204, {
    description: 'RegistroEventos DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.registroEventosRepository.deleteById(id);
  }
}
