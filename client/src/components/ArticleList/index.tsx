import { Article } from "../../types";
import {
  AddButton,
  ArticleContainer,
  ArticleTitle,
  ArticleContent,
} from "./styles";

type Props = {
  articles: Article[];
  setPostMode: () => void;
};

export const ArticleList = (props: Props): React.ReactElement => {
  return (
    <div style={{ padding: "0 50px" }}>
      <AddButton onClick={() => props.setPostMode()}>New post</AddButton>
      {props.articles.map((article: Article) => (
        <ArticleContainer>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleContent>{article.content}</ArticleContent>
        </ArticleContainer>
      ))}
    </div>
  );
};
