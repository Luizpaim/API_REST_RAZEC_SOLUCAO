/**Interface para representar os parametros para fazer alguma atualização em algum de nossos registros de usuários */
interface IUserUpdateDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  profile?: string;
  sex?: string;
}
export { IUserUpdateDTO };
