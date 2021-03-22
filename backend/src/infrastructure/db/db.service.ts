// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// require('dotenv').config();

// class ConfigService {

//   constructor(private env: { [k: string]: string | undefined }) { }

//   private getValue(key: string, throwOnMissing = true): string {
//     const value = this.env[key];
//     if (!value && throwOnMissing) {
//       throw new Error(`config error - missing env.${key}`);
//     }

//     return value;
//   }

//   public ensureValues(keys: string[]) {
//     keys.forEach(k => this.getValue(k, true));
//     return this;
//   }

//   public getPort() {
//     return this.getValue('PORT', true);
//   }

//   public isProduction() {
//     const mode = this.getValue('NODE_ENV', false);
//     return mode != 'development';
//   }

//   public getTypeOrmConfig(): TypeOrmModuleOptions {
//     return {
//       type: 'mongodb',
//       host: this.getValue('DB_HOST'),
//       port: parseInt(this.getValue('DB_PORT')),
//       database: this.getValue('DB_DATABASE_NAME'),
//       synchronize: true,

//       entities: ['dist/domain/**/**.entity{.ts,.js}'],

//       migrationsTableName: 'migration',

//       migrations: ['src/migration/*.ts'],

//       cli: {
//         migrationsDir: 'src/migration',
//       },

//       ssl: this.isProduction(),
//     };
//   }

// }

// const configDBService = new ConfigService(process.env)
//   .ensureValues([
//     'DB_HOST',
//     'DB_PORT',
//     'DB_USERNAME',
//     'DB_PASSWORD',
//     'DB_DATABASE_NAME'
// ]);

// export { configDBService };