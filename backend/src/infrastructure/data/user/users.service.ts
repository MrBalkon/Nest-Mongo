import { UserService } from '@application/http/user/user.service';
import { Role } from '@infrastructure/auth/roles.enum';
import { Inject, Injectable } from '@nestjs/common'
@Injectable()
export class UserDataService{
    constructor(@Inject(UserService) private userService, ) {}

    async appendUsers(){
        // await this.UserService.remove({login: "admin"})
        // await this.UserService.remove({login: "moderator"})
        // await this.UserService.remove({login: "regular"})

        // await this.UserService.create({ login: "admin", password: "admin", role: Role.Admin})
        // await this.UserService.create({ login: "moderator", password: "moderator", role: Role.Moderator})
        await this.userService.create({ login: "regular", password: "regular", role: Role.Regular})
        await this.userService.create({ login: "admin", password: "admin", role: Role.Regular})
        await this.userService.create({ login: "moderator", password: "moderator", role: Role.Regular})
        // console.log('ewrewr')
    }
}