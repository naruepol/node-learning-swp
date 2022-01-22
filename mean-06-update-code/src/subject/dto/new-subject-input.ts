import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class NewSubjectInput {
  @Field()
  code: String;

  @Field()
  name: String;
}
