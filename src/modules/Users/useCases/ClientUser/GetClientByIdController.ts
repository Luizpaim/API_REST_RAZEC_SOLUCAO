import { container } from "tsyringe";
import { GetClientByIdUseCase } from "./GetClientByIdUseCase";
import { Request, Response } from "express";

class GetClientByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getClientUseCase = container.resolve(GetClientByIdUseCase);
    const getClientById = await getClientUseCase.execute(id);
    return response.status(200).json(getClientById);
  }
}
export { GetClientByIdController };
