/**Classe para representar a resposta que iremos receber na autenticação do usuário */
class AuthenticateUser {
  /**propiedades */
  id?: string;
  email: string;
  password?: string;
  profile?: string;

  public constructor() {}
}
export { AuthenticateUser };
