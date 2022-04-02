import { container } from "tsyringe";
import { Request, Response } from "express";
import { GetServicesUseCase } from "./GetServicesUseCase";

class GetServicesController {
  public async handle(
    resquest: Request,
    response: Response
  ): Promise<Response> {
    const getServicesUseCase = container.resolve(GetServicesUseCase);
    const getServices = await getServicesUseCase.execute();
    return response.status(200).json(getServices);
  }
}
export { GetServicesController };
