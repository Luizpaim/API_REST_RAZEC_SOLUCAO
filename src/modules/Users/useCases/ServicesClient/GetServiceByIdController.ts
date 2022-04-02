import { container } from "tsyringe";
import { GetServiceByIdUseCase } from "./GetServiceByIdUseCase";
import { Request, Response } from "express";

class GetServiceByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getServiceByIdUseCase = container.resolve(GetServiceByIdUseCase);
    const getServiceByid = await getServiceByIdUseCase.execute(id);
    return response.status(200).json(getServiceByid);
  }
}
export { GetServiceByIdController };
