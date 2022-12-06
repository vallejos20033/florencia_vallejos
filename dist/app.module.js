"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const productos_service_1 = require("./productos/productos.service");
const productos_controller_1 = require("./productos/productos.controller");
const producto1_service_1 = require("./producto1/producto1.service");
const producto1_controller_1 = require("./producto1/producto1.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, productos_controller_1.ProductosController, producto1_controller_1.Producto1Controller],
        providers: [app_service_1.AppService, productos_service_1.ProductosService, producto1_service_1.Productos1Service],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map