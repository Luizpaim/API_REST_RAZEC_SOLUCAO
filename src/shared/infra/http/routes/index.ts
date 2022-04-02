import { Router, Application } from "express";
import AuthenticateRoutes from "./Authenticate.Routes";
import ClientsRoutes from "./registerClient.Routes";
import UserRoutes from "./user.Routes";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import ServicesRoutes from "./services.Routes";
import { ensureEmployee } from "../middleware/ensureEmployee";

const routes = (app: Application): void => {
  const Routes = Router();
  const routePrefix =
    process.env.NODE_ENV === "production" ? "/" : "/development/";

  app.use(routePrefix, Routes);
  Routes.use("/users", UserRoutes);
  Routes.use("/login", AuthenticateRoutes);
  Routes.use("/clients", ensureAuthenticated, ensureEmployee, ClientsRoutes);
  Routes.use("/services", ensureAuthenticated, ensureEmployee, ServicesRoutes);
};
export default routes;
