import { Injectable } from '@nestjs/common';

@Injectable()
export class Productos1Service {
    getProductos1() {
        return [{
        id: 1,
        name: 'otro pantalon'
    },
    {
        id: 2,
        name: 'otra remera'
    },
    {
        id: 3,
        name: 'otra media'
    }]
    }
}