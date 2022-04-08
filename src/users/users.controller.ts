import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudAuth, CrudController } from '@nestjsx/crud';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Crud({
  model: {
    type: User,
  },
  query: {
    softDelete: true,
  },
})
@CrudAuth({
  property: 'user',
})
@ApiBearerAuth()
@ApiTags('users')
@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController implements CrudController<User> {
  constructor(public service: UsersService) {}
}
