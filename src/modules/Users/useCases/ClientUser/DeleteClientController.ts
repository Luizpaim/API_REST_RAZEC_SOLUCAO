import { container } from "tsyringe";
import { DeleteClientUseCase } from "./DeleteClientUseCase";
import { Request, Response } from "express";

class DeleteClientController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteClientUseCase = container.resolve(DeleteClientUseCase);
    const deleteClient = await deleteClientUseCase.execute(id);
    return response.status(200).json(deleteClient);
  }
}
export { DeleteClientController };
