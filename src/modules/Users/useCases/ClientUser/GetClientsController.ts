import { container } from "tsyringe";
import { GetClientsUseCase } from "./GetClientsUseCase";
import { Request, Response } from "express";

class GetClientsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const getClientsUseCase = container.resolve(GetClientsUseCase);
    const getClients = await getClientsUseCase.execute();
    return response.status(200).json(getClients);
  }
}
export { GetClientsController };
