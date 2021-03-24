import { DynamicModule, Module } from '@nestjs/common';
import { ModelDefinition, TenancyModuleAsyncOptions, TenancyModuleOptions } from './interfaces';
import { TenancyCoreModule } from './tenancy-core.module';
import { TenancyFeatureModule } from './tenancy-feature.module';

@Module({
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: TenancyGuard,
    // },
  ],
})
export class TenancyModule {

  /**
   * For root synchronous imports
   *
   * @static
   * @param {TenancyModuleOptions} options
   * @returns {DynamicModule}
   * @memberof TenancyModule
   */
  static forRoot(options: TenancyModuleOptions): DynamicModule {
    return {
      module: TenancyModule,
      imports: [TenancyCoreModule.register(options)],
    };
  }

  /**
   * For root asynchronous imports
   *
   * @static
   * @param {TenancyModuleAsyncOptions} options
   * @returns {DynamicModule}
   * @memberof TenancyModule
   */
  static forRootAsync(options: TenancyModuleAsyncOptions): DynamicModule {
    return {
      module: TenancyModule,
      imports: [TenancyCoreModule.registerAsync(options)],
    };
  }

  /**
   * For feature module imports
   *
   * @static
   * @param {ModelDefinition[]} models
   * @returns {DynamicModule}
   * @memberof TenancyModule
   */
  static forFeature(models: ModelDefinition[]): DynamicModule {
    return {
      module: TenancyModule,
      imports: [TenancyFeatureModule.register(models)],
    };
  }

}
