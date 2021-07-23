import { Controller, Post, Body, Logger, HttpStatus, BadRequestException, HttpCode, InternalServerErrorException, Query } from '@nestjs/common';
import { CreateUserCommandDto } from '../dto/create-user-command.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CommandBus } from '@nestjs/cqrs';

@ApiTags('User normalized on Postgres DB (Command)')
@Controller('v1/user-command')
export class UserCommandController {

  private logger = new Logger('UserCommandController');

  constructor(
    private commandBus: CommandBus) {}

  @ApiOperation({ summary: 'Create an User, syncing or not with Query service' })
  @ApiResponse({ status: HttpStatus.OK, description: 'User created succesful' })
  @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Fail on create User', type: BadRequestException })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Fail on create User', type: InternalServerErrorException })
  @Post()
  @HttpCode(HttpStatus.OK)
  create(
    @Query('seed') seed: string,
    @Body() user: CreateUserCommandDto) {
    this.logger.verbose(`Creating new User [email: '${user.email}'] `);
    this.commandBus.execute(new CreateUserCommandDto(user.email, seed));
  }
  
}
