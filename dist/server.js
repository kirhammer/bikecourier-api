"use strict";
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
// Modules
const controller_1 = __importDefault(require("./messages/controller"));
/*= End of Imports =*/
/*=============================================<<<<<*/
// Environment configuration
dotenv_1.default.config();
const PORT = process.env.EXPRESS_SERVER_PORT;
// Server configuration
const app = new app_1.default({
    controllers: [
        new controller_1.default()
    ],
    port: Number(PORT)
});
app.listen();
//# sourceMappingURL=server.js.map