import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/Users/repositories/IUserRepository";
import { User } from "../../../Users/entities/User";

@injectable()
class GetUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute(): Promise<User> {
    return await this.userRepository.getUsers();
  }
}
export { GetUserUseCase };
