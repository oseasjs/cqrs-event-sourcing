import { Controller, Get, HttpStatus, HttpCode, Logger, NotFoundException, Query } from '@nestjs/common';
import { UserQueryService } from '../service/user-query.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserQueryDto } from '../dto/user-query.dto';

@ApiTags('User denormalized on Mongo (Query)')
@Controller('v1/user-query')
export class UserQueryController {

  private logger = new Logger('UserQueryController');

  constructor(private readonly userQueryService: UserQueryService) {}

  @ApiOperation({ summary: 'Find All Users (TOP 10)' })
  @ApiResponse({ status: HttpStatus.OK, description: 'List of Users from MongoDB', type: [UserQueryDto] })
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    this.logger.verbose(`List All Users`);
    return this.userQueryService.findAll();
  }

  @ApiOperation({ summary: 'Find Users by email' })
  @ApiResponse({ status: HttpStatus.OK, description: 'User found with email', type: UserQueryDto })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'User not found', type: NotFoundException })
  @Get('/email')
  @HttpCode(HttpStatus.OK)
  findByEmail(
    @Query('email') email: string) {
    this.logger.verbose(`Find User by email '${email}'`);
    return this.userQueryService.findByEmail(email);
  }

}
