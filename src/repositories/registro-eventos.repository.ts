import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {RegistroEventos, RegistroEventosRelations} from '../models';

export class RegistroEventosRepository extends DefaultCrudRepository<
  RegistroEventos,
  typeof RegistroEventos.prototype.id,
  RegistroEventosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(RegistroEventos, dataSource);
  }
}
