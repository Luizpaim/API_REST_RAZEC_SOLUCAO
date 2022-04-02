import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteServiceUseCase } from "./DeleteServiceUseCase";

class DeleteServiceController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteServiceUseCase = container.resolve(DeleteServiceUseCase);
    const deleteService = await deleteServiceUseCase.execute(id);
    return response.status(200).json(deleteService);
  }
}
export { DeleteServiceController };
