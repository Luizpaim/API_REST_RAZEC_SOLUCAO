/**importado arquivos */
import { IUserDTO } from "../../../dto/user/IUserDTO";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { connection } from "../../../../../shared/infra/knex";
import { User } from "@modules/Users/entities/User";
import { AuthenticateUser } from "@modules/Users/entities/AuthenticateUser";
import { IClientsDTO } from "@modules/Users/dto/clients/IClientsDTO";
import { Client } from "../../../../Users/entities/Client";
import { IServiceDTO } from "@modules/Users/dto/services/IServiceDTO";
import { Service } from "@modules/Users/entities/Service";
import { IUserUpdateDTO } from "@modules/Users/dto/user/IUserUpdateDTO";

/**Classe implementada da nossa interface do nosso repositorio */
class UserRepository implements IUserRepository {
  /**Metodo para cadastrar usuário */
  public async create({
    name,
    email,
    password,
    profile,
    sex,
  }: IUserDTO): Promise<User> {
    const createUser: IUserDTO = await connection("users").insert({
      name: name,
      email: email,
      password: password,
      sex: sex,
      profile: profile,
      createdAt: new Date(),
      updated: new Date(),
    });
    return createUser;
  }

  /**metodo para pegar todos os usuários cadastrados */
  public async getUsers(): Promise<User> {
    const getUsers: User = await connection("users").select({
      name: "users.name",
      email: "users.email",
      profile: "users.profile",
      sex: "users.sex",
      createdAt: "users.createdAt",
      updatedAt: "users.updated",
    });
    return getUsers;
  }

  /**Metodo para pegar usuário pelo ID */
  public async getUserById(id: string): Promise<User> {
    const getUserById: User = await connection("users")
      .select({
        name: "users.name",
        email: "users.email",
        profile: "users.profile",
        sex: "users.sex",
        createdAt: "users.createdAt",
        updatedAt: "users.updated",
      })
      .where({ id: id })
      .first();
    return getUserById;
  }

  /**Metodo para atualizar usuário */
  public async updateUser({
    id,
    name,
    email,
    password,
    sex,
    profile,
  }: IUserUpdateDTO): Promise<boolean> {
    const userUpdate = await connection("users")
      .update({
        name: name,
        email: email,
        password: password,
        profile: profile,
        sex: sex,
        updated: new Date(),
      })
      .where({ id: id });

    return userUpdate != 0;
  }

  /**Metodo para deletar usuário */
  public async deleteUser(id: string): Promise<boolean> {
    const deleteUser = await connection("users").delete().where({ id: id });
    return deleteUser != 0;
  }

  /**Metodo para pegar dados e authenticar usuários */
  public async getAuthenticateUser(email: string): Promise<AuthenticateUser> {
    const getUser: AuthenticateUser = await connection("users")
      .select({
        id: "users.id",
        email: "users.email",
        password: "users.password",
      })
      .from("users")
      .where({ email: email })
      .first();

    return getUser;
  }

  /**metodo para pegar perfil de usuário */
  public async getProfileUser(user_id: string): Promise<{ admin: string }> {
    const getProfile: string | any = await connection("users")
      .select({ admin: "users.profile" })
      .from("users")
      .where({ id: user_id })
      .first();

    return getProfile;
  }

  /**metodo para registrar clientes */
  public async registerClients({
    name,
    email,
    phoneNumber,
  }: IClientsDTO): Promise<Client> {
    const client: IClientsDTO = await connection("clients").insert({
      name: name,
      email: email,
      phone_number: phoneNumber,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return client;
  }

  /**metodo para pegar todos dos clientes */
  public async getClients(): Promise<Client> {
    const getClients: Client = await connection("clients").select({
      name: "clients.name",
      email: "clients.email",
      phoneNumber: "clients.phone_number",
      createdAt: "clients.createdAt",
      updatedAt: "clients.updatedAt",
    });

    return getClients;
  }

  /**Metodo para pegar cliente por Id */
  public async getClientById(id: string): Promise<Client> {
    const getClients: Client = await connection("clients")
      .select({
        name: "clients.name",
        email: "clients.email",
        phoneNumber: "clients.phone_number",
        createdAt: "clients.createdAt",
        updatedAt: "clients.updatedAt",
      })
      .where({ id: id })
      .first();

    return getClients;
  }

  /**Metodo para atualizar clientes */
  public async updateClient(
    id: string,
    { name, email, phoneNumber }: IClientsDTO
  ): Promise<boolean> {
    const updateClient = await connection("clients")
      .update({
        name: name,
        email: email,
        phone_number: phoneNumber,
      })
      .where({ id: id });
    return updateClient !== 0;
  }

  /**Metodo para deletar clientes*/
  public async deleteClient(id: string): Promise<boolean> {
    const deleteClient = await connection("clients").delete().where({ id: id });
    return deleteClient != 0;
  }

  /**Metodo para registrar serviço */
  public async createService({
    idClient,
    nameClient,
    service,
    success,
  }: IServiceDTO): Promise<Service> {
    const createService: IServiceDTO = await connection("services").insert({
      idClient: idClient,
      nameClient: nameClient,
      service: service,
      success: success,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return createService;
  }
  /** Metodos para pegar todos os serviços */
  public async getServices(): Promise<Service> {
    const getServices: Service = await connection("services").select({
      idClient: "services.idClient",
      nameClient: "services.nameClient",
      service: "services.service",
      success: "services.success",
      createdAt: "services.createdAt",
      updatedAt: "services.updatedAt",
    });
    return getServices;
  }

  /**Metodpo para pegar um serviço pelo ID */
  public async getServiceById(id: string): Promise<Service> {
    const getServices: Service = await connection("services")
      .select({
        idClient: "services.idClient",
        nameClient: "services.nameClient",
        service: "services.service",
        success: "services.success",
        createdAt: "services.createdAt",
        updatedAt: "services.updatedAt",
      })
      .where({ id: id })
      .first();
    return getServices;
  }

  /**Metodo para atualzar um serviço  */
  public async updateService(
    id: string,
    { idClient, nameClient, service, success }: IServiceDTO
  ): Promise<boolean> {
    const updateService = await connection("services")
      .update({
        idClient: idClient,
        nameClient: nameClient,
        service: service,
        success: success,
        updatedAt: new Date(),
      })
      .where({ id: id });

    return updateService != 0;
  }

  /**Metodo para deletar um serviço */
  public async deleteService(id: string): Promise<boolean> {
    const deleteService = await connection("services")
      .delete()
      .where({ id: id });
    return deleteService != 0;
  }
}
export { UserRepository };
