import {
    Flex,
    Box,
    Text,
    Image,
    Divider,
    Button
} from '@chakra-ui/react'


import { Link } from '@chakra-ui/react'
import { useRouter } from 'next/router';

type Article  = { _id: string, title: string; content: string };

interface Props {
    articles: Article[];
    page: number;
    setPage: (page: number) => void;
    pageCount: number;
}

const ArticleItem = ({ article }: { article: Article }) => {
    const router = useRouter();
    return (
        <Box 
            boxShadow='xl'
            p={4}
            borderRadius="md">
            <Flex direction='column' gap='1'>
                <Link
                    onClick={() => router.push({
                        pathname: '/article',
                        query: { id: article._id }
                    })}
                ><Text fontSize='3xl' as='u'>{article.title}</Text>
                </Link>
               
                <Text noOfLines={1} fontSize='xl'>{article.content}</Text>
            </Flex>
        </Box>
    )
}

export const ArticleList = (props: Props): React.ReactElement => {

    const { page, setPage, articles, pageCount } = props;
    const disableLeftBtn = page === 0;
    const disableRightBtn = page === pageCount - 1;

    return (
        <>
        <Box my={10}>
            <Flex alignItems='center' justifyContent='center'>
                <Image my={8}  src="/images/zen.jpeg" />
                <Text fontSize='5xl'>文章列表</Text>
            </Flex>
            
            <Divider  borderColor='black'/>
        </Box>
       
            <Flex gap='4' direction='column'>
                {articles.map(article => {
                    return <ArticleItem key={article._id} article={article} />
                })}
            </Flex>
            <Flex gap='4' direction='row' justifyContent='space-between' my={6}>
            <Button colorScheme='black' variant='outline' disabled={disableLeftBtn} onClick={() => setPage(page - 1)}>Prev</Button>
            <Button colorScheme='black' variant='outline' disabled={disableRightBtn} onClick={() => setPage(page + 1)}>Next </Button>
            </Flex>
        </>

    );

}
