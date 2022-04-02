import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { User } from "@modules/Users/entities/User";

@injectable()
class GetUserByIdUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(id: string): Promise<User> {
    return await this.userRepository.getUserById(id);
  }
}
export { GetUserByIdUseCase };
