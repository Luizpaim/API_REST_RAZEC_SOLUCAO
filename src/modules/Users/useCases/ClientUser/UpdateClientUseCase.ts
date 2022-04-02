import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";

export type IRequestUpdateClient = {
  name: string;
  email: string;
  phoneNumber: string;
};

@injectable()
class UpdateClientUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute(
    id: string,
    { name, email, phoneNumber }: IRequestUpdateClient
  ): Promise<boolean> {
    return await this.userRepository.updateClient(id, {
      name,
      email,
      phoneNumber,
    });
  }
}
export { UpdateClientUseCase };
