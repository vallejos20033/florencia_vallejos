import { Injectable, Get } from '@nestjs/common';
import { RoutesMapper } from '@nestjs/core/middleware/routes-mapper';

@Injectable()
export class ProductosService {
    getProductos() {
        return [{
        id: 1,
        name: 'pantalon'
    },
    {
        id: 2,
        name: 'remera'
    },
    {
        id: 3,
        name: 'medias'
    }]
    }
    postProductos() {
        return "Producto blabla"
    }
}