import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/Users/repositories/IUserRepository";
import { hash } from "bcryptjs";

export type IRequestCreateUser = {
  name: string;
  email: string;
  password: string;
  sex: "masculino" | "feminino" | "naoInformado";
  profile: "administrador" | "financeiro" | "funcionario";
};

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    sex,
    profile,
  }: IRequestCreateUser): Promise<void> {
    /**Criptografar password*/
    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      sex,
      profile,
    });
  }
}

export { CreateUserUseCase };
