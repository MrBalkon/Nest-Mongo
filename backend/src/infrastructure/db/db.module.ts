import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './db.service';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            useClass: MongooseConfigService,
        }),
    ],
})
export class DbModule {}