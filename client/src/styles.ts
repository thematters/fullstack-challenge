import styled from 'styled-components'

export const Message = styled.div<{ message: string, isErrorMessage: boolean }>`
  margin: 50px 0 0 50px;
  height: ${props => props.message !== "" ? "50px" : "0"};
  color: ${props => props.isErrorMessage ? "red" : "black"};
  font-size: 20px;
  text-align: center;
`

export const Container = styled.div`
  margin: 50px 50px 0 50px;
`


export const TitleContainer = styled.div`
  height: 50px;
`

export const TitleLabel = styled.label``

export const TitleInput = styled.input`
  height: 30px; 
  width: 500px; 
  margin-left: 10px;
`

export const ContentInput = styled.textarea`
  height: 400px;
  width: 550px;
  padding: 10px;
`

export const ButtonContainer = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
`

export const AddButton = styled.button`
  width: 250px;
  height: 50px; 
  font-size: 25px; 
`;

export const ArticleContainer = styled.div`
  border-bottom: 1px solid #c4c4c4; 
  padding-bottom: 20px
`

export const ArticleTitle = styled.h2`

`

export const ArticleContent = styled.div`

`