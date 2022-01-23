import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Subject } from 'src/subject/models/subject.model';

@ObjectType({ description: 'contact ' })
export class Contact {
  @Field()
  id: number;

  @Field()
  subjectId: number;

  @Field((_) => Subject)
  subject: Subject;

  @Field({ nullable: true })
  message: string;

  @Field({ nullable: true })
  status: string;

  @Field({ nullable: true })
  comment: string;
}
