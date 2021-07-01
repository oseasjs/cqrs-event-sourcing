import { Test, TestingModule } from '@nestjs/testing';
import { UserQueryService } from '../service/user-query.service';
import { UserQueryController } from './user-query.controller';

describe('UserQueryController', () => {
  let controller: UserQueryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserQueryController],
      providers: [UserQueryService],
    }).compile();

    controller = module.get<UserQueryController>(UserQueryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
