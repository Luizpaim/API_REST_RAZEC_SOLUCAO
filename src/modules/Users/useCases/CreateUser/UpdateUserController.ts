import { container } from "tsyringe";
import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { Request, Response } from "express";

interface IBodyUpdateUser {
  name?: string;
  email?: string;
  password?: string;
  profile?: string;
  sex?: string;
}

class UpdateUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, profile, sex } =
      request.body as IBodyUpdateUser;
    const { id } = request.params;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);
    const updateUser = await updateUserUseCase.execute({
      id,
      name,
      email,
      password,
      profile,
      sex,
    });

    return response.status(200).json(updateUser);
  }
}
export { UpdateUserController };
