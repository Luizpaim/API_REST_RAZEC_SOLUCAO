import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";

@injectable()
class DeleteUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}
  public async execute(id: string): Promise<void> {
    await this.userRepository.deleteUser(id);
  }
}
export { DeleteUserUseCase };
