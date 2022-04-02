/**Importando Arquivos */
import { IUserDTO } from "@modules/Users/dto/user/IUserDTO";
import { IClientsDTO } from "../dto/clients/IClientsDTO";
import { IServiceDTO } from "../dto/services/IServiceDTO";
import { IUserUpdateDTO } from "../dto/user/IUserUpdateDTO";
import { AuthenticateUser } from "../entities/AuthenticateUser";
import { Client } from "../entities/Client";
import { Service } from "../entities/Service";
import { User } from "../entities/User";

/**Interface para representar todos os metodos do nosso repository */

interface IUserRepository {
  /**Metodo para cadastrar usuário */
  create({ name, email, password, sex, profile }: IUserDTO): Promise<User>;

  /**metodo para pegar todos os usuários cadastrados */
  getUsers(): Promise<User>;

  /**Metodo para atualizar usuário */
  updateUser({
    id,
    name,
    email,
    password,
    sex,
    profile,
  }: IUserUpdateDTO): Promise<boolean>;

  /**Metodo para deletar usuário */
  deleteUser(id: string): Promise<boolean>;

  /**Metodo para pegar usuário pelo ID */
  getUserById(id: string): Promise<User>;

  /**Metodo para authenticar o usuário */
  getAuthenticateUser(email: string): Promise<AuthenticateUser>;

  /**Metodo para pegar Perfil de usuário*/
  getProfileUser(user_id: string): Promise<{ admin: string }>;

  /**Metodo para registrar cliente */
  registerClients({ name, email, phoneNumber }: IClientsDTO): Promise<Client>;

  /**Metodo para pegar todos os clientes */
  getClients(): Promise<Client>;

  /**Metodo para pegar cliente por ID */
  getClientById(id: string): Promise<Client>;

  /**Metodo para atualizar um cliente */
  updateClient(
    id: string,
    { name, email, phoneNumber }: IClientsDTO
  ): Promise<boolean>;

  /**Metodo para deletar um cliente */
  deleteClient(id: string): Promise<boolean>;

  /**Metodo para registrar um serviço  */
  createService({
    idClient,
    nameClient,
    service,
    success,
  }: IServiceDTO): Promise<Service>;

  /**Metodos para pegar todos serviços cadastrados */
  getServices(): Promise<Service>;

  /**Metodo para pegar um serviço por ID */
  getServiceById(id: string): Promise<Service>;

  /**Metodo para Atualizar um serviço */
  updateService(
    id: string,
    { idClient, nameClient, service, success }: IServiceDTO
  ): Promise<boolean>;

  /**Metodo para deletar um serviço */
  deleteService(id: string): Promise<boolean>;
}
export { IUserRepository };
