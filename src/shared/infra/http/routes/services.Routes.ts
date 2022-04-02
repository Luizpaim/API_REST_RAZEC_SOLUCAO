import { ServicesController } from "../../../../modules/Users/useCases/ServicesClient/ServicesController";
import { Router } from "express";
import { GetServicesController } from "../../../../modules/Users/useCases/ServicesClient/GetServicesController";
import { GetServiceByIdController } from "../../../../modules/Users/useCases/ServicesClient/GetServiceByIdController";
import { UpdateServiceController } from "../../../../modules/Users/useCases/ServicesClient/UpdateServiceController";
import { DeleteServiceController } from "../../../../modules/Users/useCases/ServicesClient/DeleteServiceController";

const ServicesRoutes = Router();
const services = new ServicesController();
const getServices = new GetServicesController();
const getServiceById = new GetServiceByIdController();
const updateService = new UpdateServiceController();
const deleteService = new DeleteServiceController();

ServicesRoutes.post("/", services.handle);
ServicesRoutes.get("/", getServices.handle);
ServicesRoutes.get("/:id", getServiceById.handle);
ServicesRoutes.put("/:id", updateService.handle);
ServicesRoutes.delete("/:id", deleteService.handle);
export default ServicesRoutes;
