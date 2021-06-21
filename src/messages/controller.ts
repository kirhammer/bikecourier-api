
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/

import * as express from 'express';
import Message from './message';

import { DateTime } from 'luxon'

/*= End of Imports =*/
/*=============================================<<<<<*/

class MessageController {
  public path = '/message';
  public router = express.Router();

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.post(this.path, this.createMessage);
  }

  // getAllPosts = (request: express.Request, response: express.Response) => {
  //   response.send(this.messages);
  // }

  createMessage = (request: express.Request, response: express.Response) => {
    const newMessage: Message = request.body;

    const responseObj: object = {
      ...newMessage,
      timestamp: DateTime.now().toUTC().toISO()
    }

    response.send(responseObj);
  }
}

export default MessageController;