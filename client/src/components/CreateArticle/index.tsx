import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ARTICLE_MUTATION } from "../../graphql/mutations/article";
import {
  TitleContainer,
  TitleLabel,
  TitleInput,
  ContentInput,
  ButtonContainer,
  Button,
} from "./styles";

type Props = {
  setViewMode: () => void;
  setMessage: (message: string) => void;
  setIsErrorMessage: (isErrorMessage: boolean) => void;
};

export const CreateArticle = (props: Props): React.ReactElement => {
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
