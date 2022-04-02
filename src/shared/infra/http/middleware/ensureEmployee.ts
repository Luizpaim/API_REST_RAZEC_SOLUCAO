import { Response, Request, NextFunction } from "express";
import { UserRepository } from "../../../../modules/Users/infra/knex/repositories/UserRepository";

export async function ensureEmployee(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user_id } = request.body

  const userRepository = new UserRepository();

  const {admin} = await userRepository.getProfileUser(user_id);
  
  if (admin === "funcionario" || admin ==="administrador") {
    return next();
  }
  return response.status(401).json({ error: "Unauthorize" });
}
