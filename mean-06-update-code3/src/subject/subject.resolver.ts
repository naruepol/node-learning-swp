import { HttpService } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Subject } from './models/subject.model';
import { SubjectService } from './subject.service';
import { map } from 'rxjs/operators';
import { NewSubjectInput } from './dto/new-subject-input';

@Resolver(() => Subject)
export class SubjectResolver {
  constructor(
    private service: SubjectService,
    private httpService: HttpService,
  ) {}
  @Query((_) => [Subject])
  subjects() {
    return this.service.all();
  }

  @Query((_) => Subject)
  subject(@Args('id') id: number) {
    return this.service.byId(id);
  }

  @Query((_) => [Subject])
  fsubjects() {
    return [
      {
        id: 'f1',
        code: 'fake',
        name: 'test',
      },
    ];
  }

  @Query((_) => [Subject])
  xsubjects(@Context() ctx) {
    return this.httpService
      .get<Subject[]>('http://localhost:8080/subject', {
        headers: ctx.req.headers,
      })
      .pipe(map((resp) => resp.data));
  }

  @Mutation((_) => Subject)
  addSubject(@Context() ctx, @Args('newSubjectInput') input: NewSubjectInput) {
    return this.httpService
      .post<Subject[]>('http://localhost:8080/subject', input, {
        headers: ctx.req.headers,
      })
      .pipe(map((resp) => resp.data));
  }
}
