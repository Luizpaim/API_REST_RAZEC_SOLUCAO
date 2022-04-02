import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { Service } from "@modules/Users/entities/Service";

@injectable()
class GetServiceByIdUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}
  public async execute(id: string): Promise<Service> {
    return await this.userRepository.getServiceById(id);
  }
}
export { GetServiceByIdUseCase };
