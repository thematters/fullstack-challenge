/**
 * This is an incomplete script of client app. Please
 * make it live with features we requested. :)
 *
 */
import { render } from "react-dom";
import { ApolloProvider, useMutation, useQuery } from "@apollo/client";
import { client } from "./graphql/ApolloClient";
import React, { useState, useEffect } from "react";
import {
  GET_ARTICLE_QUERY,
  ADD_ARTICLE_MUTATION,
} from "./graphql/mutations/article";

type Article = { title: string; content: string };

type ArticleListProps = {
  articles: Article[];
  setPostMode: () => void;
};
const ArticleList = (props: ArticleListProps): React.ReactElement => {
  return (
    <div style={{ padding: "0 50px" }}>
      <button
        style={{ width: "250px", height: "50px", fontSize: "25px" }}
        onClick={() => props.setPostMode()}
      >
        New post
      </button>
      {props.articles.map((article: Article) => (
        <div
          style={{ borderBottom: "1px solid #c4c4c4", paddingBottom: "20px" }}
        >
          <h2>{article.title}</h2>
          <div>{article.content}</div>
        </div>
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
  const [addArticle, { error }] = useMutation(ADD_ARTICLE_MUTATION);
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
    addArticle({ variables: { title, content } });
    if (error != null) {
      props.setMessage(error.message);
      props.setIsErrorMessage(true);
    } else {
      props.setMessage("Your article has been posted.");
      props.setIsErrorMessage(false);
    }
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
    <div style={{ margin: "50px 0 0 50px" }}>
      <div style={{ height: "50px" }}>
        <label htmlFor="title">Title:</label>
        <input
          style={{ height: "30px", width: "500px", marginLeft: "10px" }}
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleInput}
        />
      </div>
      <textarea
        style={{ height: "400px", width: "550px", padding: "10px" }}
        id="content"
        name="content"
        placeholder="Say something"
        value={content}
        onChange={handleContentInput}
      />
      <div>
        <button
          style={{ width: "150px", height: "50px" }}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          style={{ width: "150px", height: "50px", marginLeft: "10px" }}
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

type modeType = "view" | "post";

const App = (): React.ReactElement => {
  const [mode, setMode] = useState("view" as modeType);
  const [message, setMessage] = useState("" as string);
  const [isErrorMessage, setIsErrorMessage] = useState(true as boolean);
  const { data, refetch } = useQuery(GET_ARTICLE_QUERY);
  const articles: Article[] = data != null ? data.getArticles : [];

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 3000);
  }, [message]);

  const setViewMode = () => {
    setMode("view");
    refetch();
  };
  const setPostMode = () => {
    setMode("post");
  };

  return (
    <div>
      <div
        style={{
          margin: "50px 0 0 50px",
          height: message !== "" ? "50px" : "0",
          color: isErrorMessage ? "red" : "black",
          fontSize: "20px",
          textAlign: "center",
        }}
      >
        {message}
      </div>
      {mode === "view" ? (
        <ArticleList articles={articles} setPostMode={setPostMode} />
      ) : (
        <CreateArticle
          setIsErrorMessage={setIsErrorMessage}
          setMessage={setMessage}
          setViewMode={setViewMode}
        />
      )}
    </div>
  );
};

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("app")
);
