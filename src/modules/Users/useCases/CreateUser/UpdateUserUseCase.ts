import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../../../modules/Users/repositories/IUserRepository";
import { hash } from "bcryptjs";

export type IRequestUpdateUser = {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  profile?: string;
  sex?: string;
};

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  public async execute({
    id,
    name,
    email,
    password,
    profile,
    sex,
  }: IRequestUpdateUser): Promise<boolean> {
    const passwordHash = await hash(password, 8);
   const updateUser =  await this.userRepository.updateUser({
      id,
      name,
      email,
      password: passwordHash,
      profile,
      sex,
    });
    return updateUser
  }
}
export { UpdateUserUseCase };
