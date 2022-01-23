import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'subject ' })
export class Subject {
  @Field()
  id: string;

  @Field()
  code: string;

  @Field()
  name: string;
}
