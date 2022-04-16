import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
// import { GqlFieldResolver } from '@@common/misc/field-resolver';
import { ArticleDto } from '../../dto/article';
import { Article } from '../../models/article';

@Resolver(() => ArticleDto)
export class AdminFieldResolver {
  @ResolveField()
  id(@Parent() parent: Article) {
    return parent.id;
  }

  @ResolveField()
  name(@Parent() parent: Article) {
    return parent.name;
  }
}
