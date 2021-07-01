import { Test, TestingModule } from '@nestjs/testing';
import { UserCommandController } from './user-command.controller';
import { UserCommandService } from '../service/user-command.service';

describe('UserCommandController', () => {
  let controller: UserCommandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCommandController],
      providers: [UserCommandService],
    }).compile();

    controller = module.get<UserCommandController>(UserCommandController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
