import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import * as config from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { SubjectModule } from './subject/subject.module';
import { ContactModule } from './contact/contact.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(config),
    UserModule,
    AuthModule,
    SubjectModule,
    ContactModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
