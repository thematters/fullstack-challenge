import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity('Articles')
export class ArticleDb {
  @ObjectIdColumn()
  _id: string;

  @Column('varchar')
  title: string;

  @Column('varchar')
  description: string;

  @Column('text')
  content: string;

  @Column('uuid')
  createdBy: string;
}
