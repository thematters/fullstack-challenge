import { Column, Entity } from 'typeorm';
import { ArticleDb } from './article';

@Entity('Accounts')
export class AccountDb {
  @Column('varchar')
  address: string;

  @Column(() => ArticleDb)
  articles: ArticleDb[];
}
