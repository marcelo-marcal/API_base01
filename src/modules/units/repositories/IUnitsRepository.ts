import { Unit } from "../model/Unit";

interface IUnitsRepository {
  list(): Unit[];
  // list(): Promise<Unit[]>;
}

export { IUnitsRepository }