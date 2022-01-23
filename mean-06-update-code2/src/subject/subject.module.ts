import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';
import { SubjectResolver } from './subject.resolver';
import { SubjectService } from './subject.service';
import { SubjectController } from './subject.controller';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Subject])],
  providers: [SubjectResolver, SubjectService],
  controllers: [SubjectController],
})
export class SubjectModule {}
