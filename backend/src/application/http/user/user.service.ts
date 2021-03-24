import { User, UserDocument } from '@domain/user/schemas/user.schema';
import { Role } from '@infrastructure/auth/roles.enum';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import encryptPassword from '../shared/auth/password.service';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) {}

    async create(createUserDto: User): Promise<User> {
      const registeredUsers = await this.UserModel.find({registered: true})
      if(registeredUsers.length == 0){
        createUserDto.role = Role.Admin;
      }
      const createdUser = new this.UserModel(createUserDto);
      const existing = await this.UserModel.findOne({ login: createdUser.login})

      if(existing) throw new BadRequestException("User already exists")
      createdUser.password = encryptPassword(createUserDto.password);
      return await createdUser.save();
    }

    async getByLogin(login: string): Promise<User> {
      return await this.UserModel.findOne({ login });
    }

    async findAll(): Promise<User[]> {
      return await this.UserModel.find().exec();
    }

    async findOne(user: User): Promise<User> {
      return this.UserModel.findOne(user);
    }

    async remove(body: User): Promise<User> {
      return this.UserModel.remove(body);
    }

    async seed(){
      const regular = await this.findOne({login: "regular"} as User)
      if(!regular){
        await this.create({ login: "regular", password: "regular", role: Role.Regular, registered: false})
        await this.create({ login: "admin", password: "admin", role: Role.Regular, registered: false})
        await this.create({ login: "moderator", password: "moderator", role: Role.Regular, registered: false})
      }
    }

}
