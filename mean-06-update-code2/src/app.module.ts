import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import * as config from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';
import { SubjectModule } from './subject/subject.module';
import { ContactModule } from './contact/contact.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';
@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    TypeOrmModule.forRoot(config),
    MongooseModule.forRoot("mongodb://localhost/nest", {
      user: "root",
      pass: "n12345",
      authSource: "admin",
    }),
    UserModule,
    AuthModule,
    SubjectModule,
    ContactModule,
    NewsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}


