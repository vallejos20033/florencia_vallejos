import { Test, TestingModule } from '@nestjs/testing';
import { Productos1Controller } from './producto1.controller';

describe('Producto1Controller', () => {
  let controller: Productos1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Productos1Controller],
    }).compile();

    controller = module.get<Productos1Controller>(Productos1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
