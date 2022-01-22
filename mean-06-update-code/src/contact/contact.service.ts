import { Injectable } from '@nestjs/common';
import { Contact } from 'src/entities/contact.entity';
import { Subject } from 'src/entities/subject.entity';
import { getRepository, Repository } from 'typeorm';
import { NewContactInput } from './dto/new-contact.input';
import { Pagination } from './dto/pagination.input';

@Injectable()
export class ContactService {
  all(args: Pagination): Promise<Contact[]> {
    const query = getRepository(Contact).createQueryBuilder();
    args.limit ? query.limit(args.limit) : null;
    args.offset ? query.offset(args.offset) : null;
    return query.getMany();
  }

  byId(id: number): Promise<Contact> {
    return getRepository(Contact).findOne(id);
  }

  create(data: NewContactInput): Promise<Contact> {
    const repo: Repository<Contact> = getRepository(Contact);
    const model: Contact = repo.create();
    model.subject = data.subject;
    model.message = data.message;
    return repo.save(model);
  }

  serviceById(id: number): Promise<Subject> {
    const repo: Repository<Subject> = getRepository(Subject);
    return repo.findOne(id);
  }
}
