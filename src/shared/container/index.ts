import { container } from "tsyringe";
import { UserRepository } from "../../modules/Users/infra/knex/repositories/UserRepository";
import { IUserRepository } from "../../modules/Users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
