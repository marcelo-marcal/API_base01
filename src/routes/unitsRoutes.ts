import { Router } from 'express';
import { listUnitsController } from '../modules/units/useCases/listUnits';

const unitsRoutes = Router();

unitsRoutes.get('/units', (request, response) => {
  return listUnitsController.handle(request, response);
})

export { unitsRoutes };