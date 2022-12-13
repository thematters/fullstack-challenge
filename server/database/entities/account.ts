import { CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { ArticleDb } from './article';

@Entity('Accounts')
export class AccountDb {
  @PrimaryColumn('uuid')
  id: string;

  @PrimaryColumn('varchar')
  address: string;

  @OneToMany(() => ArticleDb, (article) => article.createdBy)
  articles: [ArticleDb];

  @CreateDateColumn()
  createdAt: string;
}
