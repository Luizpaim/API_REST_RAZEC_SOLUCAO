/**Importando dependencias */
import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import "reflect-metadata";
/**importando arquivos */
import routes from "../http/routes";
import "../../container";

class App {
  /**Propiedade da classe que ira receber a biblioteca do express */
  public express: express.Application;

  
  public constructor() {

    /**intancia objeto expree */
    this.express = express();

    /**Inatancia express definindo que a nossa rota vai receber padrão formato JSON */
    this.express.use(json());

    /**Liberando o nosso cors para a nossa api poder ser consumida por outros endpointer */
    this.express.use(cors());

    this.routes();
  }
  /**Metodo Para chamar as funcionalidades que será iniciada pela nossa class */
  public async start(port: number, callback: () => void) {
    return this.express.listen(port, callback);
  }

  /**Metodo para inicializar as nossas rotas por meio da bibliotecas do express */
  private routes(): void {
    routes(this.express);
  }
}
export default new App();

/**Arquivo APP que ira chamar as funcionalidades da nossa aplicação quando for inicializado a nossa API */
