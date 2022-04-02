/** imortando arquivos */
import { inject, injectable } from "tsyringe";
import { IUserRepository } from "@modules/Users/repositories/IUserRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

/**Definindo tipos que iremos receber no parametros dos metodos */
export type IRequestAuthenticate = {
  email: string;
  password: string;
};

/**Classe que vai definir todas as nossas regras de negocio referente a authenticação do usuário  */
@injectable()
class AuthenticateUserUseCase {
  /**contrutor chamando injeção de dependencia por meio de nossos containers */
  constructor(
    @inject("UserRepository") private userRepository: IUserRepository
  ) {}

  /**Metodo que ira executar as funcionalidades definidas no nosso repository e regras de negocio */
  async execute({ email, password }: IRequestAuthenticate) {
    /**Propiedade que ira instanciar nosso metodo do nosso repository */
    const user = await this.userRepository.getAuthenticateUser(email);

    /**Verifica se usuario existe */
    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    /**Compara password que vem criptografado da nossa base */
    const passwordMatch = await compare(password, user.password);

    /**Verifica se o password está correto */
    if (!passwordMatch) {
      throw new Error("Email/Password incorrect");
    }

    /**Cria token durante a authenticação do usuário */
    const token = sign(
      {
        email: user.email,
      },
      "e0d5033b6bb7c27d9b728c979e7189f7",
      { subject: user.id.toString(), expiresIn: "1d" }
    );

    /**Retorna o token criado caso o usuário tenha feito login com sucesso */
    return token;
  }
}
export { AuthenticateUserUseCase };
