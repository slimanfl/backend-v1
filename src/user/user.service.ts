import { Injectable, NotFoundException, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly user: Repository<User>,
  ) {}
  async findAllUser() {
    const users = await this.user.find();
    return {
      data: users,
      count: users.length,
    };
  }
  async findUser({ id }: any) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException();
    return user;
  }
  async findOneByFirstName({ firstName }: any) {
    const user = await this.user.findOne({
      where: { firstName: firstName },
    });
    if (!user) throw new NotFoundException();
    return user;
  }
  async create(createUserDto: CreateUserDto): Promise<any> {
    const newUser = await this.user.create(createUserDto);
    return this.user.save({ ...newUser, active: true });
  }
  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    const updatedUser = await this.user.findOne({ where: { id: id } });
    if (!updatedUser) throw new NotFoundException();
    return this.user.save({ ...updatedUser, ...updateUserDto });
  }
  async delete(id: number) {
    const user = await this.user.findOne({ where: { id: id } });
    if (!user) throw new NotFoundException();
    return await this.user.delete(id);
  }
}
