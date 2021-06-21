"use strict";
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const luxon_1 = require("luxon");
/*= End of Imports =*/
/*=============================================<<<<<*/
class MessageController {
    constructor() {
        this.path = '/message';
        this.router = express.Router();
        // getAllPosts = (request: express.Request, response: express.Response) => {
        //   response.send(this.messages);
        // }
        this.createMessage = (request, response) => {
            const newMessage = request.body;
            const responseObj = Object.assign(Object.assign({}, newMessage), { timestamp: luxon_1.DateTime.now().toUTC().toISO() });
            response.send(responseObj);
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.post(this.path, this.createMessage);
    }
}
exports.default = MessageController;
//# sourceMappingURL=controller.js.map