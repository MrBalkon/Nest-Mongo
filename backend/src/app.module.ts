import { BootstrapModule } from './infrastructure/data/bootstrap.module';
import { CityModule } from '@application/http/city/city.module'
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '@infrastructure/logger/logger.middleware';
import { AuthCheckerMiddleware } from '@application/http/shared/auth/auth.middleware'
import { MongooseModule } from '@nestjs/mongoose';
import { SightModule } from '@application/http/sights/sight.module';
import { AuthenticationModule } from '@application/http/shared/auth/auth.module';

@Module({
  imports: [
    BootstrapModule,
    AuthenticationModule,
    SightModule,
    CityModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_MAIN_URL),
    BootstrapModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthCheckerMiddleware, LoggerMiddleware)
      .forRoutes('/');
  }
}
