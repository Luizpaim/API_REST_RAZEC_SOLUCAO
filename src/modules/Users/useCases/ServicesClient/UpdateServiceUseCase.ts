import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";

export type IRequestUpdateService = {
  idClient: string;
  nameClient: string;
  service: string;
  success: boolean;
};
@injectable()
class UpdateServiceUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(
    id: string,
    { idClient, nameClient, service, success }: IRequestUpdateService
  ): Promise<boolean> {
    return await this.userRepository.updateService(id, {
      idClient,
      nameClient,
      service,
      success,
    });
  }
}
export { UpdateServiceUseCase };
