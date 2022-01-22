import { HttpService } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { map } from 'rxjs/operators';
import { ContactService } from './contact.service';
import { LoginInput } from './dto/login-input';
import { LoginResponse } from './dto/login-resp';
import { NewContactInput } from './dto/new-contact.input';
import { Pagination } from './dto/pagination.input';
import { Contact } from './models/contact.model';

@Resolver(() => Contact)
export class ContactResolver {
  constructor(
    private service: ContactService,
    private httpService: HttpService,
  ) {}

  @Query(() => [Contact])
  async contacts(@Args() args: Pagination) {
    const data = await this.service.all(args);
    return data.map((value) => {
      return { ...value, subjectId: value.subject };
    });
  }

  @Query(() => Contact)
  async contact(@Args('id') id: number) {
    const data = await this.service.byId(id);
    const model = new Contact();
    return { ...data, subjectId: data.subject };
  }

  @ResolveField(() => Contact, { name: 'subject' })
  async subject(@Parent() contact: Contact) {
    const { subjectId } = contact;
    return this.service.serviceById(subjectId);
  }

  @Mutation(() => Contact)
  async addContact(
    @Args('newContactData') newContactData: NewContactInput,
  ): Promise<Contact> {
    const recipe = await this.service.create(newContactData);
    // pubSub.publish('recipeAdded', { recipeAdded: recipe });
    // return {id: recipe.id, subject: this.subjectService.byId(recipe.subject), };
    const resp = new Contact();
    resp.id = recipe.id;
    // const resp = await this.contact(recipe.id);
    return resp;
  }

  @Mutation(() => LoginResponse)
  async login(@Args('loginInput') loginInput: LoginInput) {
    return this.httpService.post('http://localhost:8081/auth', loginInput).pipe(
      map((resp) => {
        return {
          success: true,
          token: resp.headers.authorization.replace('Bearer ', ''),
        };
      }),
    );
  }
}
