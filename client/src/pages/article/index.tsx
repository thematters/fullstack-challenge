import { Container, Text, Image, Box, Divider, Link } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { GET_ARTICLE_BY_ID } from "../../graphql/mutations/article";


export default function Artcile(query: any) {
    const route = useRouter()
    query = route.query
    console.log(query.id)
    const { data, loading } = useQuery(GET_ARTICLE_BY_ID, {
        variables: {
            _id: query.id
        }
    })
    const title =  data != null ? data.article[0].title : ''
    const content = data != null ? data.article[0].content : ''
    
    return (
    <>
        <Box my={10}>
        <Link href='/' > <Image my={8}  src="/images/zen.jpeg" />
        </Link>
            <Divider  borderColor='black'/>
        </Box>
        <Container maxW="1200px" width="100%" overflow="auto" marginX="auto">
           <Text as='u' fontSize='5xl'>{title}</Text>
            
            <Text fontSize='3xl' my={10}>{content}</Text>
        </Container>
         </>
    )
}