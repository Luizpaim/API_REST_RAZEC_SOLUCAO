import { RegisterClientController } from "../../../../modules/Users/useCases/ClientUser/RegisterClientController";
import { Router } from "express";
import { GetClientsController } from "../../../../modules/Users/useCases/ClientUser/GetClientsController";
import { GetClientByIdController } from "../../../../modules/Users/useCases/ClientUser/GetClientByIdController";
import { UpdateClientController } from "../../../../modules/Users/useCases/ClientUser/UpdateClientController";
import { DeleteClientController } from "../../../../modules/Users/useCases/ClientUser/DeleteClientController";

const ClientsRoutes = Router();
const registerClient = new RegisterClientController();
const getClients = new GetClientsController();
const getClientById = new GetClientByIdController();
const updateClient = new UpdateClientController();
const deleteClient = new DeleteClientController();

ClientsRoutes.post("/", registerClient.handle);
ClientsRoutes.get("/", getClients.handle);
ClientsRoutes.get("/:id", getClientById.handle);
ClientsRoutes.put("/:id", updateClient.handle);
ClientsRoutes.delete("/:id", deleteClient.handle);

export default ClientsRoutes;
