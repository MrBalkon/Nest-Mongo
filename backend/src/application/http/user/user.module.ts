import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '@domain/user/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema}])
    ],
    controllers: [
        UserController],
    providers: [
        UserService,],
    exports: [
        UserService
    ]
})
export class UserModule { }