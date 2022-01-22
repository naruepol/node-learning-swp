import { Field, InputType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class NewContactInput {
  @Field()
  // @MaxLength(30)
  subject: number;

  @Field({ nullable: true })
  @IsOptional()
  // @Length(30, 255)
  message?: string;
}
