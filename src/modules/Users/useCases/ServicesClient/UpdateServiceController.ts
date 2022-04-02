import { container } from "tsyringe";
import { Request, Response } from "express";
import { UpdateServiceUseCase } from "./UpdateServiceUseCase";

interface IBodyUpdateService {
  idClient: string;
  nameClient: string;
  service: string;
  success: boolean;
}

class UpdateServiceController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { idClient, nameClient, service, success } =
      request.body as IBodyUpdateService;
    const updateServiceUseCase = container.resolve(UpdateServiceUseCase);
    const updateService = await updateServiceUseCase.execute(id, {
      idClient,
      nameClient,
      service,
      success,
    });
    return response.status(200).json(updateService);
  }
}
export { UpdateServiceController };
