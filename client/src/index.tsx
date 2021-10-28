/**
 * This is an incomplete script of client app. Please
 * make it live with features we requested. :)
 *
 */
import { render } from "react-dom";
import { ApolloProvider, useQuery, useMutation } from "@apollo/client";
import { client } from "./graphql/ApolloClient";
import React, { useState, useEffect } from "react";
import {
  Container,
  Message,
  AddButton,
  ArticleContainer,
  ArticleTitle,
  ArticleContent,
  TitleContainer,
  TitleLabel,
  TitleInput,
  ContentInput,
  ButtonContainer,
  Button,
} from "./styles";
import {
  GET_ARTICLE_QUERY,
  ADD_ARTICLE_MUTATION,
} from "./graphql/mutations/article";
import { Mode, Article } from "./types";
// import {CreateArticle} from "./components/CreateArticle";
// import ArticleList from "./components/ArticleList";

type ArticleListProps = {
  articles: Article[];
  setPostMode: () => void;
};

const ArticleList = (props: ArticleListProps): React.ReactElement => {
  return (
    <div>
      <AddButton onClick={() => props.setPostMode()}>New post</AddButton>
      {props.articles.map((article: Article) => (
        <ArticleContainer key={article._id}>
          <ArticleTitle>{article.title}</ArticleTitle>
          <ArticleContent>{article.content}</ArticleContent>
        </ArticleContainer>
      ))}
    </div>
  );
};

type CreateArticleProps = {
  setViewMode: () => void;
  setMessage: (message: string) => void;
  setIsErrorMessage: (isErrorMessage: boolean) => void;
};

const CreateArticle = (props: CreateArticleProps): React.ReactElement => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [addArticle] = useMutation(ADD_ARTICLE_MUTATION);

  const handleTitleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setTitle(value);
  };

  const handleContentInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.currentTarget;
    setContent(value);
  };

  const handleSubmit = () => {
    addArticle({
      variables: { title, content },
    })
      .then((res) => {
        props.setMessage("Your article has been posted.");
        props.setIsErrorMessage(false);
      })
      .catch((error) => {
        props.setMessage(error.message);
        props.setIsErrorMessage(true);
      });
    setTitle("");
    setContent("");
    props.setViewMode();
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    props.setViewMode();
  };

  return (
    <div>
      <TitleContainer>
        <TitleLabel htmlFor="title">Title:</TitleLabel>
        <TitleInput
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleInput}
        />
      </TitleContainer>
      <ContentInput
        id="content"
        name="content"
        placeholder="Say something"
        value={content}
        onChange={handleContentInput}
      />
      <ButtonContainer>
        <Button onClick={handleCancel}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </ButtonContainer>
    </div>
  );
};

const App = (): React.ReactElement => {
  const [mode, setMode] = useState("view" as Mode);
  const [message, setMessage] = useState("" as string);
  const [isErrorMessage, setIsErrorMessage] = useState(false as boolean);
  const { data } = useQuery(GET_ARTICLE_QUERY);
  let articles: Article[] = data != null ? data.articles : [];

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  const setViewMode = () => {
    setMode("view");
    window.location.reload();
  };

  const setPostMode = () => {
    setMode("post");
  };

  return (
    <Container>
      <Message message={message} isErrorMessage={isErrorMessage}>
        {message}
      </Message>
      {mode === "view" ? (
        <ArticleList articles={articles} setPostMode={setPostMode} />
      ) : (
        <CreateArticle
          setIsErrorMessage={setIsErrorMessage}
          setMessage={setMessage}
          setViewMode={setViewMode}
        />
      )}
    </Container>
  );
};

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
