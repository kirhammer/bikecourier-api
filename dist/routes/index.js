"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const uuid_1 = require("uuid");
const register = (app) => {
    // define a route handler for the default home page
    app.post("/message", (req, res) => {
        const message = {
            id: uuid_1.v4(),
            text: req.body.text
        };
        res.send(message);
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map