"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/
const express_1 = __importDefault(require("express"));
/*= End of Imports =*/
/*=============================================<<<<<*/
class App {
    constructor({ controllers, port }) {
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    initializeMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use((req, res, next) => {
            // tslint:disable-next-line:no-console
            console.log(`Request: `, {
                path: req.path,
                method: req.method,
                body: req.body,
                params: req.params,
                query: req.query
            });
            next();
        });
    }
    initializeControllers(controllers) {
        controllers.forEach(controller => this.app.use('/', controller.router));
    }
    listen() {
        this.app.listen(this.port, () => {
            // tslint:disable-next-line:no-console
            console.log(`Server is running on ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map