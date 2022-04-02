import { container } from "tsyringe";
import { Request, Response } from "express";
import { RegisterClientUseCase } from "./RegisterClientUseCase";

interface IBodyRegisterClient {
  name: string;
  email: string;
  phoneNumber: string;
}

class RegisterClientController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phoneNumber } = request.body as IBodyRegisterClient;
    const registerClientUseCase = container.resolve(RegisterClientUseCase);
    await registerClientUseCase.execute({
      name,
      email,
      phoneNumber,
    });
    return response.status(201).send();
  }
}
export { RegisterClientController };
