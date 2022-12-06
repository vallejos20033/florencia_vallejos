import { Test, TestingModule } from '@nestjs/testing';
import { Productos1Service } from './producto1.service';

describe('Producto1Service', () => {
  let service: Productos1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Productos1Service],
    }).compile();

    service = module.get<Productos1Service>(Productos1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
