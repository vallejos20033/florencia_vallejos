import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosService } from './productos/productos.service';
import { ProductosController } from './productos/productos.controller';
import { Productos1Service } from './producto1/producto1.service';
import { Producto1Controller } from './producto1/producto1.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductosController, Producto1Controller],
  providers: [AppService, ProductosService, Productos1Service],
})
export class AppModule {}
