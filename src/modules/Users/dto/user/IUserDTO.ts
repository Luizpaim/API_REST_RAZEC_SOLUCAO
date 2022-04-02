/**interface que ira representar os parametros para cadastrar os nossos usuários*/
interface IUserDTO {
  name: string;
  email: string;
  password: string;
  profile: "administrador" | "financeiro" | "funcionario";
  sex: "masculino" | "feminino" | "naoInformado";
}
export { IUserDTO };

