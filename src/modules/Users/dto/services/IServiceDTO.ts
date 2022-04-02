/** Interface que ira representar os parametros para ser registrado os serviços */
interface IServiceDTO {
  idClient: string;
  nameClient: string;
  service: string;
  success: boolean;
}
export { IServiceDTO };
