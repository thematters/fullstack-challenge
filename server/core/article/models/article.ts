export class Article {
  constructor(
    public id: number,
    public name: string,
    public createdAt: Date,
    public deletedAt: Date | null,
  ) {}
}
