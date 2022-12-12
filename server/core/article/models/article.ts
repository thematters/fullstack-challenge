export class Article {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public createdAt: Date,
    public createdBy: string,
    public deletedAt: Date | null,
  ) {}
}
