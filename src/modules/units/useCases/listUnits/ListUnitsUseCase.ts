import { Unit } from '../../model/Unit';
import { IUnitsRepository } from '../../repositories/IUnitsRepository';

type TListUnitsUseCase = { data: Unit[] }

class ListUnitsUseCase {

  constructor(private unitsRepository: IUnitsRepository) { }

  execute(): TListUnitsUseCase {
    const units = this.unitsRepository.list();

    const data: TListUnitsUseCase = { data: units }
    return data;
  }
}

export { ListUnitsUseCase }