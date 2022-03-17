import { Request, Response } from "express";

import { ListUnitsUseCase } from './ListUnitsUseCase';

class ListUnitsController {
  constructor(private listUnitsUseCase: ListUnitsUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const all = this.listUnitsUseCase.execute();

      return response.status(200).json(all);
    } catch (error) {
      return response.status(500).json({
        message: error.message || "Mensagem descrevendo o erro que ocorreu!"
      })
    }
  }
}

export { ListUnitsController }