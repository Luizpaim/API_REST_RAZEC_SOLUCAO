import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUsecase";

interface IBodyCreateUser {
  name: string;
  email: string;
  password: string;
  sex: "masculino" | "feminino" | "naoInformado";
  profile: "administrador" | "financeiro" | "funcionario";
}

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, profile, sex } =
      request.body as IBodyCreateUser;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    const resCreateUser = await createUserUseCase.execute({
      name,
      email,
      password,
      profile,
      sex,
    });
    return response.status(201).send();
  }
}
export { CreateUserController };
