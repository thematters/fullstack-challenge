import { GQLResolver } from '../definitions/schemas';
import Article from './Article.resolver';
import PaginationContent from './PaginationContent.resolver';
import PaginationResult from './PaginationResult.resolver';
import Query from './Query.resolver';
import Mutation from './Mutation.resolver';

const resolver: GQLResolver = {
  Article,
  PaginationContent,
  PaginationResult,
  Query,
  Mutation,
}

export default resolver as {};