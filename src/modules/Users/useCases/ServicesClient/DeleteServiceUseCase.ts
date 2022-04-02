import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";

@injectable()
class DeleteServiceUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(id: string): Promise<boolean> {
    return await this.userRepository.deleteService(id);
  }
}
export { DeleteServiceUseCase };
