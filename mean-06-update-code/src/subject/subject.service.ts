import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';
import { Repository } from 'typeorm';
import { NewSubject } from './dto/new-subject';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectRepo: Repository<Subject>,
  ) {}

  all(): Promise<Subject[]> {
    return this.subjectRepo.find();
  }

  byId(id: number): Promise<Subject> {
    return this.subjectRepo.findOne(id);
  }

  newSubject(subject: NewSubject){
    const nSubject = this.subjectRepo.create();
    nSubject.code = subject.code;
    nSubject.name = subject.name;
    return this.subjectRepo.save(nSubject);
  }
  
  updateById(id:number, subject: NewSubject){
    const nSubject  = this.subjectRepo.create(subject);
    return this.subjectRepo.update(id, nSubject);
  }

  deleteById(id:number){
    return this.subjectRepo.delete(id);
  }

  filterByCode(code : string){
    this.subjectRepo.find({ where: { code } });
  }

  filterPage(skip: number, limit: number){
    return this.subjectRepo.findAndCount({skip : skip, take:limit });
    //return this.subjectRepo.findAndCount({skip, take:limit });
  }

}
