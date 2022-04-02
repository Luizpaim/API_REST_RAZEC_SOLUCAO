/**importando arquivos */
import { container } from "tsyringe";
import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

/**interface dos parametros que iremos receber no corpo da requisição  */
interface IBodyAuthenticateUser {
  email: string;
  password: string;
}

/**Classe responsavel por receber as nossas requisições e enviar respostas  */
class AuthenticateUserController {
  /**metodo para fazer requisições e receber respostas */
  async handle(request: Request, response: Response): Promise<Response> {
    /** propiedades que iremos receber no corpo da nossa requisição  */
    const { password, email } = request.body as IBodyAuthenticateUser;

    /** instancia da nossa clase useCase */
    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

    /**Propiedade para chamar metodo execute de useCase */
    const token = await authenticateUserUseCase.execute({ email, password });

    /**Retorna  token em um objeto json */
    return response.json(token);
  }
}
export { AuthenticateUserController };
