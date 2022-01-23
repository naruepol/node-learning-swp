import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from 'src/entities/contact.entity';
import { Subject } from 'src/entities/subject.entity';
import { ContactResolver } from './contact.resolver';
import { ContactService } from './contact.service';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Contact, Subject])],
  providers: [ContactResolver, ContactService],
})
export class ContactModule {}
