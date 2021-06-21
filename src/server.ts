
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/

import App from './app'
import dotenv from 'dotenv'

// Modules
import MessageController from './messages/controller'

/*= End of Imports =*/
/*=============================================<<<<<*/

// Environment configuration
dotenv.config();
const PORT = process.env.EXPRESS_SERVER_PORT

// Server configuration
const app = new App({
  controllers: [
    new MessageController()
  ],
  port: Number(PORT)
})

app.listen()