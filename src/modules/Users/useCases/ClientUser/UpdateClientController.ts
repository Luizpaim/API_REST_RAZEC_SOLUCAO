import { container } from "tsyringe";
import { Request, Response } from "express";
import { UpdateClientUseCase } from "./UpdateClientUseCase";

interface IBodyUpdateClient {
  name: string;
  email: string;
  phoneNumber: string;
}

class UpdateClientController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, email, phoneNumber } = request.body as IBodyUpdateClient;
    const updateClientUseCase = container.resolve(UpdateClientUseCase);
    const updateClient = await updateClientUseCase.execute(id, {
      name,
      email,
      phoneNumber,
    });
    return response.status(200).json(updateClient);
  }
}
export { UpdateClientController };
