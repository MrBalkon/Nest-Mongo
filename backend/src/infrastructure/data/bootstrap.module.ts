import { CityModule } from '@application/http/city/city.module';
import { SightModule } from '@application/http/sights/sight.module';
import { UserModule } from '@application/http/user/user.module';
import { Module } from '@nestjs/common';
import { CitiesDataService } from './cities/cities.service';
import { UserDataService } from './user/users.service';

@Module({
    imports: [ CityModule, SightModule, UserModule ],
    controllers: [],
    providers: [CitiesDataService, UserDataService],
})
export class BootstrapModule {}
