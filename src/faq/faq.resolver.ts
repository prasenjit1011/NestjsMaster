import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { FaqService } from './faq.service';
import { Faq } from './models/faq.model';
import { CreateFaqInput } from './dto/create-faq.input';
import { UpdateFaqInput } from './dto/update-faq.input';

@Resolver(() => Faq)
export class FaqResolver {
  constructor(private readonly faqService: FaqService) {}

  @Query(() => [Faq])
  async faqs(): Promise<Faq[]> {
    return this.faqService.findAll();
  }

  @Query(() => Faq)
  async faq(@Args('id', { type: () => ID }) id: number): Promise<Faq> {
    return this.faqService.findOne(id);
  }

  @Query(() => [Faq])
  async faqsByCategory(@Args('category') category: string): Promise<Faq[]> {
    return this.faqService.findByCategory(category);
  }

  @Mutation(() => Faq)
  async createFaq(@Args('createFaqInput') createFaqInput: CreateFaqInput): Promise<Faq> {
    return this.faqService.create(createFaqInput);
  }

  @Mutation(() => Faq)
  async updateFaq(
    @Args('id', { type: () => ID }) id: number,
    @Args('updateFaqInput') updateFaqInput: UpdateFaqInput,
  ): Promise<Faq> {
    return this.faqService.update(id, updateFaqInput);
  }

  @Mutation(() => Boolean)
  async removeFaq(@Args('id', { type: () => ID }) id: number): Promise<boolean> {
    return this.faqService.remove(id);
  }
} 