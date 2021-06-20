"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*=============================================>>>>>
=  Imports  =
===============================================>>>>>*/
const express_1 = __importDefault(require("express"));
const routes = __importStar(require("./routes"));
const dotenv_1 = __importDefault(require("dotenv"));
/*= End of Imports =*/
/*=============================================<<<<<*/
// Initialize configuration
dotenv_1.default.config();
const PORT = process.env.EXPRESS_SERVER_PORT;
// Initialize express
const app = express_1.default();
// Router
routes.register(app);
// Handler
app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Example app listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map