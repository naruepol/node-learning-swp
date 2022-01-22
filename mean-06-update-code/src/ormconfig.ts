import { ConnectionOptions } from 'typeorm';

// this config file for migration cli
const config: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST ?? 'localhost',
  port: parseInt(process.env.DB_PORT) ?? 3306,
  username: process.env.DB_USER ?? 'usr',
  password: process.env.DB_PWD ?? 'usr',
  database: process.env.DB_NAME ?? 'test_db',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  extra: { timezone: '+07' },

  // We are using migrations, synchronize should be set to false.
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: false,
  logging: true,
  //   logger: 'file',

  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
};

export = config;
