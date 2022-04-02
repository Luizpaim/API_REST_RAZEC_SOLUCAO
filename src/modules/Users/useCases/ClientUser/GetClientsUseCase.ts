import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { Client } from "@modules/Users/entities/Client";

@injectable()
class GetClientsUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(): Promise<Client> {
    return await this.userRepository.getClients();
  }
}
export { GetClientsUseCase };
