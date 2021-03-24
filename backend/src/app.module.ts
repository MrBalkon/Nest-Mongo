import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LoggerMiddleware } from '@infrastructure/logger/logger.middleware';
import { AuthCheckerMiddleware } from '@application/http/shared/auth/auth.middleware'
import { SightModule } from '@application/http/sights/sight.module';
import { AuthenticationModule } from '@application/http/shared/auth/auth.module';
import { UserModule } from '@application/http/user/user.module';
import { CityModule } from '@application/http/city/city.module';
import { TenancyModule } from '@infrastructure/tenancy';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/users`),
    TenancyModule.forRoot({
      options: {},
      uri: (tenantId: string) => `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${tenantId}`,
    }),
    UserModule,
    SightModule,
    CityModule,
    AuthenticationModule,
  ],
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
