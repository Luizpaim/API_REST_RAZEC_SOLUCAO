import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { Client } from "@modules/Users/entities/Client";

@injectable()
class GetClientByIdUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(id: string): Promise<Client> {
    return await this.userRepository.getClientById(id);
  }
}
export { GetClientByIdUseCase };
