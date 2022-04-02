import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { Service } from "@modules/Users/entities/Service";

export type IRequestService = {
  idClient: string;
  nameClient: string;
  service: string;
  success: boolean;
};

@injectable()
class ServicesUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute({
    idClient,
    nameClient,
    service,
    success,
  }: IRequestService): Promise<void> {
    // const client = await this.userRepository.getClient(name.toLowerCase());

    // if (!client) {
    //   throw new Error("Client no Exists");
    // }

    const createService = await this.userRepository.createService({
      idClient,
      nameClient,
      service,
      success,
    });

  }
}
export { ServicesUseCase };
