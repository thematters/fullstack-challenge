import React from 'react'
import { useState } from 'react';
import { useAccount } from 'wagmi';
import {  WalletOptionsModal, NavBar } from '../components';
import { ArticleList } from '../components/ArticleList';
import { useQuery } from '@apollo/client';
import { GET_ARTICLES, GET_ARTICLES_COUNT } from "../graphql/mutations/article";
import {
  Container,
  Text,

} from '@chakra-ui/react'
import { Article } from './types'

const NUM_PER_PAGE = 7;

const App = (): React.ReactElement => {

  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const { data: accountData } = useAccount({ });
  const [page, setPage] = useState(0);

  const { data: articlesData } = useQuery(GET_ARTICLES, {
    onCompleted: (data) => {
      console.log("Loading completed")
    },
    variables :{
      limit: NUM_PER_PAGE,
      offset: page * NUM_PER_PAGE
    }
  });


  const { data: articlesCountData } = useQuery(GET_ARTICLES_COUNT, {
    onCompleted: (data) => {
      console.log("Loading completed: " + data.articlesCount)
    }
  })

  const articles: Article[] = articlesData != null ? articlesData.articles : [];
  const articlesCount = articlesCountData != null ? articlesCountData.articlesCount : 0;


  const getShowWalletOptions = (isShow: boolean) => {
    setShowWalletOptions(isShow);
  }

  return (
    <>
      <NavBar 
        showWalletOptions={getShowWalletOptions}
      />
     {accountData == null &&     
     <Container >
        <Text fontSize='4xl'>👀Oops, no articles here</Text>
        <Text fontSize='4xl'>😁Connect your wallet first</Text>
        <WalletOptionsModal  open={showWalletOptions} setOpen={setShowWalletOptions}/>
    </Container> }

    {accountData != null &&
    <Container maxW="1200px" width="100%" overflow="auto" marginX="auto">
      {articles.length > 0 &&  <ArticleList 
          page={page}
          setPage={setPage}
          articles={articles}
          pageCount={Math.ceil(articlesCount / NUM_PER_PAGE)}
           />}
      {articles.length == 0 &&  <Text fontSize='4xl'>Let's write a post!</Text>} 
    </Container>}

    </>
 
  )
}

export default App