import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";

@injectable()
class DeleteClientUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(id: string): Promise<boolean> {
    return await this.userRepository.deleteClient(id);
  }
}
export { DeleteClientUseCase };
