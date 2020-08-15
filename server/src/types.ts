export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  articles?: Maybe<Array<Maybe<Article>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addArticle?: Maybe<Article>;
};


export type MutationAddArticleArgs = {
  input: AddArticleInput;
};

export type Article = Node & {
  __typename?: 'Article';
  id: Scalars['ID'];
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
};

export type AddArticleInput = {
  title: Scalars['String'];
  content?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

