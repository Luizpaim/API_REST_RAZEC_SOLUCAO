/**Importando arquivos */
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";

/**Definindo tipo que iremos receber  */
export type IRequestRegisterClient = {
  name: string;
  email: string;
  phoneNumber: string;
};

/**Class  */
@injectable()
class RegisterClientUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    phoneNumber,
  }: IRequestRegisterClient): Promise<void> {
    await this.userRepository.registerClients({
      name,
      email,
      phoneNumber,
    });
  }
}
export { RegisterClientUseCase };
