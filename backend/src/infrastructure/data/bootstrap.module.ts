import { SightModule } from '@application/http/sights/sight.module';
import { UserModule } from '@application/http/user/user.module';
import { Module } from '@nestjs/common';
import { UserDataService } from './user/users.service';

@Module({
    imports: [ UserModule ],
    controllers: [],
    providers: [UserDataService],
    exports: [UserDataService]
})
export class BootstrapModule {}
