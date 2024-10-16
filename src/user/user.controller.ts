import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { IsNotEmpty } from 'class-validator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUser() {
    console.log('here');
    return this.userService.findAllUser();
  }

  @Post()
  async create(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    createUserDto: CreateUserDto,
  ) {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  async findOne(@Param() id: any) {
    console.log(id);
    return this.userService.findUser(id);
  }

  @Patch(':id')
  async update(
    @Param() id: number,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(id,updateUserDto);
  }
  @Delete(':id')
  async delete(@Param() id : number){
    return this.userService.delete(id);
  }
  // @Get(':firstName')
  // async findOneByFirstName(@Param() firstName: any) {
  //   console.log(firstName);
  //   return this.userService.findOneByFirstName(firstName);
  // }
}
