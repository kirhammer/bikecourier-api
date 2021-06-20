
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/
import express from "express"
import * as routes from "./routes"
import dotenv from "dotenv"


/*= End of Imports =*/
/*=============================================<<<<<*/

// Initialize configuration
dotenv.config();

const PORT = process.env.EXPRESS_SERVER_PORT

// Initialize express
const app = express()

// Router
routes.register(app)

// Handler
app.listen(PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening at http://localhost:${PORT}`)
})