import { container } from "tsyringe";
import { Request, Response } from "express";
import { ServicesUseCase } from "./ServicesUseCase";
interface IBodyCreateService {
  idClient: string;
  nameClient: string;
  service: string;
  success: boolean;
}
class ServicesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { idClient, nameClient, service, success } =
      request.body as IBodyCreateService;
    const servicesUseCase = container.resolve(ServicesUseCase);
    const createService = await servicesUseCase.execute({
      idClient,
      nameClient,
      service,
      success,
    });

    return response.status(201).json(createService);
  }
}
export { ServicesController };
