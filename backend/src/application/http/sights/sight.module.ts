import { SightService } from './sight.service';
import { Module } from '@nestjs/common';
import { SightController } from './sight.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Sight, SightSchema } from '@domain/sight/schemas/sight.schema';
import { DbModule } from '@infrastructure/db/db.module';
import { TenancyModule } from '@infrastructure/tenancy';

@Module({
    imports: [
        TenancyModule.forFeature([{ name: Sight.name, schema: SightSchema }])
    ],
    controllers: [
        SightController],
    providers: [
        SightService,],
    exports: [
        SightService
    ]
})
export class SightModule { }
