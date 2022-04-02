import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { Service } from "@modules/Users/entities/Service";

@injectable()
class GetServicesUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(): Promise<Service> {
    return await this.userRepository.getServices();
  }
}
export { GetServicesUseCase };
