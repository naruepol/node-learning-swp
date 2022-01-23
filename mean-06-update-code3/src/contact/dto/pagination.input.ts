import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ArgsType()
export class Pagination {
  @Field((type) => Int, { nullable: true })
  @IsOptional()
  offset?: number;

  @Field((type) => Int, { nullable: true })
  @IsOptional()
  limit?: number;
}
