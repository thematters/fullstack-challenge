import {
    Container,
    Flex,
    Text,
    Textarea,
    Input,
    Button,
    ButtonGroup,
    Box,
    Image,
    Divider,
    useToast,
    Link
} from '@chakra-ui/react'
import { useState } from 'react'
import { ADD_ARTICLE } from "../../graphql/mutations/article";
import { useMutation } from "@apollo/client";
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';


interface Props {
    children: string | JSX.Element;
}

export default function ArticleEditor(props: Props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const toast = useToast()
    const { data: accountData } = useAccount({
    });
    const router = useRouter()

    const [addArticle, { data, loading, error}] = useMutation(ADD_ARTICLE, {
        onCompleted: () => {
            toast({
                title: 'Submit successfully',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position: 'top'
              })
            router.push('/')
          },
          onError: () => {
            toast({
                title: 'Add article failed',
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
          },
    });

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }
    const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
      
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if(!accountData) {
            toast({
                title: 'Please connect your wallet!',
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
        }
        addArticle( { variables: { title, content } } )
        if(error) {
            toast({
                title: 'Submit Faild.',
                status: 'error',
                duration: 4000,
                isClosable: true,
              })
        }
    }

    const handleCancel = () => {
        setTitle("");
        setContent("");
     
    }
    return (
        <>
        <Box my={10}>
        <Link href='/' > <Image my={8}  src="/images/zen.jpeg" />
        </Link>
       
        <Divider  borderColor='black'/>
        </Box>
        <Container maxW="1200px" width="100%" overflow="auto" marginX="auto">
            <Flex flexDirection='column' gap='4'>
                <Flex flexDirection='column' gap='1'>
                    <Text as='u' fontSize='3xl'>Title</Text>
                    <Input 
                        placeholder='Title' 
                        size='md' variant='flushed'
                        onChange={handleTitleChange} 
                        value={title}/>
                </Flex>

                <Flex flexDirection='column' gap='1'>
                    <Text  fontSize='3xl'>Content</Text>
                    <Textarea 
                        placeholder='Write your content here ;)' 
                        value={content}
                        onChange={handleContentChange} />

                </Flex>
                <ButtonGroup variant='outline' spacing='6'>
                    <Button colorScheme='red' size='sm' onClick={handleCancel}>Cancel</Button>
                    <Button colorScheme='black' size='sm' onClick={handleSubmit}>Submit</Button>
                </ButtonGroup>
            </Flex>

        </Container>
        </>
    )
}