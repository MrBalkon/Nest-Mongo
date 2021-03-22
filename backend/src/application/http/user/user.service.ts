import { User, UserDocument } from '@domain/user/schemas/user.schema';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import encryptPassword from '../shared/auth/password.service';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

    async create(createUserDto: User): Promise<User> {
      const createdUser = new this.UserModel(createUserDto);
      const existing = await this.UserModel.findOne({ login: createUserDto.login})
      if(existing) throw new BadRequestException()
      return await this.UserModel.create({ ...createdUser, password: encryptPassword(createUserDto.password) });
    }

    async getByLogin(login: string): Promise<User> {
      return await this.UserModel.findOne({ login });
    }

    async findAll(): Promise<User[]> {
      return await this.UserModel.find().exec();
    }

    async findOne(): Promise<User> {
      return this.UserModel.findOne();
    }

    async remove(body: User): Promise<User> {
      return this.UserModel.remove(body);
    }

}
