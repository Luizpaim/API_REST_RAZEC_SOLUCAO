import { container } from "tsyringe";
import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

class DeleteUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const deleteUserUseCase = container.resolve(DeleteUserUseCase);
    await deleteUserUseCase.execute(id);
    return response.status(204).send();
  }
}
export { DeleteUserController };
