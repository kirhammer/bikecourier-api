
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/
import express from "express"

/*= End of Imports =*/
/*=============================================<<<<<*/

class App {
  public app: express.Application
  public port: number

  constructor({controllers, port}: { controllers: any[], port: number }) {
    this.app = express()
    this.port = port

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
  }

  private initializeMiddlewares() {
    this.app.use(express.json())
    this.app.use((req, res, next) => {
      // tslint:disable-next-line:no-console
      console.log(`Request: `, {
        path: req.path,
        method: req.method,
        body: req.body,
        params: req.params,
        query: req.query
      })
      next()
    })
  }

  private initializeControllers(controllers: any[]) {
    controllers.forEach(controller => this.app.use('/', controller.router));
  }

  public listen() {
    this.app.listen(this.port, () => {
      // tslint:disable-next-line:no-console
      console.log(`Server is running on ${this.port}`)
    })
  }
}

export default App