import { Controller, Get, Post } from '@nestjs/common';
import { ProductosService } from './productos.service';

@Controller('api/edi')
export class ProductosController {
    constructor(private readonly productosService: ProductosService) {}

   @Get()
   getProductos()  {
      return this.productosService.getProductos();
    }
   @Post() 
  postProductos()  {
    return this.productosService.postProductos();
  }
}