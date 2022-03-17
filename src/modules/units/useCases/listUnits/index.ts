import { UnitsRepository } from "../../repositories/implementations/UnitsRepository";
import { ListUnitsController } from "./ListUnitsController";
import { ListUnitsUseCase } from "./ListUnitsUseCase";


const unitsRepository = UnitsRepository.getInstance();

const listUnitsUseCase = new ListUnitsUseCase(unitsRepository);

const listUnitsController = new ListUnitsController(listUnitsUseCase);

export { listUnitsController };