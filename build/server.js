"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
app.get('/', function (request, response) {
    return response.json({
        message: 'Hello world! \,,/'
    });
});
app.listen(3334, function () { return console.log('im listening on port :3334'); });
//# sourceMappingURL=server.js.map