import { container } from "tsyringe";
import { GetUserByIdUseCase } from "./GetUserByIdUseCase";
import { Request, Response } from "express";

class GetUserByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const getUserByIdUseCase = container.resolve(GetUserByIdUseCase);
    const getUserById = await getUserByIdUseCase.execute(id);
    return response.status(200).json(getUserById);
  }
}
export { GetUserByIdController };
